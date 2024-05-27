import type { Server as HTTPServer } from "http"
import type { Socket as NetSocket } from "net"
import { type NextApiRequest, type NextApiResponse } from "next";
import type { Server as IOServer } from "socket.io"


export enum DashboardPathEnum {
    HOME = '/dashboard',
    CREATE_EVENT='/dashboard/create-event',
    BOOK_EVENT ='/dashboard/book-event'
}



export interface NextApiResponseWithSocket extends NextApiResponse {
  socket: SocketWithIO
}

export interface SocketServer extends HTTPServer {
  io?: IOServer | undefined
}

export interface SocketWithIO extends NetSocket {
  server: SocketServer
}




export enum WebsocketEventEnum {
  LIVE_COUNT='live-count'
}