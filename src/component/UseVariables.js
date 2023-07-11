import React, { createContext, useState } from 'react'

const MyContext = createContext()

export default function UseVariables({ children }) {

    const base_path = "http://localhost:8000/user"

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [contact, setContact] = useState(0)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState([])
    const [uid, setUid] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <MyContext.Provider
            value={{
                base_path, fname, setFname, lname, setLname, contact, setContact, email, setEmail, password,
                setPassword, user, setUser, uid, setUid, loggedIn, setLoggedIn
            }}
        >
            {children}
        </MyContext.Provider>
    )
}

export { MyContext }