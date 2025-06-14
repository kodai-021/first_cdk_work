import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as FirstCdkWork from '../../lib/first_cdk_work-stack';

test('NatGateway',() => {
    const app = new cdk.App();
    const stack = new FirstCdkWork.FirstCdkWorkStack(app,'FirstCdkWorkStack');
    const template = Template.fromStack(stack);

    //リソースが１つ存在すること
    template.resourceCountIs('AWS::EC2::NatGateway', 2);

    //NatGatewayのプロパティ確認
    template.hasResourceProperties('AWS::EC2::NatGateway',{
        Tags: [{'Key':'Name','Value':'undefined-undefined-ngw-1a'}]
    });

    //NatGatewayのプロパティ確認
    template.hasResourceProperties('AWS::EC2::NatGateway',{
        Tags: [{'Key':'Name','Value':'undefined-undefined-ngw-1c'}]
    });

});