import { Badge, Box, Flex , Image , Text } from "@chakra-ui/react";
import { type CreateEventRes } from "~/app/typings/api-typings";

const EventCard = ({ eventData }: { eventData: CreateEventRes }) => {
   return (
     <Box
       maxW={'lg'}
       borderWidth="1px"
       borderRadius="lg"
       className="m-4 shadow-lg"
     >
       <Image src={eventData.file.replace('./public','')} alt={`${eventData.event} image`} />

       <Box p="6">
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
             Uploaded at: {new Date(eventData.uploadedAt).toLocaleDateString()}
           </Text>
         </Flex>
       </Box>
     </Box>
   );
};


export default EventCard