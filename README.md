# OlumuyiwaA-How-to-setup-an-optimized-HA-mongodb-replicaset-on-AWS-EC2

## Important Notes before you start:

### env and .env
- in production, *.env* file will not be required. the *ROLE_ARN* variable will be provided by the IAM Instance Profile value

### index.js
- NB: Do NOT deploy this file and package*.json on the same level with the replica set code, these files are in this repo for ease of reference, they should be installed locally for testing the replica set only
- this is the app used to test the deployed replica set
- change the [URI](https://github.com/ldtalent/OlumuyiwaA-How-to-setup-an-optimized-HA-mongodb-replicaset-on-AWS-EC2/blob/main/index.js#L3) to the value for your deployed replica set
- if you change the value of the test database when configuring the replica set, then [dbname](https://github.com/ldtalent/OlumuyiwaA-How-to-setup-an-optimized-HA-mongodb-replicaset-on-AWS-EC2/blob/main/index.js#L5) must bechanged also. This also applies to the test collection [collectionName](https://github.com/ldtalent/OlumuyiwaA-How-to-setup-an-optimized-HA-mongodb-replicaset-on-AWS-EC2/blob/main/index.js#L6)

### example-queries.js
- this is a set of example queries used to demonstrate proper data modeling for mongodb
- NB: Do NOT deplot this file with the replica set code, these files are in this repo for ease of reference only

### connection.js
- this file demonstrates a best practice method for connecting to mongodb
- NB: Do NOT deplot this file with the replica set code, these files are in this repo for ease of reference only

### user data
- there are 2 versions, one for the data nodes, the other for the hidden node
- replace the placeholders for the [github](https://github.com/ldtalent/OlumuyiwaA-How-to-setup-an-optimized-HA-mongodb-replicaset-on-AWS-EC2/blob/main/replicaset/user-data-for-hidden-nodes.sh#L7) credentials with your values
- ensure the [S3 Backup bucket](https://github.com/ldtalent/OlumuyiwaA-How-to-setup-an-optimized-HA-mongodb-replicaset-on-AWS-EC2/blob/main/replicaset/user-data-for-hidden-nodes.sh#L9) variable is replaced with your value, this applies to the user-data for both types of nodes

### sample.conf
- this is the production config file for mongodb. it will replace the default mongodb.conf file. 
- replace the [replSetName](https://github.com/ldtalent/OlumuyiwaA-How-to-setup-an-optimized-HA-mongodb-replicaset-on-AWS-EC2/blob/main/replicaset/sample.conf#L38) variable with your chosen replica set name

### sample-keyfile
- this is the SSH keyfile used by replica set members for secure communication
- do not use this file as is, rather generate your own e.g. 
```
openssl rand -base64 756 > <path-to-keyfile>
```
### restore.sh
- this is the bash script which restores replica set databases saved to S3 onto a fresh node
- insert your values for the [auth creds](https://github.com/ldtalent/OlumuyiwaA-How-to-setup-an-optimized-HA-mongodb-replicaset-on-AWS-EC2/blob/main/replicaset/restore.sh#L5) for the database which will be restored to the replica set

### notifiers
- there are 4 versions, backup, restore and data/hidden node. these notifiers send an email to the database admin to inform of lifecycle events
- replace the authorized [sender/receiver](https://github.com/ldtalent/OlumuyiwaA-How-to-setup-an-optimized-HA-mongodb-replicaset-on-AWS-EC2/blob/main/replicaset/restore-notifier.js#L38) variables with your AWS SES values