import React, { createContext, useContext, useState } from 'react'

export const countContext = createContext()

const CounterProvider = ({children}) => {

    const [Number,setNumber] = useState(0)

    const increment=()=>{
        setNumber(Number+1)
    }

    const decrement= ()=>{

        setNumber(Number-1)
    }



  return (
   
      <countContext.Provider value={{Number,increment,decrement}}>
        {children}
      </countContext.Provider>
  )
}


export const useCount=()=>{

   const context = useContext(countContext)
   return context
   
}


export default CounterProvider
