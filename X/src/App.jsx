import { Routes, Route } from "react-router-dom"
import { useState, useEffect, useRef, createContext, useContext } from "react"
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
import Messages from "./components/messages"
import ChatBox from "./components/chatBox"
import NewMessage from "./components/newMessage"
import ChatInfo from "./components/chatInfo"
import Services from "./components/services"
import XAI from "./services/xai"
import XPay from "./services/xpay"
import XJobs from "./services/xjobs"
import XAds from "./services/xads"
import XFood from "./services/xfood"
import XRide from "./services/xride"

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

function App() {
  const [contentMenu, setContentMenu] = useState(false);
  const [spaces2, setSpaces2] = useState(false);
  const [spacesContent, setSpacesContent] = useState(null);
  const [spacesHost, setSpacesHost] = useState(null);
  const [explorePage, setExplorePage] = useState(false);
  const [homePage, setHomePage] = useState(true);
  const [leftBar, setLeftBar] = useState(window.innerWidth > 1240);
  const [profile, setProfile] = useState(false);
  const [messages, setMessages] = useState(false);
  const [message, setMessage] = useState(null);
  const [chatInfoPage, setChatInfoPage] = useState(false);
  const [chatName, setChatName] = useState(null);
  const [chatPic, setChatPic] = useState(null);
  const [chatBoxPage, setChatBoxPage] = useState(false);
  const [services, setServices] = useState(false);
  const [service, setService] = useState(false);

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

  const contextValue = {
    contentMenu, setContentMenu,
    spaces2, setSpaces2,
    spacesContent, setSpacesContent,
    spacesHost, setSpacesHost,
    explorePage, setExplorePage,
    homePage, setHomePage,
    leftBar, setLeftBar,
    profile, setProfile,
    messages, setMessages,
    message, setMessage,
    chatBoxPage, setChatBoxPage,
    chatInfoPage, setChatInfoPage,
    chatName, setChatName,
    chatPic, setChatPic,
    services, setServices,
    service, setService,
    leftBarRef, toggleLeftBar
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="app">
        {!contentMenu ? leftBar ? <Leftbar /> : '' : <ContentMenu />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/originals" element={<Originals />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/vines" element={<Vines />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/spaces3" element={<Spaces3 />} />
          <Route path="/feed1" element={<Feed1 />} />
          <Route path="/explorePage" element={<ExplorePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/0" element={<XPay />} />
          <Route path="/service/1" element={<XAI />} />
          <Route path="/service/2" element={<XJobs />} />
          <Route path="/service/3" element={<XAds />} />
          <Route path="/service/4" element={<XFood />} />
          <Route path="/service/5" element={<XRide />} />
        </Routes>
        {!spaces2 ? !service ? chatInfoPage ? <ChatInfo /> : chatBoxPage ? <ChatBox /> : messages && window.innerWidth > 1240 ? <NewMessage /> : <Rightbar /> : '' : <Spaces2 />}
      </div>
    </AppContext.Provider>
  )
}

export default App