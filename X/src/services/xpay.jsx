import '../scss/xpay.css'
import { useAppContext } from '../App';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import xpaylogo from '../assets/xpaylogo.jpg';
import qrcode from '../assets/qrcode.jpg';
import man from '../assets/man.jpg';
import boy from '../assets/boy.jpg';
import bank from '../assets/bank.jpg';
import phone from '../assets/phone.jpg';
import money from '../assets/money.jpg';
import mobile from '../assets/mobile.jpg';
import electricity from '../assets/electricity.jpg';
import house from '../assets/house.jpg';
import stocks from '../assets/stocks.jpg';
import ploan from '../assets/ploan.jpg';
import bloan from '../assets/bloan.jpg';
import dp from '../assets/dp.jpg';

function XPay() {

    const { setServices, setService, setHomePage } = useAppContext();

    useEffect(() => {
        setService(true);
        setServices(false);
        setHomePage(false);
    }, []);

    return (
        <div class="xpay">
            <div className="topBar">
                <div className='title'>
                    <Link to={'/services'} className='link'><svg viewBox="0 0 24 24" aria-hidden="true" height='2.5rem' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03"><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg></Link>
                    <h2>X Pay</h2>
                </div>
                <div className="input">
                    <input type="text" placeholder='Search People or Numbers' />
                    <svg viewBox="0 0 24 24" aria-hidden="true" height='18px' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1tjplnt r-1bwzh9t r-10ptun7 r-2dysd3 r-1janqcz"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
                </div>
            </div>
            <div className="logo">
                <img src={xpaylogo} alt="logo" />
            </div>
            <div className="main">
                <div class="section">
                    <h2>Transfer Money</h2>
                    <div class="options">
                        <div class="option">
                            <img src={qrcode} alt="" />
                            <p>Scan QR Code</p>
                        </div>
                        <div class="option">
                            <img src={man} alt="" />
                            <p>Pay a Person</p></div>
                        <div class="option">
                            <img src={phone} alt="" />
                            <p>Pay a Number</p>
                        </div>
                        <div class="option">
                            <img src={bank} alt="" />
                            <p>Bank Transfer</p>
                        </div>
                        <div class="option">
                            <img src={boy} alt="" />
                            <p>Self Transfer</p>
                        </div>
                        <div class="option">
                            <img src={money} alt="" />
                            <p>Collect Money</p>
                        </div>
                    </div>
                </div>
                <div class="section">
                    <h2>Recharges and Bills</h2>
                    <div class="options">
                        <div class="option">
                            <img src={mobile} alt="" />
                            <p>Mobile Recharge</p>
                        </div>
                        <div class="option">
                            <img src={electricity} alt="" />
                            <p>Electricity Bill</p>
                        </div>
                        <div class="option">
                            <img src={house} alt="" />
                            <p>House Rent</p>
                        </div>
                    </div>
                </div>
                <div class="section">
                    <h2>Invest and Loans</h2>
                    <div class="options">
                        <div class="option">
                            <img src={stocks} alt="" />
                            <p>Stocks</p>
                        </div>
                        <div class="option">
                            <img src={ploan} alt="" />
                            <p>Personal Loans</p>
                        </div>
                        <div class="option">
                            <img src={bloan} alt="" />
                            <p>Business Loans</p>
                        </div>
                    </div>
                </div>
                <div class="small-boxes">
                    <div class="small-box">Transaction History</div>
                    <div class="small-box">Check Bank Balance</div>
                    <div class="small-box">Rewards</div>
                    <div class="small-box">Offers</div>
                </div>
            </div>
            <div class="account-details">
                <div class="account-header">
                    <img src={dp} alt="" />
                    <div class="account-info">
                        <h3>Ashu</h3>
                        <p>@ashu</p>
                    </div>
                </div>
                <div class="account-options">
                    <div class="account-option">Phone Number</div>
                    <div class="account-option">X Pay ID</div>
                    <div class="account-option">QR Code</div>
                    <div class="account-option">Bank Accounts</div>
                    <div class="account-option">Cards</div>
                    <div class="account-option">Settings</div>
                </div>
            </div>
        </div>
    )
}
export default XPay