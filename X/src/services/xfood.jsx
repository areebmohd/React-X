import '../scss/xfood.css'
import { useAppContext } from '../App';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import xfoodlogo from '../assets/xfoodlogo.png';
import { foodItems, foodItemsNames, dishes, stores, dishesNames, storesNames } from '../../data';

function XFood() {

    const { setServices, setService, setHomePage } = useAppContext();

    useEffect(() => {
        setService(true);
        setServices(false);
        setHomePage(false);
    }, []);

    return (
        <div className="xfood">
            <div className="topBar">
                <div className='title'>
                    <Link to={'/services'} className='link'><svg viewBox="0 0 24 24" aria-hidden="true" height='2.5rem' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03"><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg></Link>
                    <h2>X Food</h2>
                </div>
                <div className="input">
                    <input type="text" placeholder='Search for Food or Store' />
                    <svg viewBox="0 0 24 24" aria-hidden="true" height='18px' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1tjplnt r-1bwzh9t r-10ptun7 r-2dysd3 r-1janqcz"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
                </div>
            </div>
            <div className="logo">
                <img src={xfoodlogo} alt="logo" />
            </div>
            <div className="main">
                <h2>What's on your mind?</h2>
                <div className="foodItems">
                    {foodItems.map((picture, index) => (
                        <div key={index} className='food'>
                            <img src={picture} alt='picture' />
                            <p className='foodNames'>{foodItemsNames[index]}</p>
                        </div>
                    ))}
                </div>
                <h2>Popular dishes</h2>
                <div className="foodItems">
                    {dishes.map((picture, index) => (
                        <div key={index} className='food'>
                            <img src={picture} alt='picture' />
                            <div className="details">
                                <p>{dishesNames[index]}</p>
                                <p className='p2'>{storesNames[index]}</p>
                                <p className='p3'><p className="rating">{Number((Math.random() + 4).toFixed(1))}</p> Rating</p>
                            </div>
                        </div>
                    ))}
                </div>
                <h2>Popular stores</h2>
                <div className="foodItems">
                    {stores.map((picture, index) => (
                        <div key={index} className='food'>
                            <img src={picture} alt='picture' />
                            <div className="details">
                                <p>{storesNames[index]}</p>
                                <p className='p3'><p className="rating">{Number((Math.random() + 4).toFixed(1))}</p> Rating</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default XFood