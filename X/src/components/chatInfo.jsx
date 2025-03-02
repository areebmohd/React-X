import { useAppContext } from '../App';
import '../css/chat.css';
import { chatMedia, starredMessages } from '../../data';

function ChatInfo() {

    const { setChatInfoPage } = useAppContext();

    return(
        <div className="chatInfoBox">
                <div className="topbar">
                    <svg viewBox="0 0 24 24" aria-hidden="true" onClick={() => setChatInfoPage(false)} height='2.5rem' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03"><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg>
                    <h3>Chat Info</h3>
                </div>
                <div className="info">
                    <div className="chatMedia">
                        <h4>Chat Media</h4>
                        <div className="media">
                            {chatMedia.map((picture, index) => {
                                return (
                                    <img src={picture} alt="media" key={index} />
                                )
                            })}
                        </div>
                    </div>
                    <div className="starredMessages">
                        <h4>Starred Messages</h4>
                        <div className="starred">
                            {starredMessages.map((message, index) => {
                                return (
                                    <div className="message" key={index}>{message}</div>
                                )
                            })}
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="other">
                    <p>Block</p>
                    <p>Report</p>
                    <p className='delete'>Delete</p>
                </div>
            </div>
    )
}
export default ChatInfo;