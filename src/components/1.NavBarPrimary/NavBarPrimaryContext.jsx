import React, { createContext, useState} from 'react';


const NavigationContext = createContext();


export const NavigationProvider = ({ children }) => {

  const [activeItem, setActiveItem] = useState(null);


  const changeActiveItem = (item) => {
    setActiveItem(item);
  };
  

  return (
    <NavigationContext.Provider value={{ activeItem, changeActiveItem }}>
      {children}
    </NavigationContext.Provider>
  );
};