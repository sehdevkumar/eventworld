"use server";

import { Badge, Box, Flex , Image , Text } from "@chakra-ui/react";
import { type CreateEventRes } from "~/app/typings/api-typings";
import EventCardAction from "./EventCardAction";

const EventCard = async ({ eventData }: { eventData: CreateEventRes }) => {
   return (
     <div
     className="shadow-md shadow-slate-400 grid w-full  rounded-md p-[10px]"
     >

       <Box className='relative flex flex-col gap-y-[5px]'>
       <Image objectFit={'contain'} aspectRatio={16 / 9} width={'100%'} height={'100%'} src={eventData.file} alt={`${eventData.event} image`} />
         <EventCardAction  cardId={eventData?.id}/>

         <Box display="flex" alignItems="baseline">
           <Badge borderRadius="full" px="2" colorScheme="teal">
             New
           </Badge>
           <Box
             color="gray.500"
             fontWeight="semibold"
             letterSpacing="wide"
             fontSize="xs"
             textTransform="uppercase"
             ml="2"
           >
             {eventData.location}
           </Box>
         </Box>

         <Box
           mt="1"
           fontWeight="semibold"
           as="h4"
           lineHeight="tight"
           className="text-xl"
         >
           {eventData.event}
         </Box>

         <Box>
           <Text fontSize="md" className="text-gray-700">
             {eventData.desc}
           </Text>
         </Box>

         <Flex mt="2" justifyContent="space-between" alignItems="center">
           <Text fontSize="sm" className="text-gray-500">
             Created at: {new Date(eventData.createdAt).toLocaleDateString()}
           </Text>
           <Text fontSize="sm" className="text-gray-500">
             Uploaded at: {new Date(eventData?.uploadedAt ?? new Date()).toLocaleDateString()}
           </Text>
         </Flex>
       </Box>
     </div>
   );
};


export default EventCard