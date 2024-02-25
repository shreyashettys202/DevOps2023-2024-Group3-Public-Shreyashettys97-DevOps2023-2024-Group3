provider "aws" {
  region = "us-east-1"  
}

resource "aws_ecs_cluster" "example" {
  name = "my-ecs-cluster"  # a name for your ECS cluster
}

resource "aws_ecs_task_definition" "example" {
  family                   = "my-task"
  container_definitions    = jsonencode([
    {
      name        = "my-container"
      image       = "nginx:latest"  # Use Docker image here
      cpu         = 256
      memory      = 512
      portMappings = [
        {
          containerPort = 80
          hostPort      = 80
        }
      ]
    }
  ])
}

resource "aws_ecs_service" "example" {
  name            = "my-service"
  cluster         = aws_ecs_cluster.example.id
  task_definition = aws_ecs_task_definition.example.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    subnets         = ["subnet-abc123", "subnet-def456"]  # subnet IDs
    security_groups = ["sg-123abc"]  # security group ID
    assign_public_ip = true
  }
}
