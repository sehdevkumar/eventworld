

export async function POST(request: Request) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const socketIO: any = (global as any).io;



  console.log(socketIO.emit('live-count',"Hello world"))

 

  return Response.json({ message: "Created Successfully" });
}
