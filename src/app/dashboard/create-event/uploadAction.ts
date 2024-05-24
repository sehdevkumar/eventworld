"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import fs from "node:fs/promises";
export interface FromIniialState {
    message:string;
}

const UploadAction = async (prevState: FromIniialState, formData: FormData)=> {

    const apiUrl = `http://${process.env.SERVER_IP}:${process.env.SERVER_PORT}/api/event`;
    const event = formData.get('event');
    const desc = formData.get('description');
    const location = formData.get('location');
    
    const file = formData.get('upload_file') as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const filePath = `./public/uploads/${file?.name}`

    
    await fetch(apiUrl,{
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
        },
        body : JSON.stringify({
            event: event,
            file: filePath,
            desc: desc,
            location: location
        })
    }).then(async ()=> {
         

        await fs.writeFile(filePath, buffer);
    })
    
    formData.delete('event')

    return {
        message: "Form Successfully"
    }

}


export default UploadAction