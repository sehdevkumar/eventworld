"use server";

import { PrismaClient } from "@prisma/client"
import React from "react"
import EventCard from "./EventCard";
import { type CreateEventRes } from "~/app/typings/api-typings";
import { Heading } from "~/app/components/ChakraUI";
import { Divider } from "@chakra-ui/react";


const prisma  = new PrismaClient()
const LandingPage = async ()=> {
    

    const events = await prisma.createEvents.findMany() as unknown as CreateEventRes[];
     


    return (
      <div className="grid w-full grid-rows-[max-content,minmax(0,1fr)] gap-y-[50px]">
        <Heading>Connect, Collaborate, Create: Tech Events Portal</Heading>

        <Divider />

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