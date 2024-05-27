"use client"

import AlertDialog from "~/app/components/DialogBox"
import { DeleteIcon, EditIcon } from "~/app/components/ChakraIcons"
import DialogBox from "~/app/components/DialogBox"
import { useRef } from "react"

const EventCardAction = ({cardId}: {cardId:number})=> {

    const apiUrl = `/api/event`;


    const dialogRef = useRef<any>();

    const handleEventDeletion = ()=> {
        dialogRef.current.open();
    }

    const handleEventEdit = ()=> {
        
    }

    const onDialogCloseHandler = ()=> {
         
        fetch(apiUrl,{
        method: 'DELETE',
        headers: {
           'Content-Type': 'application/json',
        },
        body : JSON.stringify({
            id: cardId,
        })
    }).then(async ()=> {
        
        dialogRef.current.close()
    })

    }

   
    return  (
         
        <>
        <div
        className="flex gap-x-[10px] absolute right-0"

        >
        
        <DeleteIcon onClick={handleEventDeletion} cursor={'pointer'} />
        <EditIcon  onClick={handleEventEdit} cursor={'pointer'}/>

        </div>
        <DialogBox onClose={onDialogCloseHandler} ref={dialogRef} isCancelButton={true} isOkButton={true} body='Are you sure to delete?' title='Confirmation'/>
        </>




    )

}

export default EventCardAction