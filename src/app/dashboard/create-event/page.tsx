"use client"
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Highlight,
  Heading,
  Image,
} from "~/app/components/ChakraUI";
import UploadAction from "./uploadAction";
import { useFormState } from "react-dom";
import { useEffect, useRef, useState } from "react";
const initialState = {
  message: "",
};

const CreateEventPage = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState<string>(null);
  const [fromState, action] = useFormState(UploadAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);


  const onFileHandlerChanged = ()=> {
    const file = fileRef?.current?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader?.result);
      };
      reader.readAsDataURL(file);
    }
  }

  useEffect(()=> {
    formRef.current?.reset()
    setImageSrc('');
  }, [fromState])

  return (
    <div className="grid h-full  justify-center overflow-auto">
      <Heading as={"h2"} size={"md"}>
        <Highlight query="Live" styles={{ px: "2", py: "2", bg: "red.300" }}>
          A Journey Through Dynamic Live Events
        </Highlight>
      </Heading>
      <form action={action} ref={formRef}>
        <div className="flex h-max w-full min-w-[500px] flex-col justify-center gap-y-[10px] rounded-md p-[20px] shadow-md shadow-slate-200">
          <p className="text-[24px]">Create Event</p>
          <div>
            <FormControl isRequired>
              <FormLabel>Event</FormLabel>
              <Input placeholder="Event title" name="event" />
            </FormControl>
          </div>
          <div>
            <FormControl isRequired>
              <FormLabel>Location</FormLabel>
              <Input placeholder="Event Location" name="location" />
            </FormControl>
          </div>
          <div className="w-full">
            <FormControl isRequired>
              <FormLabel>Thumbnail</FormLabel>
              <Input
                outline={"none"}
                border={"none"}
                type="file"
                name="upload_file"
                placeholder="Event title"
                onChange={onFileHandlerChanged}
                ref={fileRef}
              />
            </FormControl>

           { imageSrc && <div className="grid items-center justify-center overflow-hidden rounded-sm p-[10px] shadow-sm shadow-slate-500">
              <Image
                maxWidth={"100%"}
                maxHeight={"200px"}
                objectFit={"cover"}
                src={`${imageSrc}`}
                alt={"Selected Imaged"}
              />
            </div>
         }
          </div>

          <div>
            <FormControl isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea name="description" placeholder="Description" />
            </FormControl>
          </div>

          <div>
            <Button bg={"var(--btn-submit-bg)"} type="submit">
              Create
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateEventPage;
