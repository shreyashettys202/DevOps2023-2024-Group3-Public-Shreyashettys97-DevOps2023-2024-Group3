provider "aws" {
region  = "us-west-1"
}
resource "aws_instance" "web" {
  ami           = "ami-07619059e86eaaaa2"
  instance_type = "t2.micro"
  
  
 }

resource "aws_vpc" "wwa-vpc" {
       cidr_block = "10.1.0.0/16"
       tags = {
        Name = "wwa-vpc"
     }
   }

//Create a Subnet 
resource "aws_subnet" "wwa-public_subent_01" {
    vpc_id = aws_vpc.wwa-vpc.id
    cidr_block = "10.1.1.0/24"
    map_public_ip_on_launch = "true"
    availability_zone = "us-west-1b"
    tags = {
      Name = "wwa-public_subent_01"
    }
}
//Creating an Internet Gateway 
resource "aws_internet_gateway" "wwa-igw" {
    vpc_id = aws_vpc.wwa-vpc.id
    tags = {
      Name = "wwa-igw"
    }
}
// Create a route table 
resource "aws_route_table" "wwa-public-rt" {
    vpc_id = aws_vpc.wwa-vpc.id
    route {
        cidr_block = "0.0.0.0/0"
        gateway_id = aws_internet_gateway.wwa-igw.id
    }
    tags = {
      Name = "wwa-public-rt"
    }
}
// Associate subnet with route table

resource "aws_route_table_association" "wwa-rta-public-subent-1" {
    subnet_id = aws_subnet.wwa-public_subent_01.id
    route_table_id = aws_route_table.wwa-public-rt.id
}

