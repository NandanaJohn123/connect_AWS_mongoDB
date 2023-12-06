const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  filename: String,
  s3Key: String,
  // Add other metadata fields as needed
});

const FileModel = mongoose.model('File', fileSchema);
