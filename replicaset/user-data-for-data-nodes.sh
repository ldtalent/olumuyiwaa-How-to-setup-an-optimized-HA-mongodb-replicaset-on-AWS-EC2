#!/bin/bash

sudo apt update && sudo apt upgrade
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-add-repository -y ppa:ansible/ansible
sudo apt install -y build-essential git nodejs ansible python3-boto3
git clone https://<github_username>:<github_pat>@github.com/github_username/repo_name.git
cd repo_name/<optional_sub_directory>
ansible-playbook <optional_path_to/>provisioning.yml  --extra-vars "BACKUP_BUCKET=your_s3_bucket" 