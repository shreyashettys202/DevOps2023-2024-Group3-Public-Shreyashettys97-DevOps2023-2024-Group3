#!/bin/bash

# Update package lists
sudo apt update

# Upgrade installed packages without user prompt
sudo apt upgrade -y

# Install k3s using the official installer script
sudo curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--write-kubeconfig-mode 644" sh -

# Check the status of k3s service
sudo systemctl status k3s

# Download and install node_exporter
wget https://github.com/prometheus/node_exporter/releases/download/v1.5.0/node_exporter-1.5.0.linux-amd64.tar.gz
tar -xvzf node_exporter-*.tar.gz
sudo mv node_exporter-1.5.0.linux-amd64/node_exporter /usr/local/bin
rm -r node_exporter-1.5.0.linux-amd64*

# Create a system user for node_exporter
sudo useradd -rs /bin/false node_exporter

# Insert node_exporter systemd service unit
sudo tee /etc/systemd/system/node_exporter.service > /dev/null <<EOT
[Unit]
Description=Node Exporter
Wants=network-online.target
After=network-online.target

[Service]
User=node_exporter
Group=node_exporter
Type=simple
Restart=on-failure
RestartSec=5s
ExecStart=/usr/local/bin/node_exporter

[Install]
WantedBy=multi-user.target
EOT

# Enable and start node_exporter service
sudo systemctl enable node_exporter
sudo systemctl daemon-reload
sudo systemctl start node_exporter
sudo systemctl status node_exporter

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
