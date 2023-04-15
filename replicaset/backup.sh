#!/bin/bash

mongodump -p=<pwd> -u=<usr> --gzip
zip -r ${3}.gz ./dump
aws s3 cp /home/ubuntu/${3}.gz s3://${2}/${3}.gz --storage-class 'STANDARD_IA'
rm /home/ubuntu/${3}.gz
sudo rm -r /home/ubuntu/dump
/usr/bin/node /home/ubuntu/<repo_name>/<optional_sub_directory>/notifiers/backup.js ${1}