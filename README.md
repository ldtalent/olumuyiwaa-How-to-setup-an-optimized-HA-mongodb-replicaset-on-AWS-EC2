# OlumuyiwaA-How-to-setup-an-optimized-HA-mongodb-replicaset-on-AWS-EC2

## Important Notes before you start:

### env and .env
- in production, *.env* file will not be required. the *ROLE_ARN* variable will be provided by the IAM Instance Profile value

### index.js
- this is the app used to test the deployed replica set
- change the [URI](https://github.com/ldtalent/OlumuyiwaA-How-to-setup-an-optimized-HA-mongodb-replicaset-on-AWS-EC2/blob/main/index.js#L3) to the value for your deployed replica set
- if you change the value of the test database when configuring the replica set, then [dbname](https://github.com/ldtalent/OlumuyiwaA-How-to-setup-an-optimized-HA-mongodb-replicaset-on-AWS-EC2/blob/main/index.js#L5) must bechanged also. This also applies to the test collection [collectionName](https://github.com/ldtalent/OlumuyiwaA-How-to-setup-an-optimized-HA-mongodb-replicaset-on-AWS-EC2/blob/main/index.js#L6)

### user data
- there are 2 versions, one for the data nodes, the other for the hidden node
- replace the placeholders for the [github](https://github.com/ldtalent/OlumuyiwaA-How-to-setup-an-optimized-HA-mongodb-replicaset-on-AWS-EC2/blob/main/replicaset/user-data-for-hidden-nodes.sh#L7) credentials with your values