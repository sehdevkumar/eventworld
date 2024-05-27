"use client";
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React, {
  type Dispatch,
  createContext,
  useContext,
  useReducer,
} from "react";
import useWebSocketConnectionHook from "./useWebsocketHook";
import { WebsocketEventEnum } from "../typings/platform";

export type GlobalState = {
  websocketData:any;
};

export type ApplicationType = {
  state: GlobalState;
  dispatch: Dispatch<unknown>;
};

const applicationContext = createContext<ApplicationType | undefined>(
  undefined,
);

const useApplicationContext = () => {
  const context = useContext(applicationContext);
  if (context === undefined) {
    throw new Error("Application Context is undefined");
  }

  return context;
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    default:
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return {
        ...state,
      };
  }
};

// Create the Wrapper Provider

const ApplicationProvider = ({ children }: { children: React.ReactNode }) => {
  const data: GlobalState = {
    websocketData: null
  };

 

  const [state, dispatch] = useReducer(reducer, data);


   useWebSocketConnectionHook(() => {
     console.log("me conected");
   }, WebsocketEventEnum.LIVE_COUNT);

  
  return (
    <applicationContext.Provider value={{ state, dispatch }}>
      {children}
    </applicationContext.Provider>
  );
};

export { ApplicationProvider, useApplicationContext };
