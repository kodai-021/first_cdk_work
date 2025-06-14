import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as FirstCdkWork from '../lib/first_cdk_work-stack';


test('Context', () => {
  const app = new cdk.App({
    context: {
      'systemName': 'devio',
      'envType': 'stg'
    }
  });
  const stack = new FirstCdkWork.FirstCdkWorkStack(app, 'FirstCdkWorkStack');

  const template = Template.fromStack(stack);
  template.hasResourceProperties('AWS::EC2::VPC', {
    Tags: [{ 'Key': 'Name', 'Value': 'devio-stg-vpc' }]
  })
});
