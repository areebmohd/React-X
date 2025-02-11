import "./app.css"
import Leftbar from "./components/leftbar"
import Rightbar from "./components/rightbar"
import HomePage from "./components/homePage"
import ExplorePage from "./components/explorePage"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Leftbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explorePage" element={<ExplorePage />} />
      </Routes>
      <Rightbar />
    </div>
  )
}

export default App
