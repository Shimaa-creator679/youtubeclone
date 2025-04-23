import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Video from "./pages/videoplayer/Video"
import { useState } from "react"


function App() {
  const[sidebar,setsidebar]=useState(false)


  return (
    <>
<Navbar sidebar={sidebar} setsidebar={setsidebar}/>
<Routes>

  <Route path="/" element={<Home sidebar={sidebar}/>}></Route>
  <Route path="/video/:categoryid/:videoid" element={<Video/>}></Route>
</Routes>
    </>
  )
}

export default App
