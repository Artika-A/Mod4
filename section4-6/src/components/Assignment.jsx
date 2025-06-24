// Assignment: Profile Viewer
// 1. Create a route /profile/:username:
// 2. Use useParams() to show:
//      "Hello, [username]!"
// 3. Create a page Profile.jsx that uses the param
// 4. Test with /profile/howie or /profile/siti


import { useParams } from "react-router-dom";

function Assignment() {
   const {username} = useParams();
   
  
   return (
        <div>
            <h1>Hello, {"Artika"}</h1>
        </div>
   )

}

export default Assignment