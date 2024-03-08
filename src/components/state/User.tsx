import { useState } from "react"
type AuthUser = {
    name: string,
    email: string
}
export const User = () => {
    const [user, setUser] = useState({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name: "Nodirbek",
            email: "Nodirbek's email"
        })
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <div>user name is {user.name}</div>
            <div>user email is {user.email}</div>
        </div>
    )
}