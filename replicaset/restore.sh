#!/bin/bash

aws s3 cp s3://${2}/${3}.gz ~/${3}.gz 
mongorestore --drop --gzip --archive=~/${3}.gz
rm ~/${3}.gz
/usr/bin/node ./notifier/restore.js ${1}