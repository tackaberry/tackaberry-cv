
data "google_iam_policy" "viewer" {
  binding {
    role = "roles/storage.objectViewer"
    members = [
      "allUsers",
    ]
  }
}

resource "google_storage_bucket_iam_policy" "bucket_default_public" {
  bucket      = google_storage_bucket.default.name
  policy_data = data.google_iam_policy.viewer.policy_data
}

resource "google_storage_bucket_iam_policy" "bucket_pres1_public" {
  bucket      = google_storage_bucket.bucket_pres1.name
  policy_data = data.google_iam_policy.viewer.policy_data
}


resource "google_storage_bucket" "default" {
  project       = var.project
  name          = var.name
  force_destroy = false
  location      = "US"
  storage_class = "STANDARD"

  uniform_bucket_level_access = true

  website {
    main_page_suffix = "index.html"
    not_found_page   = "404.html"
  }
}

resource "google_storage_bucket" "bucket_pres1" {
  project                     = var.project
  name                        = var.pres1
  force_destroy               = false
  location                    = "US"
  storage_class               = "STANDARD"
  uniform_bucket_level_access = true

  website {
    main_page_suffix = "index.html"
    not_found_page   = "404.html"
  }
}

resource "google_compute_backend_bucket" "default" {
  name        = "backend-${var.name}"
  bucket_name = google_storage_bucket.default.name
  enable_cdn  = true
}

resource "google_compute_backend_bucket" "pres1_backend" {
  name        = "backend-${var.pres1}"
  bucket_name = google_storage_bucket.bucket_pres1.name
  enable_cdn  = true
}

resource "google_compute_managed_ssl_certificate" "default" {
  project = var.project

  name = "${var.name}-certificate"

  lifecycle {
    create_before_destroy = true
  }

  managed {
    domains = [var.host, "www.${var.host}", "${var.pres1}.${var.host}"]
  }
}


resource "google_compute_global_address" "default" {
  name       = "${var.name}-address"
  ip_version = "IPV4"
}

resource "google_compute_global_forwarding_rule" "http" {
  project               = var.project
  name                  = var.name
  target                = google_compute_target_http_proxy.default.id
  ip_address            = google_compute_global_address.default.address
  port_range            = "80"
  load_balancing_scheme = "EXTERNAL_MANAGED"
}

resource "google_compute_global_forwarding_rule" "https" {
  project               = var.project
  name                  = "${var.name}-https"
  target                = google_compute_target_https_proxy.default.id
  ip_address            = google_compute_global_address.default.address
  port_range            = "443"
  load_balancing_scheme = "EXTERNAL_MANAGED"
}

resource "google_compute_target_http_proxy" "default" {
  project = var.project
  name    = "${var.name}-http-proxy"
  url_map = google_compute_url_map.https_redirect.id
}

resource "google_compute_url_map" "https_redirect" {
  project = var.project
  name    = "${var.name}-https-redirect"
  default_url_redirect {
    https_redirect         = true
    redirect_response_code = "MOVED_PERMANENTLY_DEFAULT"
    strip_query            = false
  }
}


resource "google_compute_target_https_proxy" "default" {
  project = var.project

  name    = "${var.name}-https-proxy"
  url_map = google_compute_url_map.default.id

  ssl_certificates = [google_compute_managed_ssl_certificate.default.id]

  depends_on = [google_compute_url_map.default]
}


resource "google_compute_url_map" "default" {
  project         = var.project
  name            = var.name
  default_service = google_compute_backend_bucket.default.id

  host_rule {
    hosts        = [var.host]
    path_matcher = "default"
  }

  host_rule {
    hosts        = ["${var.pres1}.${var.host}"]
    path_matcher = var.pres1
  }

  path_matcher {
    name            = "default"
    default_service = google_compute_backend_bucket.default.id
    path_rule {
      paths   = ["/*"]
      service = google_compute_backend_bucket.default.id
    }
  }

  path_matcher {
    name            = var.pres1
    default_service = google_compute_backend_bucket.pres1_backend.id
    path_rule {
      paths   = ["/*"]
      service = google_compute_backend_bucket.pres1_backend.id
    }
  }

}
