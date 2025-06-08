import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import { CfnVPC } from 'aws-cdk-lib/aws-ec2'; // <- 追加

export class FirstCdkWorkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const systemName = this.node.tryGetContext('systemName');
    const envType = this.node.tryGetContext('envType');

     new CfnVPC(this,'Vpc' ,{
        cidrBlock: '10.0.0.0/16',
        tags: [{key: 'Name',value:`${systemName}-${envType}-vpc`}]
     });

  }
}


