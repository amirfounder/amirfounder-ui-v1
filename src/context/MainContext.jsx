import React, { useState, useContext, createContext } from 'react';

const MainContext = createContext()

const MainProvider = ({ children }) => {

  const [themeColor, setThemeColor] = useState(0)

  return(
    <MainContext.Provider
      value={{
        themeColor, setThemeColor
      }}
    >
      {children}
    </MainContext.Provider>
  )
}

const useMainContext = () => {
  const context = useContext(MainContext)
  if (!context) {
    throw new Error("There is an error at the 'useMainContext'")
  }
  return context
}

export {MainProvider, useMainContext}
