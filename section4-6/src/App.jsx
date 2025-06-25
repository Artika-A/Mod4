import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Explanation from "./components/Explanation"
import { MiniActivityHome, MiniActivityAbout } from "./components/MiniActivity"
import Assignment from "./components/Assignment"
import StartPage from "./components/StartPage"


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<StartPage/>}/>
      <Route path="/explanation" element={<Explanation/>}/>
      <Route path="/home" element={<MiniActivityHome/>}/>
      <Route path="/about" element={<MiniActivityAbout/>}/>
      <Route path="/profile/Artika" element={<Assignment/>}/>
      
    </Routes>
  )
}

export default App
