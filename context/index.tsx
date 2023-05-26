"use client";
import { createContext, useReducer, type ReactNode } from "react";
import { reducer } from "./reducer";
import { IProduct, IState, IAction } from "@/types";

interface IGlobalContext {
  state: IState;
  // dispatch: React.Dispatch<IAction> | null;
  dispatch:any;
}

const initialState: IState = {
  darkTheme: false,
  isLogin: null,
  testing: "contextAPI is running",
  baseURL: "",
  cart: [],
};

export const GlobalContext = createContext<IGlobalContext>({
  state: initialState,
  dispatch: null,
});

export default function ContextProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider
      value={{ state, dispatch: dispatch as React.Dispatch<IAction> }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
