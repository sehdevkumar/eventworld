import { useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { type WebsocketEventEnum } from "../typings/platform";

const useWebSocketConnectionHook = (cb:(arg:unknown)=>void,event:WebsocketEventEnum)=> {

  const socketRef = useRef<any>(null);

  function socketClient() {
    const socket = io({
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      socket.on(event as unknown as string, (data) => {
        cb(data);
      });
      console.log("Connected");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected");
    });

    socket.on("connect_error", async (err) => {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      console.log(`connect_error due to ${err}`);
      console.log(socket)
      await fetch('/api/socket');
    });

  
    socketRef.current = socket;
  }

  useEffect(() => {
    socketClient();
    return ()=> {
      socketRef?.current?.disconnect();
    }
  },[]);


}

export default useWebSocketConnectionHook;