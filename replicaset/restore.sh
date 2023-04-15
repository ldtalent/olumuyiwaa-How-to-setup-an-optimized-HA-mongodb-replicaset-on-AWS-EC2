#!/bin/bash

aws s3 cp s3://${2}/${3}.gz /home/ubuntu/${3}.gz 
unzip /home/ubuntu/${3}.gz
mongorestore -p=<pwd> -u=<usr> --gzip --drop /home/ubuntu/<repo_name>/<optional_sub_directory>/dump/
rm /home/ubuntu/${3}.gz
sudo rm -r /home/ubuntu/<repo_name>/<optional_sub_directory>/dump
/usr/bin/node /home/ubuntu/<repo_name>/<optional_sub_directory>/restore-notifier.js ${1}