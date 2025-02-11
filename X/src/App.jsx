import Leftbar from "./components/leftbar"
import Rightbar from "./components/rightbar"
import { BrowserRouter } from "react-router-dom"
import "./app.css"
import Mainbar from "./components/mainbar"

function App() {
  return (
    <div className="app">
      <Leftbar />
      <BrowserRouter>
        <Mainbar />
      </BrowserRouter>
      <Rightbar />
    </div>
  )
}

export default App
