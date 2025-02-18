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
import Spaces2 from "./components/spaces2"
import Spaces3 from "./components/spaces3"

function App() {

  const [contentMenu, setContentMenu] = useState(false)
  const [spaces2, setSpaces2] = useState(false)
  const [spacesContent, setSpacesContent] = useState(null)
  const [spacesHost, setSpacesHost] = useState(null)

  return (
    <div className="app">
      {!contentMenu ? <Leftbar /> : <ContentMenu />}
      <Routes>
        <Route path="/" element={<HomePage contentMenu={contentMenu} setContentMenu={setContentMenu}/>} />
        <Route path="/originals" element={<Originals contentMenu={contentMenu} setContentMenu={setContentMenu}/>} />
        <Route path="/trending" element={<Trending contentMenu={contentMenu} setContentMenu={setContentMenu}/>} />
        <Route path="/videos" element={<Videos contentMenu={contentMenu} setContentMenu={setContentMenu}/>} />
        <Route path="/vines" element={<Vines contentMenu={contentMenu} setContentMenu={setContentMenu}/>} />
        <Route path="/spaces" element={<Spaces contentMenu={contentMenu} setContentMenu={setContentMenu} setSpaces2={setSpaces2} setSpacesHost={setSpacesHost} spacesContent={spacesContent} setSpacesContent={setSpacesContent}/>} />
        <Route path="/spaces3" element={<Spaces3 contentMenu={contentMenu} setContentMenu={setContentMenu} setSpaces2={setSpaces2} spacesHost={spacesHost} setSpacesHost={setSpacesHost} spacesContent={spacesContent} setSpacesContent={setSpacesContent}/>} />
        <Route path="/explorePage" element={<ExplorePage />} />
      </Routes>
      {!spaces2 ? <Rightbar />:<Spaces2 setSpaces2={setSpaces2} spaces2={spaces2} setSpacesHost={setSpacesHost} spacesHost={spacesHost} spacesContent={spacesContent} setSpacesContent={setSpacesContent}/>} 
    </div>
  )
}

export default App
