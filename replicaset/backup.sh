#!/bin/bash

mongodump --gzip --archive=~/${3}.gz
aws s3 cp ~/${3}.gz s3://${2}/${3}.gz --storage-class 'STANDARD_IA'
rm ~/${3}.gz
/usr/bin/node ./notifier/backup.js ${1}