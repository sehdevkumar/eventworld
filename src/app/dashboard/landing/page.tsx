"use server";

import { PrismaClient } from "@prisma/client"
import React from "react"
import EventCard from "./EventCard";
import { type CreateEventRes } from "~/app/typings/api-typings";
import { Heading } from "~/app/components/ChakraUI";
import { Divider, Image } from "@chakra-ui/react";


const prisma  = new PrismaClient()
const LandingPage = async ()=> {
    

    const events = await prisma.createEvents.findMany() as unknown as CreateEventRes[];
     


    return (
      <div className="grid w-full grid-rows-[max-content,max-content,minmax(0,1fr)] gap-y-[50px]">
        <div className="relative">
        <span className="absolute translate-x-[-50%] translate-y-[-50%] top-[90%] left-[50%]  font-semibold mobile:text-[20px] tablet:text-[30px] desktop:text-[40px]">Connect, Collaborate, Create: Tech Events Portal</span>

        <Image  src={'/images/event1.jpg'} alt="Events" width={"100%"} height={"100%"} aspectRatio={16 / 6}/>
        </div>

        <Divider />

        <Heading as={'h2'}>Upcomming Events</Heading>

        <div className="grid h-max min-h-[600px] w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[20px] overflow-auto md:grid-cols-3">
           

          {events?.map((evt) => {
            return (
              <div
                key={evt.id}
                className="grid w-full overflow-hidden p-[10px]"
              >
                <EventCard eventData={evt} />
              </div>
            );
          })}
        </div>
      </div>
    );

}



export  default LandingPage