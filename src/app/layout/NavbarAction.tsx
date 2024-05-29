"use client"

import { useRouter } from "next/navigation"
import { DashboardPathEnum } from "../typings/platform"
import { Button } from "../components/ChakraUI"

const NavActionsComponet = ()=> {
    
    const router  = useRouter()

    const onNavigation = (path:DashboardPathEnum)=> {
       router.push(path)
    }

    return <>
         <Button onClick={()=> onNavigation(DashboardPathEnum.CREATE_EVENT)}>Create Event</Button>
         <Button onClick={()=> onNavigation(DashboardPathEnum.BOOK_EVENT)}>Book Event</Button>
    </>

}

export default NavActionsComponet