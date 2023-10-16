
provider "google-beta" {
  project = var.project
  region  = var.region
  zone    = var.zone
}

terraform {
  backend "gcs" {
    bucket = "tackaberry-dev-tfstate"
    prefix = "terraform/state"
  }
}
