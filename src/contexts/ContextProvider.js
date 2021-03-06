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
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  // Open and close icons models
  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
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
