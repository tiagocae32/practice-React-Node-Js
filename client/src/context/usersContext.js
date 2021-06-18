import React, {useState,createContext} from 'react'

export const UserContext = createContext()

export function UserProvider ({children}) {

  const [username, setUsername] = useState(() => window.sessionStorage.getItem("username"))

  return <UserContext.Provider value={{
      username,
      setUsername
  }}>
    {children}
  </UserContext.Provider>
}

