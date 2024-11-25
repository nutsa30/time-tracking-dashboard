import { useState } from "react"
import { createContext } from "react"


export const TimeContext = createContext () 


const TimeContextProvider = ({children}) => {
  const [time, setTime]= useState("weekly")

  return (
   <TimeContext.Provider
       value={{
       time:time,
       setTime:setTime,
      }}
      
    >
     {children}
    </TimeContext.Provider>
 )
}


export default TimeContextProvider
