const AWS=require("aws-sdk");
const s3=new AWS.S3();
// Upload a file to S3 and store metadata in MongoDB
async function uploadFileToS3AndMongoDB(filename, fileData) {
    const params = {
      Bucket: "nan-my-uploads",
      Key: "example.txt",
      Body: "",
    };
  
    // Upload file to S3
    const s3UploadResult = await s3.upload(params).promise();
  
    // Save file metadata in MongoDB
    const fileMetadata = new FileModel({
      filename: filename,
      s3Key: s3UploadResult.Key,
    });
  
    await fileMetadata.save();
  
    return fileMetadata;
  }
  
  