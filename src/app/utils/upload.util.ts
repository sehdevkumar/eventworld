const cloudinary = require('cloudinary').v2;

//here is cloudinary api credentials
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const  uploadImage = async (fileStream: any, fileName: any)=>{
    const result = await uploadStream(fileStream, fileName);
    return result;
}

// const  deleteImage = async (fileStream: any, fileName: any)=>{
//     const result = await (fileStream, fileName);
//     return result;
// }


const uploadStream = (fileStream: any, name: any) => {

    //wrapping into promise for using modern async/await
    return new Promise((resolve, reject) => {        
        cloudinary.uploader.upload_stream({ public_id: name }, (error: any, result: unknown) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        }).end(fileStream)
    });
};

export  {
    uploadImage
}