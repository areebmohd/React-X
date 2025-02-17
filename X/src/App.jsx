import "./app.css"
import Leftbar from "./components/leftbar"
import Rightbar from "./components/rightbar"
import HomePage from "./components/homePage"
import ExplorePage from "./components/explorePage"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import ContentMenu from "./contentMenu"
import Originals from "./components/originals"
import Trending from "./components/trending"
import Videos from "./components/videos"
import Vines from "./components/vines"
import Spaces from "./components/spaces"

function App() {

  const [contentMenu, setContentMenu] = useState(false)

  return (
    <div className="app">
      {!contentMenu ? <Leftbar /> : <ContentMenu />}
      <Routes>
        <Route path="/" element={<HomePage contentMenu={contentMenu} setContentMenu={setContentMenu}/>} />
        <Route path="/originals" element={<Originals contentMenu={contentMenu} setContentMenu={setContentMenu}/>} />
        <Route path="/trending" element={<Trending contentMenu={contentMenu} setContentMenu={setContentMenu}/>} />
        <Route path="/videos" element={<Videos contentMenu={contentMenu} setContentMenu={setContentMenu}/>} />
        <Route path="/vines" element={<Vines contentMenu={contentMenu} setContentMenu={setContentMenu}/>} />
        <Route path="/spaces" element={<Spaces contentMenu={contentMenu} setContentMenu={setContentMenu}/>} />
        <Route path="/explorePage" element={<ExplorePage />} />
      </Routes>
      <Rightbar />
    </div>
  )
}

export default App
