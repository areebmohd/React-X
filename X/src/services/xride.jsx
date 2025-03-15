import '../scss/xride.css'
import { useAppContext } from '../App';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import xridelogo from '../assets/xridelogo.jpg';
import bus from '../assets/bus.webp';
import train from '../assets/train.webp';
import aeroplane from '../assets/aeroplane.webp';

function XRide() {

    const { setServices, setService, setHomePage } = useAppContext();

    useEffect(() => {
        setService(true);
        setServices(false);
        setHomePage(false);
    }, []);

    return (
        <div className="xride">
            <div className="topBar">
                <div className='title'>
                    <Link to={'/services'} className='link'><svg viewBox="0 0 24 24" aria-hidden="true" height='2.5rem' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03"><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg></Link>
                    <h2>X Ride</h2>
                </div>
                <div className='options'>
                    <p>Become Driving Partner</p>
                </div>
            </div>
            <div className="logo">
                <img src={xridelogo} alt="logo" />
            </div>
            <div className="main">
                <h1>Book a Ride</h1>
                <div className="inputBox">
                    <div className="input input1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height='20px'><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                        <input type="text" placeholder='Enter pickup location' />
                    </div>
                    <div className="input input2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height='20px'><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                        <input type="text" placeholder='Enter drop location' />
                    </div>
                </div>
                <button>Ride a Taxi or Bike</button>
                <div className="tickets">
                    <div className="ticket">
                        <img src={bus} alt="" />
                        <p>Buy Bus Tickets</p>
                    </div>
                    <div className="ticket">
                        <img src={train} alt="" />
                        <p>Buy Train Tickets</p>
                    </div>
                    <div className="ticket">
                        <img src={aeroplane} alt="" />
                        <p>Buy Aeroplane Tickets</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default XRide