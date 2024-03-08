import { useState } from "react"
export const LoggedIn = () => {

    const [loggedIn, setLoggedIn] = useState(false)

    const handleLogin = () => {
        setLoggedIn(true)
    }
    const handleLogOut = () => {
        setLoggedIn(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogOut}>Log Out</button>
            <div>user is {loggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    )
}