import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as FirstCdkWork from '../../lib/first_cdk_work-stack';

test('InternetGateway',() => {
    const app = new cdk.App();
    const stack = new FirstCdkWork.FirstCdkWorkStack(app,'FirstCdkWorkStack');
    const template = Template.fromStack(stack);

    //リソースが2つ存在すること
    template.resourceCountIs('AWS::EC2::EIP', 2);

    //EIPのプロパティが正しいこと 1a
    template.hasResourceProperties('AWS::EC2::EIP',{
        Domain:'vpc',
        Tags: [{'Key':'Name','Value':'undefined-undefined-eip-ngw-1a'}]
    });

    //EIPのプロパティが正しいこと 1c
    template.hasResourceProperties('AWS::EC2::EIP',{
        Domain:'vpc',
        Tags: [{'Key':'Name','Value':'undefined-undefined-eip-ngw-1c'}]
    });

});