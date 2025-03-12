import '../scss/xai.css'
import { useAppContext } from '../App';
import { useEffect, useState } from 'react';
import XAI1 from '../services/xai1';
import XAI2 from '../services/xai2';

function XAI() {

    const [chatPage, setChatPage] = useState(false);
    const [chatMessage, setChatMessage] = useState(null);

    const { setServices, setService, setHomePage } = useAppContext();

    useEffect(() => {
        setService(true);
        setServices(false);
        setHomePage(false);
    }, []);

    return (
        <div className="xai">
            {chatPage?<XAI2 setChatPage={setChatPage} setChatMessage={setChatMessage} chatMessage={chatMessage}/> : <XAI1 setChatPage={setChatPage} setChatMessage={setChatMessage}/>}
        </div>
    )
}
export default XAI