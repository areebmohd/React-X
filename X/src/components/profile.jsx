import '../css/profile.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dp from '../assets/dp.jpg';
import header from '../assets/header.jpg'
import PostsSection from './postsSection';
import OrgsSection from './orgsSection';
import SubsSection from './subsSection';
import MediaSection from './mediaSection';
import AboutSection from './aboutSection';
import { useAppContext } from '../App';

function Profile() {

    const { setProfile, setHomePage, setChatBoxPage, setChatInfoPage, setMessages, setExplorePage } = useAppContext();

    useEffect(() => {
        setProfile(true);
        setHomePage(false);
        setChatBoxPage(false);
        setChatInfoPage(false);
        setMessages(false);
        setExplorePage(false);
    }, []);

    function home() {
        setHomePage(true);
        setProfile(false);
    }

    const [posts, setPosts] = useState(true)
    const [orgs, setOrgs] = useState(false)
    const [subs, setSubs] = useState(false)
    const [media, setMedia] = useState(false)
    const [about, setAbout] = useState(false)

    function postsPage() {
        setPosts(true);
        setOrgs(false);
        setSubs(false);
        setMedia(false);
        setAbout(false);
    }
    function orgsPage() {
        setPosts(false);
        setOrgs(true);
        setSubs(false);
        setMedia(false);
        setAbout(false);
    }
    function subsPage() {
        setPosts(false);
        setOrgs(false);
        setSubs(true);
        setMedia(false);
        setAbout(false);
    }
    function mediaPage() {
        setPosts(false);
        setOrgs(false);
        setSubs(false);
        setMedia(true);
        setAbout(false);
    }
    function aboutPage() {
        setPosts(false);
        setOrgs(false);
        setSubs(false);
        setMedia(false);
        setAbout(true);
    }

    return (
        <div className="profile">
            <div className="topbar">
                <Link to={'/'} className='link'><svg viewBox="0 0 24 24" aria-hidden="true" onClick={() => home()} height='2.5rem' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03"><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg></Link>
                <div>
                    <h2>Ashu</h2>
                    <p>5 posts</p>
                </div>
            </div>
            <div className="header">
                <img src={header} alt="" />
            </div>
            <div className="info">
                <img src={dp} alt="" />
                <div className='name'>
                    <h2>Ashu <svg viewBox="0 0 22 22" height='18px' aria-label="Verified account" role="img" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-f9ja8p r-og9te1 r-3t4u6i" data-testid="icon-verified"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg> <p>Get Verified</p></h2>
                    <p>@ashu</p>
                </div>
                <p className='bio'>Making X The Everything App</p>
                <div className='followCount'>
                    <div><h4>34</h4><p>Following</p></div>
                    <div><h4>173</h4><p>Followers</p></div>
                </div>
                <button>Edit profile</button>
            </div>
            <div className="contentBox">
                <div className="profileOptions">
                    <h4 className={`posts ${posts ? 'highlight' : 'normal'}`} onClick={postsPage}>Posts</h4>
                    <h4 className={`orgs ${orgs ? 'highlight' : 'normal'}`} onClick={orgsPage}>Orgs</h4>
                    <h4 className={`subs ${subs ? 'highlight' : 'normal'}`} onClick={subsPage}>Subs</h4>
                    <h4 className={`media ${media ? 'highlight' : 'normal'}`} onClick={mediaPage}>Media</h4>
                    <h4 className={`about ${about ? 'highlight' : 'normal'}`} onClick={aboutPage}>About</h4>
                </div>
                {posts && <PostsSection />}
                {orgs && <OrgsSection />}
                {subs && <SubsSection />}
                {media && <MediaSection />}
                {about && <AboutSection />}
            </div>
        </div>
    )
}
export default Profile