import { useDisclosure, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogCloseButton, AlertDialogBody, AlertDialogFooter, AlertDialog } from "@chakra-ui/react"
import React, { forwardRef, useImperativeHandle } from "react"
import { Button } from "./ChakraUI"



interface DialoadType {
    title: string,
    isOkButton?:boolean,
    data?:any
    isCancelButton?:boolean,
    children?:React.ReactNode,
    body?:React.ReactNode,
    onClose?:(arg: any)=>void
}



export default forwardRef(function DialogBox(props: DialoadType,ref){
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef<any>()
   


  useImperativeHandle(ref ,()=> {
    return  {
        open: ()=> {
            onOpen()
        },
    
        close: () => {
             onClose()
        }
    }  
  })


  return (
    <>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>{props?.title}</AlertDialogHeader>
          {props?.children}
          {!props?.children &&
          <>
            <AlertDialogBody>
             {props?.body}
          </AlertDialogBody>
          
          <AlertDialogFooter>
           { props?.isCancelButton && <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
           }
           {props?.isOkButton &&
            <Button  onClick={()=> props?.onClose(props?.data)} colorScheme='red' ml={3}>
              Yes
            </Button>
           }
          </AlertDialogFooter>
          </>
          }
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
})