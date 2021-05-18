import React, { useState, useContext, createContext } from 'react';

const IdleClickerContext = createContext()

const IdleClickerProvider = ({ children }) => {

  const [score, setScore] = useState(0)

  return(
    <IdleClickerContext.Provider
      value={{
        score, setScore
      }}
    >
      {children}
    </IdleClickerContext.Provider>
  )
}

const useIdleClickerContext = () => {
  const context = useContext(IdleClickerContext)
  if (!context) {
    throw new Error("There is an error at the 'useIdleClickerContext'")
  }
  return context
}

export {IdleClickerProvider, useIdleClickerContext}
