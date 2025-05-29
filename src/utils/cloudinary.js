import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploudOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("File uploaded successfully:", response.url);
    fs.unlinkSync(localFilePath); // Delete the local file after upload
    return response; // Return the response containing the URL and other details
  } catch (error) {
    fs.unlinkSync(localFilePath); // Delete the local file if upload fails
    return null;
  }
};

export { uploudOnCloudinary };
