// Create 2nd a Subnet
resource "aws_subnet" "wwa-public_subnet_02" {
   vpc_id = aws_vpc.wwa-vpc.id
   cidr_block = "10.1.2.0/24"
   map_public_ip_on_launch = "true"
   availability_zone = "us-west-1c"
   tags = {
        Name = "dpw-public_subnet_02"
     }
 }

resource "aws_route_table_association" "rtp03-rta-public-subnet-2" {
 subnet_id = aws_subnet.wwa-public_subnet_02.id
 route_table_id = aws_route_table.wwa-public-rt.id

 }

   module "sgs" {
    source = "../sg_eks"
    vpc_id     =     aws_vpc.wwa-vpc.id
 }

  module "eks" {
       source = "../eks"
       vpc_id     =     aws_vpc.wwa-vpc.id
       subnet_ids = [aws_subnet.wwa-public_subent_01.id,aws_subnet.wwa-public_subent_02.id]
       sg_ids = module.sgs.security_group_public
 }