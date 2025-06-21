import "./App.css"
import { useState } from "react";
import Welcome from "./Welcome.jsx"
import { btnClick } from "./BtnClick.js";
import Profile from "./components/Profile.jsx";

function App() {

  // const headerStyle = {
  //   color: "red",
  //   backgroundColor:"blue",
  //   textAlign:"center" // internal css
  // }

  // const buttonClick = () => {
  //   alert("Button Clicked!") // internal js
  // }

    const myName = "Artika"
    const fullName = "A Faisal"
    let fruits = ["Apple", "Mango", "Banana", "Kiwi", "Watemelon", "Orange", "Lemon"]

    let count = 0

    const increaseCount = () => {
      count++
      console.log(count)
    }

    let [stateCount, setStateCount] = useState(0) // this is how we declare variable

    const profiles = [
    {
      name: "Artika",
      title: "myMahir Participant",
      imageUrl: "https://i.pinimg.com/474x/ce/e1/1a/cee11a1ad91841c70fbe067064df6f2e.jpg"
    },
    {
      name: "Tony Stark",
      title: "Genius Billionaire Philanthrophist",
      imageUrl: "https://www.otaa.com/cdn/shop/articles/Formal_Elegance-963691_38e4c990-8872-4d2c-b441-28f2efd3ec5f-876137_1200x1200.jpg?v=1741534395"
    },
    {
      name: "Seiji",
      title: "Violinist Ghibli Studio",
      imageUrl: "https://64.media.tumblr.com/4d0d50f3db74d1d1a016cadbc9414f55/tumblr_inline_p1oi5ypnsa1sss5ih_500.pnj"
    }
  ]

    return (
      <div>
      {/* <h1 style={{color: "red", backgroundColor:"blue", textAlign:"center"}}>Hello World</h1>
      //if u want to write inline css, it should be in object format */}
        
        <Welcome name={myName} fullName={fullName}/> 
        <h4>List of hobbies</h4>
        <ul>
          <li>Reading</li>
          <li>Painting</li>
          <li>Baking</li>
        </ul>
        {/* <button onClick={() => alert("Button Clicked")}>Click me!</button>  */}
        {myName == "Artika" ?  <button onClick={() => btnClick(myName)}>It's Artika!</button> : <h2>It's not Artika!</h2> } 
        <ol>
          {fruits.map((fruit, i) => (
            <li key={i}>{fruit}</li>
        ))}
        </ol>

        {profiles.map((profile, i) => (  //
          <Profile key={i} name={profile.name} title={profile.title} imageUrl={profile.imageUrl}/> 

        ))}

        {/* <button onClick={increaseCount}>count: {count}</button> */}
        <button onClick={() => setStateCount(stateCount + 1)}>count: {stateCount}</button> 
      
        
      </div>
    
    ); 
}

export default App
