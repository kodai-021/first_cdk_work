import * as cdk from 'aws-cdk-lib';
import { Vpc } from './resource/vpc';
import { Subnet } from './resource/subnet';
import { Construct } from 'constructs';


export class FirstCdkWorkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // VPC
    const vpc = new Vpc();
    vpc.createResources(this);

    // Subnet
    const subnet = new Subnet(vpc.vpc);
    subnet.createResources(this);
  }
}