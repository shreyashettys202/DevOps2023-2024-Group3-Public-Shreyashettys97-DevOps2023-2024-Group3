#!/bin/bash

# Update package lists
sudo apt update

# Upgrade installed packages without user prompt
sudo apt upgrade -y

# Install k3s using the official installer script
sudo curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--write-kubeconfig-mode 644" sh -

# Check the status of k3s service
sudo systemctl status k3s

# Clone the repository containing Kubernetes files
sudo git clone https://github.com/shreyashettys202/DevOps2023-2024-Group3.git /home/ubuntu/DevOps2023-2024-Group3

# Navigate to the cloned repository directory
cd /home/ubuntu/DevOps2023-2024-Group3

# Change the ownership of the directory to the current user
sudo chown -R $USER:$USER .

# Switch to the 'develop' branch
git checkout develop

# Navigate to the directory containing Kubernetes files
cd k8s-files

# Apply Kubernetes configurations
sudo kubectl apply -f .

# Get information about running pods
sudo kubectl get pods
