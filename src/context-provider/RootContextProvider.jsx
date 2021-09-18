import React, {createContext, useState} from 'react'
export const RootContext = createContext()

export const RootContextProvider = ({children}) => {
    const [auth, setAuth] = useState({
        isAuth: false
    })
    return (
       <RootContext.Provider value = {{
           vAuth: [auth, setAuth]
       }}>
           {children}
       </RootContext.Provider>
    )
}
