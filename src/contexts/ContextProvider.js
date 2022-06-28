import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

// Initial App states
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

// Passing down the context states to the app components
export const ContextProvider = ({ children }) => {
  return <StateContext.Provider value={{}}>{children}</StateContext.Provider>;
};
