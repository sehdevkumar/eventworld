"use server";

import { PrismaClient } from "@prisma/client"
import React from "react"
import EventCard from "./EventCard";
import { type CreateEventRes } from "~/app/typings/api-typings";
import { Heading } from "~/app/components/ChakraUI";


const prisma  = new PrismaClient()
const LandingPage = async ()=> {

   console.log("I have to run everytime")

    const events = await prisma.createEvents.findMany() as unknown as CreateEventRes[];
     

    return  (
       
      <div className="grid gap-y-[50px] grid-rows-[max-content,minmax(0,1fr)]">

       <Heading>Connect, Collaborate, Create: Tech Events Portal</Heading>
       
        <div className="grid overflow-auto md:grid-cols-3 h-max w-full gap-[20px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
           {
            events?.map((evt)=> {
               return <>
                 <EventCard eventData={evt}/>
               </>;

            })
           }
        </div>

        </div>

    )

}



export  default LandingPage