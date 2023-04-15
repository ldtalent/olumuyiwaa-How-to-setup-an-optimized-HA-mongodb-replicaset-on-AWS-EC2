'use strict';
if(process.env.NODE_ENV != 'production') {
    require('dotenv').config();
  }
/**
 * Dependencies
 */
const   
    nodemailer = require("nodemailer"),
    aws = require("@aws-sdk/client-ses"),
    { defaultProvider } = require("@aws-sdk/credential-provider-node");
    

/**
 * Config
 */
const 
    {ROLE_ARN} = process.env,
    provider = defaultProvider({
        roleArn: ROLE_ARN
      }),
    ses = new aws.SES({
        apiVersion: "2010-12-01",
        region: "eu-west-1",
        credentialDefaultProvider: provider
    }),
    transporter = nodemailer.createTransport({
        SES: { ses, aws },
      }),
    MEMBER = process.argv[2];

/**
 * Execute
 */

transporter.sendMail(
    {
      from: "authorised_sender@your_email.com",
      to: "authorised_sender@your_email.com",
      subject: "Mongodb Data node UP",
      text: `Mongodb Data node member: ${MEMBER} is UP!`
    },
    (err, info) => {
      return console.error(err);
    }
  );