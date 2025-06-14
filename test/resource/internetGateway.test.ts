import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as FirstCdkWork from '../../lib/first_cdk_work-stack';

test('InternetGateway',() => {
    const app = new cdk.App();
    const stack = new FirstCdkWork.FirstCdkWorkStack(app,'FirstCdkWorkStack');
    const template = Template.fromStack(stack);

    //リソースが１つ存在すること
    template.resourceCountIs('AWS::EC2::InternetGateway', 1);

    //リソース名が正しいこと
    template.hasResourceProperties('AWS::EC2::InternetGateway',{
        Tags: [{'Key':'Name','Value':'undefined-undefined-igw'}]
    });

    //Gatewayアタッチメントが１つ存在すること
    template.resourceCountIs('AWS::EC2::VPCGatewayAttachment', 1);

});
