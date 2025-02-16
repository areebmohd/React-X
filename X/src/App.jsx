import "./app.css"
import Leftbar from "./components/leftbar"
import Rightbar from "./components/rightbar"
import HomePage from "./components/homePage"
import ExplorePage from "./components/explorePage"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import ContentMenu from "./contentMenu"

function App() {

  const [contentMenu, setContentMenu] = useState(false)

  return (
    <div className="app">
      {!contentMenu ? <Leftbar /> : <ContentMenu />}
      <Routes>
        <Route path="/" element={<HomePage contentMenu={contentMenu} setContentMenu={setContentMenu}/>} />
        <Route path="/explorePage" element={<ExplorePage />} />
      </Routes>
      <Rightbar />
    </div>
  )
}

export default App
