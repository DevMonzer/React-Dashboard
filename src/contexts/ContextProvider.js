import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

// Some initial state
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

// Passing down the context states to the app components
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// Exporting the state using useContext context
export const useStateContext = () => useContext(StateContext);

/*

    1- Step one create the context using createContext 
    2- Step two create the initial state object 
    3- Step three create the context provider and pass down the children with the value containing the states 
    4- Step four export the context provider to your app  

*/
