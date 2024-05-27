/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";

import { uploadImage } from "~/app/utils/upload.util";

export interface FromIniialState {
    message:string;
}

const UploadAction = async (prevState: FromIniialState, formData: FormData)=> {



    const apiUrl = `http://${process.env.SERVER_IP}:${process.env.SERVER_PORT}/api/event`;
    const event = formData.get('event');
    const desc = formData.get('description');
    const location = formData.get('location');
    
    const file = formData.get('upload_file') as File;
    
    const fileName = file?.name;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);


     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     const uploadResult = await uploadImage(buffer, fileName) as any;

      

    await fetch(apiUrl,{
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
        },
        body : JSON.stringify({
            event: event,
            file: uploadResult?.url,
            assetId:uploadResult?.public_id,
            desc: desc,
            location: location
        })
    })
 
    return {
        message: "Form Successfully"
    }

}


export default UploadAction