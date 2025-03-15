import '../scss/xads.css'
import { Link } from 'react-router-dom';
import xadslogo from '../assets/xadslogo.jpg';
import { useAppContext } from '../App';
import { useEffect } from 'react';
import advertisers from '../assets/advertisers.jpg'
import publishers from '../assets/publishers.jpg'

function XAds() {

    const { setServices, setService, setHomePage } = useAppContext();

    useEffect(() => {
        setService(true);
        setServices(false);
        setHomePage(false);
    }, []);

    return (
        <div className="xads">
            <div className="topBar">
                <div className='title'>
                    <Link to={'/services'} className='link'><svg viewBox="0 0 24 24" aria-hidden="true" height='2.5rem' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03"><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg></Link>
                    <h2>X Ads</h2>
                </div>
            </div>
            <div className="logo">
                <img src={xadslogo} alt="" />
            </div>
            <h1 className='heading'>Welcome to X Ads</h1>
            <div className="boxes">
                <div className="box">
                    <h2>For Advertisers</h2>
                    <div className="innerBox">
                        <img src={advertisers} alt="" />
                        <p>X Ads is a powerful online advertising network for brands, agencies, and media buyers. With over 20 targeting settings, you deliver ads to the best-matching audiences. <br /><br /> X offers a variety of formats for advertisers to showcase their content,
                        including Promoted Ads, Vertical Video Ads, X Takeovers, Dynamic Product Ads and Collection Ads.</p>
                        <button>Get Started</button>
                    </div>
                </div>
                <div className="box">
                    <h2>For Publishers</h2>
                    <div className="innerBox">
                        <img src={publishers} alt="" />
                        <p>With the highest-paying ad network, publishers can monetize X content like vines, videos, live videos and articles, also websites and apps. <br /><br /> AI algorithms are finetuned to send the most relevant CPM rates and ad feed.
                        X offers a variety of formats for publishers to add on their content, websites and apps including image, video and banner ads.</p>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default XAds