import '../css/profile.css'
import { mediaPics, mediaPostCount, mediaListNames } from '../../data';

let newdiv;

function createMediaList() {
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
        newdiv.style.zIndex = '25000';

        let feedbox = document.createElement("div");
        feedbox.style.padding = "20px";
        feedbox.style.borderRadius = "20px";
        feedbox.style.height = "350px";
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
        createButton.innerText = "Create";
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
        feedNameLabel.innerText = "Media List Name";
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

        let btn = document.createElement("h4");
        btn.innerText = 'Add Posts';
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
    }
}

function MediaSection() {
    return (
        <div className="mediaBox">
            <div className="mediaLists">
                {mediaPics.map((picture, index) => {
                    return (
                        <div className="listContainer" key={index}>
                            <div className="list">
                                <img src={picture} alt="SourceImage"/>
                                <p>{mediaPostCount[index]} posts</p>
                            </div>
                            <div className="listInfo">
                                <h3>{mediaListNames[index]}</h3>
                                <p>{index > 3 ? 'Public' : 'Private'}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <p className='createMediaList' onClick={() => createMediaList()}>Create Media List</p>
        </div>
    )
}
export default MediaSection