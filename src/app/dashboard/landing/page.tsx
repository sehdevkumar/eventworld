/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use server";

import { PrismaClient } from "@prisma/client"
import React from "react"
import EventCard from "./EventCard";
import { type CreateEventRes } from "~/app/typings/api-typings";

const prisma  = new PrismaClient()

const LandingPage = async ()=> {

   
    const events = await prisma.createEvents.findMany() as unknown as CreateEventRes[];
     

    return  (
       
        <div className="grid overflow-auto h-full w-full gap-[20px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
           {
            events?.map((evt)=> {
               return <>
                 <EventCard eventData={evt}/>
               </>;

            })
           }
        </div>

    )

}



export  default LandingPage