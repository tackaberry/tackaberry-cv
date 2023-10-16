#!/bin/bash

terraform fmt -recursive
terraform init -reconfigure
terraform plan -out ./plan.out
terraform apply ./plan.out

