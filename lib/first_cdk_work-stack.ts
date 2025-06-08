import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Vpc } from 'aws-cdk-lib/aws-ec2'; // <- 追加

export class FirstCdkWorkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

     new Vpc(this, 'Vpc'); // <- 追加

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'FirstCdkWorkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}


