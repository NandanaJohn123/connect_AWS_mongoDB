const AWS = require('aws-sdk');

// Configure AWS SDK with your credentials
AWS.config.update({
  accessKeyId: 'ACCESS_KEY_FROM_IAM',
  secretAccessKey: 'SECRET_ACCESS_KEY_FROM_IAM',
  region: 'region',
});

const s3 = new AWS.S3();
const s3BucketName = 'nan-my-uploads';
