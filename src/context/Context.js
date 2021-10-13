import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const initialState = {
    cityName: "Baku",
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
