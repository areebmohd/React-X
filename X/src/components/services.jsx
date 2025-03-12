import '../css/services.css'
import dp from '../assets/dp.jpg';
import { useAppContext } from '../App';
import { useEffect } from 'react';
import { servicesPics, servicesTitle, servicesInfo } from '../../data';
import { Link } from 'react-router-dom';
function Services() {

    const { toggleLeftBar, setHomePage, setExplorePage, setMessages, setProfile, setChatBoxPage, setChatInfoPage, setServices, setService } = useAppContext();

    useEffect(() => {
        setExplorePage(false);
        setHomePage(false);
        setMessages(false);
        setProfile(false);
        setChatBoxPage(false);
        setChatInfoPage(false);
        setServices(true);
        setService(false);
    }, []);

    return (
        <div className="services">
            <div className="topBar">
                <div>
                    <img src={dp} alt="" className="display-image" onClick={toggleLeftBar} />
                    <h2>Services</h2>
                </div>
                <svg viewBox="0 0 24 24" aria-hidden="true" height='25px' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
            </div>
            <div className="boxes">
                {servicesPics.map((picture, index) => {
                    return (
                        <Link to={`/service/${index}`} className="box" key={index} onClick={()=>setService(true)}>
                            <div className="image">
                                <img src={picture} alt="img" />
                            </div>
                            <div className="text">
                                <h2>{servicesTitle[index]}</h2>
                                <p>{servicesInfo[index]}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
export default Services