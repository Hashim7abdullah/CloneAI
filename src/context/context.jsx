import { createContext } from "react";
import run from "../config/cloneAI";

export const Context = createContext();

const ContextProvider = (props) => {
  const onSend = async (prompt) => {
    await run(prompt);
  };

  onSend("What is reactJS");

  const contextValue = {};
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
