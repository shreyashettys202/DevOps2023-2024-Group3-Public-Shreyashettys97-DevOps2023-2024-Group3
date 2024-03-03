provider "docker" {
  host    = "tcp://localhost:2376"
  tls_verify = false
}

# Docker container resource
resource "docker_container" "nginx" {
  name  = "nginx"
  image = "nginx:latest"
  ports {
    internal = 80
    external = 8080
  }
}

# Kubernetes provider
provider "kubernetes" {
  config_context_cluster    = "minikube"
}

# Kubernetes resources
resource "kubernetes_deployment" "nginx" {
  metadata {
    name = "nginx"
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "nginx"
      }
    }

    template {
      metadata {
        labels = {
          app = "nginx"
        }
      }

      spec {
        container {
          image = "nginx:latest"
          name  = "nginx"
          port {
            container_port = 80
          }
        }
      }
    }
  }
}