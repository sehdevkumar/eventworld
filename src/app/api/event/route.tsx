import { PrismaClient } from "@prisma/client";
import { type CreateEventReq } from "~/app/typings/api-typings";


const prisma = new PrismaClient();

export async function POST(request: Request) {
  
  const req = (await request?.json()) as CreateEventReq;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const createEvent = await prisma.createEvents.create({
    data: {
      event: req?.event,
      desc: req?.desc,
      file: req?.file,
      location: req?.location
    }
  })


  console.log(createEvent);


  return Response.json({ message: 'Created Successfully' });
}


export async function GET(request: Request) {
  console.log(request, "request from action");

  return Response.json({ message: "Created Successfully" });
}
