import React, { useContext, useEffect } from 'react'
import { MyContext } from '../component/UseVariables'
import { useNavigate } from 'react-router-dom'

function ProtectedRoute({ children }) {

    const navigate = useNavigate()

    const { loggedIn, setLoggedIn } = useContext(MyContext)

    

    // console.log('token in protectedr', token);

    function checkToken() {
        const token = localStorage.getItem('token')
        if(!token || token === 'undefined'){
            setLoggedIn(false)
            return navigate('/login')
        }
        setLoggedIn(true)
    }

    useEffect(() => {
        checkToken()
    }, [loggedIn])

    return (
        <>
            {loggedIn ? children : null}
        </>
    )
}

export default ProtectedRoute