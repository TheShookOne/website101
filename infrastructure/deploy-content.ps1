## Command to copy file into s3 bucket
$buildPath = (Join-Path -Path $PSScriptRoot -ChildPath "../build") #Allows you to run script to update website from any directory

$bucketName = $(aws cloudformation describe-stacks --query "Stacks[?StackName == 'website'].Outputs[0].OutputValue" --output text)
aws s3 cp --recursive $buildPath s3://$bucketName

aws s3 sync $buildPath "s3://${bucketName}" --exclude index.html --delete
aws s3 cp $buildPath "s3://${bucketName}" --recursive --exclude "*" --include "index.html" --cache-control 'max-age=0'


# $bucketName = $(aws cloudformation describe-stacks --query "Stacks[?StackName == 'website'].Outputs[0].OutputValue" --output text)
# aws s3 rm --recursive s3://$bucketName