import type  { IState, IAction } from "@/types";
import type { Reducer } from "react";

export const reducer: Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CARD": {
      return { ...state, cart: action.payload };
    }
    case "TOGGLE_THEME": {
      return { ...state, darkTheme: !state.darkTheme };
    }
    default: {
      return state;
    }
  }
};
