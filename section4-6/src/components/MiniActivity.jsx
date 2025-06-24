// Mini Activity: Build a 2-Page App
// 1. Create Home.jsx and About.jsx in /pages
// 2. Add <Link> navigation
// 3. Display unique content in each page





import { Link } from "react-router-dom";

function MiniActivityHome() {
    return (
        <div>
            <h1>This is the Homepage</h1>
            <Link to="/about">This is a link to the about page</Link>                   
        </div>
    )
}

function MiniActivityAbout() {
    return (
        <div>
            <h1>This is the page!</h1>
            <Link to="/home">This is a link to the  homepage</Link>         
        </div>
    )
}


export {MiniActivityHome, MiniActivityAbout}