## aws cloudformation validate-template --template-body file://sampletemplate.json <- To validate cloud formation yml file

# aws cloudformation delete-stack --stack-name website

# Code to deploy whole stack
aws cloudformation deploy --template-file infrastructure/cfn.yml --stack-name website