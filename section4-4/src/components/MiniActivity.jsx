// Mini Activity: Signup Form
// Create a form that asks for:
// 1. Username
// 2. Email
// 3. Use state to control both inputs and show a live summary below the form

import { useState } from "react";


function MiniActivity(){
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")

    return (
    <div>
        <form>
            <input
                type="username"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                />
            <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                />

            <h3>Username: {username}</h3> 
            <h3>Email: {email}</h3>         
        </form>
    </div>
    )
}


export default MiniActivity