import '../scss/xai.css'
import { Link } from 'react-router-dom';
import grokBroken from '../assets/grokbroken.jpg';

function XAI2({ setChatPage, chatMessage, setChatMessage }) {

    function send() {
        let message = document.querySelector('.input').value;
        setChatMessage(message);
    }

    return (
        <div className="xai2">
            <div className="topBar">
                <div className='title'>
                    <Link to={'/services'} className='link'><svg viewBox="0 0 24 24" aria-hidden="true" onClick={() => home()} height='2.5rem' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03"><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg></Link>
                    <h2>Grok</h2>
                </div>
                <div className='options'>
                    <div className='tabs'>
                        <h5>1</h5>
                        <p>Tabs</p>
                    </div>
                    <div className='history'>
                        <svg viewBox="0 0 24 24" aria-hidden="true" height='22px' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1gs4q39 r-1hjwoze r-12ym1je"><g><path d="M12 4C9.25 4 6.83 5.39 5.38 7.5H8v2H2v-6h2V6c1.82-2.43 4.73-4 8-4 5.52 0 10 4.48 10 10s-4.48 10-10 10c-4.76 0-8.74-3.33-9.75-7.78l1.95-.44C5.01 17.34 8.19 20 12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8zm-1 4h2v3.59l3.21 3.2-1.42 1.42-3.79-3.8V8z"></path></g></svg>
                        <p>History</p>
                    </div>
                    <div className="newChat" onClick={() => setChatPage(false)}>
                        <svg width="24" height="21px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="icon-xl-heavy"><path d="M15.6729 3.91287C16.8918 2.69392 18.8682 2.69392 20.0871 3.91287C21.3061 5.13182 21.3061 7.10813 20.0871 8.32708L14.1499 14.2643C13.3849 15.0293 12.3925 15.5255 11.3215 15.6785L9.14142 15.9899C8.82983 16.0344 8.51546 15.9297 8.29289 15.7071C8.07033 15.4845 7.96554 15.1701 8.01005 14.8586L8.32149 12.6785C8.47449 11.6075 8.97072 10.615 9.7357 9.85006L15.6729 3.91287ZM18.6729 5.32708C18.235 4.88918 17.525 4.88918 17.0871 5.32708L11.1499 11.2643C10.6909 11.7233 10.3932 12.3187 10.3014 12.9613L10.1785 13.8215L11.0386 13.6986C11.6812 13.6068 12.2767 13.3091 12.7357 12.8501L18.6729 6.91287C19.1108 6.47497 19.1108 5.76499 18.6729 5.32708ZM11 3.99929C11.0004 4.55157 10.5531 4.99963 10.0008 5.00007C9.00227 5.00084 8.29769 5.00827 7.74651 5.06064C7.20685 5.11191 6.88488 5.20117 6.63803 5.32695C6.07354 5.61457 5.6146 6.07351 5.32698 6.63799C5.19279 6.90135 5.10062 7.24904 5.05118 7.8542C5.00078 8.47105 5 9.26336 5 10.4V13.6C5 14.7366 5.00078 15.5289 5.05118 16.1457C5.10062 16.7509 5.19279 17.0986 5.32698 17.3619C5.6146 17.9264 6.07354 18.3854 6.63803 18.673C6.90138 18.8072 7.24907 18.8993 7.85424 18.9488C8.47108 18.9992 9.26339 19 10.4 19H13.6C14.7366 19 15.5289 18.9992 16.1458 18.9488C16.7509 18.8993 17.0986 18.8072 17.362 18.673C17.9265 18.3854 18.3854 17.9264 18.673 17.3619C18.7988 17.1151 18.8881 16.7931 18.9393 16.2535C18.9917 15.7023 18.9991 14.9977 18.9999 13.9992C19.0003 13.4469 19.4484 12.9995 20.0007 13C20.553 13.0004 21.0003 13.4485 20.9999 14.0007C20.9991 14.9789 20.9932 15.7808 20.9304 16.4426C20.8664 17.116 20.7385 17.7136 20.455 18.2699C19.9757 19.2107 19.2108 19.9756 18.27 20.455C17.6777 20.7568 17.0375 20.8826 16.3086 20.9421C15.6008 21 14.7266 21 13.6428 21H10.3572C9.27339 21 8.39925 21 7.69138 20.9421C6.96253 20.8826 6.32234 20.7568 5.73005 20.455C4.78924 19.9756 4.02433 19.2107 3.54497 18.2699C3.24318 17.6776 3.11737 17.0374 3.05782 16.3086C2.99998 15.6007 2.99999 14.7266 3 13.6428V10.3572C2.99999 9.27337 2.99998 8.39922 3.05782 7.69134C3.11737 6.96249 3.24318 6.3223 3.54497 5.73001C4.02433 4.7892 4.78924 4.0243 5.73005 3.54493C6.28633 3.26149 6.88399 3.13358 7.55735 3.06961C8.21919 3.00673 9.02103 3.00083 9.99922 3.00007C10.5515 2.99964 10.9996 3.447 11 3.99929Z" fill="currentColor"></path></svg>
                        <p>New Chat</p>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="answerBox">
                    <div className='message'>{chatMessage}</div>
                    <div className="searchOptions">
                        <p>Web</p>
                        <p>Posts</p>
                        <p>Images</p>
                        <p>Videos</p>
                        <p>News</p>
                    </div>
                    <div className="answer">
                        <img src={grokBroken} alt="img" />
                        <p>I’m really sorry, but I’m currently experiencing an issue where I can’t connect to my server to access the latest data or perform certain tasks that rely on real-time information. This could be due to a variety of reasons, such as a temporary network disruption, server maintenance, or an unexpected technical hiccup on my end. I want to assure you that this isn’t something you’ve caused—it’s a backend issue that I’m working to resolve as quickly as possible. <br /> <br /> I completely understand how frustrating this might be, and I’m doing everything I can to get back to full functionality. In the meantime, you can try asking something that doesn’t need real-time data, or you can check back in a little while—I’m hopeful this will be resolved soon. </p>
                    </div>
                    <div className="answerOptions">
                        <svg viewBox="0 0 24 24" aria-hidden="true" height='20px' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1472mwg r-lrsllp r-jwli3a"><g><path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path></g></svg>
                        <svg viewBox="0 0 24 24" aria-hidden="true" height='20px' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>
                        <svg viewBox="0 0 24 24" aria-hidden="true" height='18px' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1hjwoze r-12ym1je"><g><path d="M19.5 2C20.88 2 22 3.12 22 4.5v11c0 1.21-.86 2.22-2 2.45V4.5c0-.28-.22-.5-.5-.5H6.05c.23-1.14 1.24-2 2.45-2h11zm-4 4C16.88 6 18 7.12 18 8.5v11c0 1.38-1.12 2.5-2.5 2.5h-11C3.12 22 2 20.88 2 19.5v-11C2 7.12 3.12 6 4.5 6h11zM4 19.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-11c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5v11z"></path></g></svg>
                        <svg viewBox="0 0 24 24" aria-hidden="true" height='18px' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1hjwoze r-12ym1je"><g><path d="M12 4c-4.418 0-8 3.58-8 8s3.582 8 8 8c3.806 0 6.993-2.66 7.802-6.22l1.95.44C20.742 18.67 16.76 22 12 22 6.477 22 2 17.52 2 12S6.477 2 12 2c3.272 0 6.176 1.57 8 4V3.5h2v6h-6v-2h2.616C17.175 5.39 14.749 4 12 4z"></path></g></svg>
                        <svg viewBox="0 0 24 24" aria-hidden="true" height='19px' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1hjwoze r-12ym1je"><g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path></g></svg>
                    </div>
                </div>
                <div className="messageBox">
                    <input type="text" placeholder='Ask anything' className='input' />
                    <div className='options'>
                        <div className="left">
                            <div>
                                <svg viewBox="0 0 24 24" aria-hidden="true" height='15px' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1pexk7n r-1mcorv5"><g><path d="M14 4c-1.66 0-3 1.34-3 3v8c0 .55.45 1 1 1s1-.45 1-1V8h2v7c0 1.66-1.34 3-3 3s-3-1.34-3-3V7c0-2.76 2.24-5 5-5s5 2.24 5 5v8c0 3.87-3.13 7-7 7s-7-3.13-7-7V8h2v7c0 2.76 2.24 5 5 5s5-2.24 5-5V7c0-1.66-1.34-3-3-3z"></path></g></svg>
                                <p>Attach</p>
                            </div>
                            <div>
                                <svg viewBox="0 0 16 16" aria-hidden="true" height='15px' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1pexk7n r-1mcorv5"><g><path d="M1.333 8.882C3 14.795 12 13.886 12 9.036c0-2.737-4.038-3.307-4.856-1.921-.616 1.043 2.328.961 1.712 2.004C8.038 10.505 4 9.935 4 7.2c0-5.075 9.667-6.049 10.667-.136" fill="none" stroke="currentColor" stroke-width="1.333"></path></g></svg>
                                <p>DeepSearch</p>
                            </div>
                            <div>
                                <svg viewBox="0 0 14 14" aria-hidden="true" height='15px' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1pexk7n r-1mcorv5"><g><path d="M8.75 9.414l-.3-.501-.283.17v.33h.583zm-3.5 0h.583v-.331l-.284-.17-.299.5zM10.5 5.25c0 1.429-.85 2.947-2.05 3.663l.6 1.001c1.56-.932 2.617-2.835 2.617-4.664H10.5zM7 2.333c1.027 0 1.91.284 2.522.776.6.481.978 1.188.978 2.141h1.167c0-1.302-.536-2.345-1.415-3.05C9.388 1.504 8.23 1.166 7 1.166v1.166zM3.5 5.25c0-.953.379-1.66.978-2.14.613-.493 1.495-.777 2.522-.777V1.167c-1.229 0-2.388.338-3.253 1.032-.878.706-1.414 1.749-1.414 3.051H3.5zm2.05 3.663C4.35 8.197 3.5 6.679 3.5 5.25H2.333c0 1.829 1.057 3.732 2.618 4.665l.598-1.002zm.283 2.462V9.414H4.667v1.961h1.166zm.292.292c-.161 0-.292-.13-.292-.292H4.667c0 .805.653 1.458 1.458 1.458v-1.166zm1.75 0h-1.75v1.166h1.75v-1.166zm.292-.292c0 .161-.13.292-.292.292v1.166c.805 0 1.458-.653 1.458-1.458H8.167zm0-1.961v1.961h1.166V9.414H8.167z" fill="currentColor"></path><path d="M5.25 9.333h3.5" stroke="currentColor" stroke-width="1.167"></path><path d="M7 9.333V7" stroke="currentColor" stroke-linecap="square" stroke-width="1.167"></path></g></svg>
                                <p>Think</p>
                            </div>
                        </div>
                        <div className="right">
                            <svg viewBox="0 0 32 32" aria-hidden="true" height='35px' onClick={() => send()} class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-mabqd8 r-1yvhtrz"><g><defs><mask id="4-a"><path d="M0 0h32v32H0z" fill="#fff"></path><path d="M15.25 12.562l-3.78 3.783-1.065-1.06L16 9.69l5.595 5.593-1.065 1.06-3.78-3.782v10.19h-1.5v-10.19z" fill="#000"></path></mask></defs><rect fill="currentColor" height="30" mask="url(#4-a)" rx="15" width="30" x="1" y="1"></rect></g></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default XAI2