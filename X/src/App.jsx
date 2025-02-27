import { Routes, Route } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import Leftbar from "./components/leftbar"
import Rightbar from "./components/rightbar"
import HomePage from "./components/homePage"
import ExplorePage from "./components/explorePage"
import ContentMenu from "./components/contentMenu"
import Originals from "./components/originals"
import Trending from "./components/trending"
import Videos from "./components/videos"
import Vines from "./components/vines"
import Spaces from "./components/spaces"
import Spaces2 from "./components/spaces2"
import Spaces3 from "./components/spaces3"
import Feed1 from "./components/feed1"
import Profile from "./components/profile"

function App() {

  const [contentMenu, setContentMenu] = useState(false)
  const [spaces2, setSpaces2] = useState(false)
  const [spacesContent, setSpacesContent] = useState(null)
  const [spacesHost, setSpacesHost] = useState(null)
  const [explorePage,setExplorePage] = useState(false)
  const [homePage,setHomePage] = useState(true)
  const [leftBar, setLeftBar] = useState(window.innerWidth > 1240);
  const [profile,setProfile] = useState(false)

  const leftBarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setLeftBar(windowWidth > 1240);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        window.innerWidth <= 1240 &&
        leftBarRef.current &&
        !leftBarRef.current.contains(event.target) &&
        !event.target.closest('.display-image')
      ) {
        setLeftBar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleLeftBar = () => {
    if (window.innerWidth <= 1240) {
      setLeftBar(prevState => !prevState);
    }
  };

  return (
    <div className="app">
      {!contentMenu ? leftBar?<Leftbar setProfile={setProfile} profile={profile} setExplorePage={setExplorePage} explorePage={explorePage} setHomePage={setHomePage} homePage={homePage} leftBarRef={leftBarRef}/>:'': <ContentMenu />}
      <Routes>
        <Route path="/" element={<HomePage contentMenu={contentMenu} setContentMenu={setContentMenu} setHomePage={setHomePage} toggleLeftBar={toggleLeftBar} />} />
        <Route path="/originals" element={<Originals contentMenu={contentMenu} setContentMenu={setContentMenu}/>} />
        <Route path="/trending" element={<Trending contentMenu={contentMenu} setContentMenu={setContentMenu}/>} />
        <Route path="/videos" element={<Videos contentMenu={contentMenu} setContentMenu={setContentMenu}/>} /> 
        <Route path="/vines" element={<Vines contentMenu={contentMenu} setContentMenu={setContentMenu}/>} />
        <Route path="/spaces" element={<Spaces contentMenu={contentMenu} setContentMenu={setContentMenu} setSpaces2={setSpaces2} setSpacesHost={setSpacesHost} spacesContent={spacesContent} setSpacesContent={setSpacesContent}/>} />
        <Route path="/spaces3" element={<Spaces3 contentMenu={contentMenu} setContentMenu={setContentMenu} setSpaces2={setSpaces2} spacesHost={spacesHost} setSpacesHost={setSpacesHost} spacesContent={spacesContent} setSpacesContent={setSpacesContent}/>} />
        <Route path="/feed1" element={<Feed1 contentMenu={contentMenu} setContentMenu={setContentMenu}/>} />
        <Route path="/explorePage" element={<ExplorePage setExplorePage={setExplorePage} setHomePage={setHomePage} toggleLeftBar={toggleLeftBar}/>} />
        <Route path="/profile" element={<Profile setProfile={setProfile} setHomePage={setHomePage} />}/>
      </Routes>
      {!spaces2 ? <Rightbar explorePage={explorePage}/>:<Spaces2 setSpaces2={setSpaces2} spaces2={spaces2} setSpacesHost={setSpacesHost} spacesHost={spacesHost} spacesContent={spacesContent} setSpacesContent={setSpacesContent}/>} 
    </div>
  )
}

export default App
