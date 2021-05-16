import React, { useState, useContext, createContext } from 'react';

const MainContext = createContext()

const MainProvider = ({ children }) => {

  const [themeColor, setThemeColor] = useState('rgba(89, 222, 89, 1)')
  const [themeHighlightColor, setThemeHighlightColor] = useState('rgba(89, 222, 89, .25)')

  return(
    <MainContext.Provider
      value={{
        themeColor, setThemeColor,
        themeHighlightColor, setThemeHighlightColor
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
