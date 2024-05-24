"use client"

import { useRouter } from "next/navigation"
import { Button } from "./ChakraUI"
import { DashboardPathEnum } from "../typings/platform"

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