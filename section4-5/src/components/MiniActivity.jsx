// Mini Activity: Page Title Changer
// 1. Use useEffect to change document.title based on a count state
// Example: "You clicked 3 times"


import { useState, useEffect } from "react";

const MiniActivity = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    }, [count])

    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <p>Count: {count}</p>
        </div>
    )
}




export default MiniActivity