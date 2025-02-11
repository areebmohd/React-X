import './mainbar.css'
import {Route, Routes} from 'react-router-dom'
import HomePage from './homePage'

function Mainbar() {
  return (
    <div className="mainbar">
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      </Routes>
    </div>
  )
}
export default Mainbar