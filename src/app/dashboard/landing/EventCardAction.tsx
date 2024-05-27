"use client";

import { DeleteIcon, EditIcon } from "~/app/components/ChakraIcons";
import DialogBox from "~/app/components/DialogBox";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const EventCardAction = ({ cardId }: { cardId: number }) => {
  const apiUrl = `/api/event`;
  const router = useRouter();

  const dialogRef = useRef<any>();

  const handleEventDeletion = () => {
    dialogRef.current.open();
  };

  const handleEventEdit = () => {
     console.log("Me clicked")
  };

  const onDialogCloseHandler = async () => {
   await fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: cardId,
      }),
    }).then(async () => {
      dialogRef?.current?.close();
      router.refresh()
    });
  };

  return (
    <>
      <div className="absolute right-0 flex gap-x-[10px]">
        <DeleteIcon onClick={handleEventDeletion} cursor={"pointer"} />
        <EditIcon onClick={handleEventEdit} cursor={"pointer"} />
      </div>
      <DialogBox
        onClose={onDialogCloseHandler}
        ref={dialogRef}
        isCancelButton={true}
        isOkButton={true}
        body="Are you sure to delete?"
        title="Confirmation"
      />
    </>
  );
};

export default EventCardAction;
