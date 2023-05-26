"use client"
import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const initialState = {
  darkTheme: true,
  isLogin: null,
  testing: "contextAPI is running",
  baseURL: "",
};
// type myContextType = {
//   darkTheme: boolean;
//   user: {};
//   isLogin: boolean | null;
//   testing: string;
//   baseURL: string;
// };

export const GlobalContext = createContext({
  state: initialState,
  dispatch: null,
});

export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
