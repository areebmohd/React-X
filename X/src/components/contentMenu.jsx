import '../css/contentMenu.css'
import { Link } from 'react-router-dom'

let newdiv;

function createFeed() {
  let body = document.getElementById('root');
  if (body.contains(newdiv)) {
    newdiv.remove();
  } else {
    newdiv = document.createElement("div");
    newdiv.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    body.appendChild(newdiv);
    newdiv.style.height = "100vh";
    newdiv.style.width = "100%";
    newdiv.style.position = "fixed";
    newdiv.style.left = "0";
    newdiv.style.top = "0";
    newdiv.style.display = "flex";
    newdiv.style.justifyContent = "center";
    newdiv.style.alignItems = "center";
    newdiv.style.zIndex = '5000';

    let feedbox = document.createElement("div");
    feedbox.style.padding = "20px";
    feedbox.style.borderRadius = "20px";
    feedbox.style.height = "450px";
    feedbox.style.width = "500px";
    feedbox.style.backgroundColor = "black";
    feedbox.style.display = "flex";
    feedbox.style.flexDirection = "column";
    newdiv.appendChild(feedbox);
    
    let topbar = document.createElement("div");
    topbar.style.display = "flex";
    topbar.style.justifyContent = "space-between";
    topbar.style.alignItems = "center";
    topbar.style.marginBottom = "50px";
    feedbox.appendChild(topbar);

    let closeButton = document.createElement("button");
    closeButton.innerText = "✕";
    closeButton.style.background = "none";
    closeButton.style.border = "none";
    closeButton.style.fontSize = "20px";
    closeButton.style.cursor = "pointer";
    closeButton.onclick = () => newdiv.remove();
    topbar.appendChild(closeButton);

    let createButton = document.createElement("h4");
    createButton.innerText = "Add Feed";
    createButton.style.backgroundColor = "white";
    createButton.style.color = "black";
    createButton.style.border = "none";
    createButton.style.borderRadius = "20px";
    createButton.style.padding = "10px";
    createButton.style.paddingLeft = "15px";
    createButton.style.paddingRight = "15px";
    createButton.style.cursor = "pointer";
    createButton.onclick = () => newdiv.remove();
    topbar.appendChild(createButton);

    let feedNameLabel = document.createElement("h2");
    feedNameLabel.innerText = "Feed Name";
    feedNameLabel.style.color = "#0299fe";
    feedNameLabel.style.marginBottom = "10px";
    feedbox.appendChild(feedNameLabel);

    let feedNameInput = document.createElement("input");
    feedNameInput.style.padding = "10px";
    feedNameInput.style.borderRadius = "10px";
    feedNameInput.style.border = "none";
    feedNameInput.style.outline = "2px solid rgb(0, 170, 255)";
    feedNameInput.style.color = "rgb(0, 170, 255)";
    feedNameInput.style.fontSize = "large";
    feedNameInput.style.backgroundColor = "transparent";
    feedNameInput.style.marginBottom = "40px";
    feedbox.appendChild(feedNameInput);

    let buttons = [
        { text: "Add Topics"},
        { text: "Add People"},
        { text: "Add Communities"}
      ];
      
      buttons.forEach(button => {
        let btn = document.createElement("h4");
        btn.innerText = button.text;
        btn.style.padding = "10px";
        btn.style.paddingLeft = "20px";   
        btn.style.paddingRight = "20px";   
        btn.style.width = "fit-content";
        btn.style.borderRadius = "20px";
        btn.style.border = "none";
        btn.style.backgroundColor = "rgb(0, 170, 255)";
        btn.style.marginBottom = "20px";
        btn.style.cursor = "pointer";
        feedbox.appendChild(btn);
      });
  }
}

function ContentMenu() {
    return (
        <div className="contentMenu">
            <ul>
                <li><Link to={'/'} className='link'><svg viewBox="0 0 24 24" aria-hidden="true" height='2rem' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg></Link></li>
                <li><Link to={'/'} className='link'><svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 24 24" aria-hidden="true"><path clip-rule="evenodd" d="M22.146 11.146a.5.5 0 01-.353.854H20v7.5a1.5 1.5 0 01-1.5 1.5h-5v-7h-3v7h-5A1.5 1.5 0 014 19.5V12H2.207a.5.5 0 01-.353-.854L12 1l10.146 10.146ZM18.5 9.621l-6.5-6.5-6.5 6.5V19.5H9V13a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v6.5h3.5V9.621Z" fill-rule="evenodd"></path></svg><p>For You</p></Link></li>
                <li><svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 24 24" aria-hidden="true"><path clip-rule="evenodd" d="M12 20.5c1.894 0 3.643-.62 5.055-1.666a5.5 5.5 0 00-10.064-.105.755.755 0 01-.054.099A8.462 8.462 0 0012 20.5Zm4.079-5.189a7 7 0 012.142 2.48 8.5 8.5 0 10-12.443 0 7 7 0 0110.3-2.48ZM12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm2-12.5a2 2 0 11-4 0 2 2 0 014 0Zm1.5 0a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0Z" fill-rule="evenodd"></path></svg><p>Following</p></li>
                <li><svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 24 24" aria-hidden="true"><path clip-rule="evenodd" d="M4 4.5A1.5 1.5 0 015.5 3h13A1.5 1.5 0 0120 4.5H4Zm16.5 3h-17v11h17v-11ZM3.5 6A1.5 1.5 0 002 7.5v11A1.5 1.5 0 003.5 20h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 6h-17Zm7.257 4.454a.5.5 0 00-.757.43v4.233a.5.5 0 00.757.429L15 13l-4.243-2.546Z" fill-rule="evenodd"></path></svg><p>Subscribed</p></li>
                <li><Link to={'/originals'} className='link'><svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 24 24" aria-hidden="true"><path clip-rule="evenodd" d="m3.116 5.998 16.79-2.66.157.988-16.79 2.66-.157-.988Zm-1.481.235c-.13-.819.428-1.587 1.247-1.717l16.79-2.659c.819-.13 1.587.429 1.716 1.247l.157.988.234 1.481-1.481.235L6.463 7.999H22v11.5c0 .829-.672 1.5-1.5 1.5h-17c-.828 0-1.5-.671-1.5-1.5V8.539L1.79 7.22l-.156-.987Zm7.698 3.266h-2L9 11.999H6l-1.667-2.5H3.5v10h17v-10h-3.167L19 12h-3l-1.667-2.501h-2L14 12h-3L9.333 9.499Z" fill-rule="evenodd"></path></svg><p>Originals</p></Link></li>
                <li><Link to={'/trending'} className='link'><svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 24 24" aria-hidden="true"><path clip-rule="evenodd" d="m14 2-1.5.886-5.195 3.07C4.637 7.533 3 10.401 3 13.5c0 4.694 3.806 8.5 8.5 8.5s8.5-3.806 8.5-8.5V1l-1.5 1-3 2L14 5V2ZM8.068 7.248l4.432-2.62v3.175l2.332-1.555L18.5 3.803V13.5c0 3.866-3.134 7-7 7s-7-3.134-7-7c0-2.568 1.357-4.946 3.568-6.252ZM9 15c0-1.226.693-2.346 1.789-2.894L15 10v5c0 1.657-1.343 3-3 3s-3-1.343-3-3Z" fill-rule="evenodd"></path></svg><p>Trending</p></Link></li>
                <li><Link to={'/vines'} className='link'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height='2rem' className='svg2'><path d="M384 254.7v52.1c-18.4 4.2-36.9 6.1-52.1 6.1-36.9 77.4-103 143.8-125.1 156.2-14 7.9-27.1 8.4-42.7-.8C137 452 34.2 367.7 0 102.7h74.5C93.2 261.8 139 343.4 189.3 404.5c27.9-27.9 54.8-65.1 75.6-106.9-49.8-25.3-80.1-80.9-80.1-145.6 0-65.6 37.7-115.1 102.2-115.1 114.9 0 106.2 127.9 81.6 181.5 0 0-46.4 9.2-63.5-20.5 3.4-11.3 8.2-30.8 8.2-48.5 0-31.3-11.3-46.6-28.4-46.6-18.2 0-30.8 17.1-30.8 50 .1 79.2 59.4 118.7 129.9 101.9z"/></svg><p>Vines</p></Link></li>
                <li><Link to={'/videos'} className='link'><svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 24 24" aria-hidden="true"><path clip-rule="evenodd" d="M3.5 5.5h17v13h-17v-13ZM2 5.5C2 4.672 2.672 4 3.5 4h17c.828 0 1.5.672 1.5 1.5v13c0 .828-.672 1.5-1.5 1.5h-17c-.828 0-1.5-.672-1.5-1.5v-13Zm7.748 2.927c-.333-.19-.748.05-.748.435v6.276c0 .384.415.625.748.434L16 12 9.748 8.427Z" fill-rule="evenodd"></path></svg><p>Videos</p></Link></li>                
                <li><svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 24 24" aria-hidden="true"><path clip-rule="evenodd" d="M5.636 5.636c.293-.293.293-.768 0-1.06-.293-.294-.768-.294-1.06 0-.976.974-1.75 2.132-2.277 3.406C1.772 9.256 1.5 10.622 1.5 12c0 1.379.272 2.744.8 4.018.527 1.274 1.3 2.432 2.275 3.407.293.293.768.293 1.061 0 .293-.293.293-.768 0-1.061-.836-.836-1.499-1.828-1.95-2.92C3.232 14.352 3 13.182 3 12s.233-2.352.685-3.444c.452-1.092 1.115-2.084 1.951-2.92Zm2.828 1.768c.293.292.293.767 0 1.06-.464.464-.832 1.016-1.083 1.622C7.129 10.693 7 11.343 7 12c0 .656.13 1.306.38 1.913.252.607.62 1.158 1.084 1.622.293.293.293.768 0 1.06-.292.294-.767.294-1.06 0-.604-.603-1.083-1.32-1.41-2.108C5.669 13.7 5.5 12.853 5.5 12c0-.854.168-1.7.495-2.488.326-.788.805-1.505 1.409-2.108.293-.293.768-.293 1.06 0Zm7.072 0c.292-.293.767-.293 1.06 0C17.816 8.623 18.5 10.276 18.5 12c0 1.724-.685 3.377-1.904 4.596-.293.293-.768.293-1.06 0-.293-.293-.293-.768 0-1.06C16.473 14.597 17 13.325 17 12s-.527-2.598-1.464-3.536c-.293-.293-.293-.768 0-1.06Zm2.828-2.829c.293-.293.768-.293 1.06 0C21.395 6.545 22.5 9.215 22.5 12s-1.106 5.456-3.075 7.425c-.293.293-.768.293-1.061 0-.293-.293-.293-.768 0-1.061C20.052 16.676 21 14.387 21 12s-.948-4.676-2.636-6.364c-.293-.293-.293-.768 0-1.06ZM12 14c1.105 0 2-.895 2-2 0-1.104-.895-2-2-2s-2 .896-2 2c0 1.105.895 2 2 2Z" fill-rule="evenodd"></path></svg><p>Live</p></li>
                <li><Link to={'/spaces'} className='link'><svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 24 24" aria-hidden="true"><path clip-rule="evenodd" d="M7.278 4.933C8.675 3.999 10.318 3.5 12 3.5c1.681 0 3.325.499 4.722 1.433 1.398.934 2.488 2.261 3.13 3.814.644 1.553.813 3.262.485 4.911-.328 1.65-1.138 3.164-2.327 4.352-.293.293-.293.768 0 1.061.293.293.768.293 1.061 0 1.399-1.399 2.351-3.18 2.737-5.12.386-1.94.188-3.95-.57-5.778-.756-1.827-2.038-3.389-3.682-4.488C15.91 2.586 13.978 2 12 2c-1.978 0-3.911.586-5.556 1.685-1.644 1.1-2.926 2.66-3.683 4.488-.757 1.827-.955 3.838-.569 5.778.386 1.94 1.338 3.721 2.737 5.12.293.293.768.293 1.06 0 .293-.293.293-.768 0-1.06-1.188-1.19-1.998-2.704-2.326-4.353-.328-1.649-.16-3.358.484-4.91.643-1.554 1.733-2.881 3.13-3.815ZM12 7.5c-.89 0-1.76.264-2.5.758-.74.495-1.317 1.198-1.657 2.02-.341.822-.43 1.727-.257 2.6.174.873.603 1.675 1.232 2.304.293.293.293.768 0 1.06-.293.293-.768.293-1.06 0-.84-.839-1.411-1.908-1.643-3.072-.231-1.163-.112-2.37.342-3.466S7.68 7.67 8.667 7.01C9.653 6.351 10.813 6 12 6c1.187 0 2.347.352 3.333 1.011.987.66 1.756 1.597 2.21 2.693.454 1.096.573 2.303.342 3.466-.232 1.164-.803 2.233-1.642 3.073-.293.293-.768.293-1.061 0-.293-.293-.293-.768 0-1.061.63-.63 1.058-1.431 1.231-2.304.174-.873.085-1.778-.256-2.6-.34-.822-.917-1.525-1.657-2.02-.74-.494-1.61-.758-2.5-.758Zm.875 6.299C13.541 13.474 14 12.79 14 12c0-1.105-.895-2-2-2s-2 .895-2 2c0 .79.459 1.474 1.125 1.799V21c0 .483.392.875.875.875s.875-.392.875-.875v-7.201Z" fill-rule="evenodd"></path></svg><p>Spaces</p></Link></li>
                <li><svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 24 24" aria-hidden="true"><path clip-rule="evenodd" d="M2 5.121V3l.94.94.56.56.5.5.94-.94.12-.12L6 3l.94.94.12.12L8 5l.94-.94.12-.12L10 3l.94.94.12.12L12 5l.94-.94.12-.12L14 3l.94.94.12.12L16 5l.94-.94.12-.12L18 3l.94.94.12.12L20 5l.5-.5.56-.56L22 3v16c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2V5.121ZM10.75 19.5h-4.5v-5.25h4.5v5.25Zm1.25 0V13H5v6.5H4c-.276 0-.5-.224-.5-.5V7.65l2.514-2.514.925.925L8 7.12l1.06-1.06.94-.94.94.94L12 7.12l1.06-1.06.94-.94.94.94L16 7.12l1.06-1.06.926-.925L20.5 7.65V19c0 .276-.224.5-.5.5h-8ZM19 9v2H5V9h14Zm-5 4h5v1.5h-5V13Zm5 3h-5v1.5h5V16Z" fill-rule="evenodd"></path></svg><p>Articles</p></li>
                <li><Link to='/feed1' className='link'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="1.8rem" className='svg2'><path d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128l95.1 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0L325.8 320l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7-95.1 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 21.3-128L64 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320l95.1 0 21.3-128-95.1 0z"/></svg><p>Feed 1</p></Link></li>
            </ul>
            <p className='createFeed' onClick={()=>createFeed()}>Create feed</p>
        </div>
    )
}

export default ContentMenu