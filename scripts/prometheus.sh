#!/bin/bash

# Update package index
sudo apt update

# Install necessary packages
sudo apt install -y curl wget

# Download Prometheus
PROMETHEUS_VERSION="2.34.0"  # Update with the latest version
wget https://github.com/prometheus/prometheus/releases/download/v${PROMETHEUS_VERSION}/prometheus-${PROMETHEUS_VERSION}.linux-amd64.tar.gz

# Extract Prometheus archive
tar xvf prometheus-${PROMETHEUS_VERSION}.linux-amd64.tar.gz

# Rename directory for easier access
mv prometheus-${PROMETHEUS_VERSION}.linux-amd64 prometheus

# Clean up downloaded archive
rm prometheus-${PROMETHEUS_VERSION}.linux-amd64.tar.gz

# Get the public IP address of the EC2 instance
PUBLIC_IP=$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)

# Create Prometheus configuration file
cat <<EOF > prometheus/prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
    - targets: ['${PUBLIC_IP}:9090']
EOF

# Start Prometheus
./prometheus/prometheus --config.file=prometheus/prometheus.yml &

echo "Prometheus is now running. Access it at http://${PUBLIC_IP}:9090"
