import '../scss/xai.css'
import { Link } from 'react-router-dom';

function XAI1({ setChatPage, setChatMessage }) {

    function send(){
        let message=document.querySelector('.input').value;
        setChatPage(true);
        setChatMessage(message);
    }

    return (
        <div className="xai1">
            <div className="topBar">
                <div className='title'>
                    <Link to={'/services'} className='link'><svg viewBox="0 0 24 24" aria-hidden="true" height='2.5rem' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03"><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg></Link>
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
                </div>
            </div>
            <div className="main">
                <div className="logo">
                    <svg viewBox="0 0 88 32" aria-hidden="true" height='100px' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-sga3zk r-s2xz95"><g><path d="M76.717 24.208V7.916h2.596v10.752l5.493-6.257h3.148l-4.94 5.362L88 24.208h-3.102l-4.04-5.53-1.545-.01v5.54h-2.596zm-7.876.274c-3.86 0-5.951-2.716-5.951-6.184 0-3.491 2.09-6.184 5.951-6.184 3.884 0 5.952 2.693 5.952 6.184 0 3.468-2.068 6.184-5.952 6.184zm-3.24-6.184c0 2.692 1.471 4.039 3.24 4.039 1.793 0 3.24-1.347 3.24-4.04 0-2.692-1.447-4.06-3.24-4.06-1.769 0-3.24 1.368-3.24 4.06zm-9.939 5.91v-9.926l2.184-1.871h4.642v2.19h-4.229v9.607h-2.597zm-9.929.301c-4.95 0-7.9-3.564-7.9-8.424 0-4.906 3.056-8.557 7.997-8.557 3.86 0 6.687 1.962 7.353 5.613H50.22c-.437-2.076-2.183-3.24-4.39-3.24-3.561 0-5.124 3.058-5.124 6.184 0 3.126 1.563 6.16 5.125 6.16 3.4 0 4.895-2.441 5.01-4.472h-5.125v-2.362h7.744l-.013 1.235c0 4.59-1.886 7.863-7.713 7.863zM12.98 20.54l11.175-8.19c.547-.4 1.33-.244 1.591.38 1.374 3.288.76 7.241-1.973 9.955-2.733 2.714-6.536 3.31-10.012 1.954l-3.797 1.745c5.446 3.697 12.06 2.782 16.193-1.324 3.278-3.255 4.293-7.692 3.344-11.693l.008.009c-1.376-5.878.339-8.227 3.852-13.031l.25-.345-4.624 4.59v-.014l-16.01 15.968m-2.302 1.987c-3.91-3.707-3.235-9.446.1-12.755 2.467-2.449 6.508-3.448 10.036-1.979l3.788-1.737c-.682-.49-1.557-1.017-2.561-1.387-4.537-1.854-9.97-.931-13.658 2.728-3.547 3.523-4.663 8.94-2.747 13.561 1.431 3.454-.915 5.898-3.278 8.364C1.517 30.2.677 31.074 0 32l10.672-9.466"></path></g></svg>
                </div>
                <div className="messageBox">
                    <input type="text" placeholder='Ask anything' className='input' />
                    <div className='options'>
                        <div className="left">
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
                            <div>
                                <svg viewBox="0 0 24 24" aria-hidden="true" height='15px' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1pexk7n r-1mcorv5"><g><path d="M14 4c-1.66 0-3 1.34-3 3v8c0 .55.45 1 1 1s1-.45 1-1V8h2v7c0 1.66-1.34 3-3 3s-3-1.34-3-3V7c0-2.76 2.24-5 5-5s5 2.24 5 5v8c0 3.87-3.13 7-7 7s-7-3.13-7-7V8h2v7c0 2.76 2.24 5 5 5s5-2.24 5-5V7c0-1.66-1.34-3-3-3z"></path></g></svg>
                                <p>Attach</p>
                            </div>
                            <svg viewBox="0 0 32 32" aria-hidden="true" height='35px' onClick={()=> send()} class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-mabqd8 r-1yvhtrz"><g><defs><mask id="4-a"><path d="M0 0h32v32H0z" fill="#fff"></path><path d="M15.25 12.562l-3.78 3.783-1.065-1.06L16 9.69l5.595 5.593-1.065 1.06-3.78-3.782v10.19h-1.5v-10.19z" fill="#000"></path></mask></defs><rect fill="currentColor" height="30" mask="url(#4-a)" rx="15" width="30" x="1" y="1"></rect></g></svg>
                        </div>
                    </div>
                </div>
                <h2>Explore Grok</h2>
                <div className="boxes">
                    <div className="box">
                        <h3>DeepSearch</h3>
                        <p>Search deeply to deliver detailed, well-reasoned answers with Grok’s rapid, agentic search.</p>
                    </div>
                    <div className="box">
                        <h3>Think</h3>
                        <p>Solve the hardest problems in math, science, and coding with our reasoning model.</p>
                    </div>
                    <div className="box">
                        <h3>Analyze Content</h3>
                        <p>Review user-uploaded materials like images, PDFs, and text files for insights or explanations.</p>
                    </div>
                    <div className="box">
                        <h3>Image Generation</h3>
                        <p>Offer to generate images if it seems relevant, but only after confirming with you.</p>
                    </div>
                    <div className="box">
                        <h3>Answer Questions</h3>
                        <p>Provide clear, concise, and accurate responses to a wide range of questions.</p>
                    </div>
                    <div className="box">
                        <h3>Web & X Search</h3>
                        <p>Search the web and X posts to gather additional information relevant to your queries.</p>
                    </div>
                    <div className="box">
                        <h3>Analyze X Profiles</h3>
                        <p>Examine individual X user profiles, including their posts and linked content.</p>
                    </div>
                    <div className="box">
                        <h3>Grok News</h3>
                        <p>Provide latest news from around the world using posts on X platform.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default XAI1