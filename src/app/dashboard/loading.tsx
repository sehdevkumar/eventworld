import { Spinner } from "@chakra-ui/react";

export default function Loading() {
  // Or a custom loading skeleton component
  return <Spinner
  thickness='4px'
  speed='.25s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
  position='fixed'
  left='50%'
  top='50%'
  transform={'translate(-50%,-50%)'}
/>
}