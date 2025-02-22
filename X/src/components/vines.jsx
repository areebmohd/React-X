import './vines.css';
import { vineprofilePictures, vinenames, vineusernames, vinecontent, vinepics, valueConverter } from '../../data';
import React, { useState } from 'react';
import dp from '../assets/dp.jpg';

function showLeftbar() {
  let leftbar = document.querySelector('.leftbar');
  if (leftbar.style.display === 'none') {
    leftbar.style.display = 'block'
  } else {
    leftbar.style.display = 'none'
  }
}

function Vines({ setContentMenu }) {
  const [showOptionsIndex, setShowOptionsIndex] = useState(null);

  const handleOptionsClick = (index) => {
    setShowOptionsIndex(index === showOptionsIndex ? null : index);
  };

  return (
    <div className="vinePage">
      <div className="topBar" onClick={() => showLeftbar()}>
        <div>
          <img src={dp} alt="" />
          <h2>Vines</h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height='25px' onClick={() => setContentMenu(prev => !prev)}>
          <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      <div className="videoPosts">
        {vinepics.map((video, index) => (
          <div className="videoPost" key={index}>
            <div className="vineTopics">
              <p>Following</p>
              <p className='mainTopic'>For you</p>
              <p>Comedy</p>
              <p>Art</p>
              <p>Food</p>
              <p>Education</p>
              <p>Movies</p>
              <p>Science</p>
              <p>Technology</p>
              <p>News</p>
              <p>Movies</p>
              <p>Entertainment</p>
            </div>
            <video src={video} autoPlay loop muted className="vineVideo"></video>
            <div className="videoOverlay">
              <div className="title">
                <div className="videoInfo">
                  <img src={vineprofilePictures[index]} alt={vinenames[index]} className="profilePic" />
                  <div>
                    <h4>{vinenames[index]}</h4>
                    <p>{vineusernames[index]}</p>
                  </div>
                </div>
                <div className="options" onClick={() => handleOptionsClick(index)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height='15px'>
                    <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
                  </svg>
                </div>
              </div>
              <div className="videoContent" dangerouslySetInnerHTML={{ __html: vinecontent[index] }}></div>
              <div className="icons">
                <div className="reply icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true" height='23px' className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-50lct3 r-1srniue">
                    <g>
                      <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                    </g>
                  </svg>
                  <p>{valueConverter(Math.floor(Math.random() * 1000))}</p>
                </div>
                <div className="repost icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true" height='23px' className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-50lct3 r-1srniue">
                    <g>
                      <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                    </g>
                  </svg>
                  <p>{valueConverter(Math.floor(Math.random() * 3000))}</p>
                </div>
                <div className="like icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true" height='23px' className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-50lct3 r-1srniue">
                    <g>
                      <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                    </g>
                  </svg>
                  <p>{valueConverter(Math.floor(Math.random() * 10000))}</p>
                </div>
                <div className="save icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true" height='23px' className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-50lct3 r-1srniue">
                    <g>
                      <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
                    </g>
                  </svg>
                  <p>{valueConverter(Math.floor(Math.random() * 1000))}</p>
                </div>
                <div className="share icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true" height='23px' className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-50lct3 r-1srniue">
                    <g>
                      <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            {showOptionsIndex === index && (
              <div className="optionsBox" onClick={() => handleOptionsClick(index)}>
                <div>
                  <svg viewBox="0 0 24 24" aria-hidden="true" height='20px' class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-1q142lx"><g><path d="M10 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM6 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4zm13 4v3h2v-3h3V8h-3V5h-2v3h-3v2h3zM3.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C13.318 13.65 11.838 13 10 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C5.627 11.85 7.648 11 10 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H1.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46z"></path></g></svg>
                  <h4>Follow {vineusernames[index]}</h4>
                </div>
                <div>
                  <svg viewBox="0 0 24 24" aria-hidden="true" height='20px' class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-1q142lx"><g><path d="M5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5H12v2H5.5C4.12 22 3 20.88 3 19.5v-15C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5V13h-2V4.5c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2zm10 7v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></path></g></svg>
                  <h4>Add {vineusernames[index]} to feed</h4>
                </div>
                <hr />
                <div>
                  <svg viewBox="0 0 24 24" aria-hidden="true" height='20px' class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-1q142lx"><g><path d="M11.99 16l-5.7-5.7L7.7 8.88l3.29 3.3V2.59h2v9.59l3.3-3.3 1.41 1.42-5.71 5.7zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path></g></svg>
                  <h4>Download vine</h4>
                </div>
                <div>
                  <svg viewBox="0 0 24 24" aria-hidden="true" height='20px' class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-1q142lx"><g><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path></g></svg>
                  <h4>Vine Quality</h4>
                </div>
                <div>
                  <svg viewBox="0 0 24 24" aria-hidden="true" height='20px' class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-1q142lx"><g><path d="M9.5 16.45v-8.9l7 4.45-7 4.45zM22.25 12c0 5.66-4.589 10.25-10.25 10.25S1.75 17.66 1.75 12 6.339 1.75 12 1.75 22.25 6.34 22.25 12zM12 20.25c4.556 0 8.25-3.69 8.25-8.25S16.556 3.75 12 3.75 3.75 7.44 3.75 12s3.694 8.25 8.25 8.25z"></path></g></svg>
                  <h4>Playback Speed</h4>
                </div>
                <div>
                  <svg viewBox="0 0 24 24" aria-hidden="true" height='20px' class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-1q142lx"><g><path d="M15.24 4.31l-4.55 15.93-1.93-.55 4.55-15.93 1.93.55zm-8.33 3.6L3.33 12l3.58 4.09-1.5 1.32L.67 12l4.74-5.41 1.5 1.32zm11.68-1.32L23.33 12l-4.74 5.41-1.5-1.32L20.67 12l-3.58-4.09 1.5-1.32z"></path></g></svg>
                  <h4>Captions</h4>
                </div>
                <hr />
                <div>
                  <svg viewBox="0 0 24 24" aria-hidden="true" height='20px' class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-1q142lx"><g><path d="M3 2h18.61l-3.5 7 3.5 7H5v6H3V2zm2 12h13.38l-2.5-5 2.5-5H5v10z"></path></g></svg>
                  <h4>Report post</h4>
                </div>
                <div>
                  <svg viewBox="0 0 24 24" aria-hidden="true" height='20px' class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-1q142lx"><g><path d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"></path></g></svg>
                  <h4>Not interested</h4>
                </div>
                <div>
                  <svg viewBox="0 0 24 24" aria-hidden="true" height='20px' class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-1q142lx"><g><path d="M22 2.63v17.74l-7.05-2.27c-.29 1.65-1.72 2.9-3.45 2.9C9.57 21 8 19.43 8 17.5v-1.63l-1.15-.37H4.5C3.12 15.5 2 14.38 2 13v-3c0-1.38 1.12-2.5 2.5-2.5h2.35L22 2.63zM6 9.5H4.5c-.27 0-.5.22-.5.5v3c0 .28.23.5.5.5H6v-4zm2 4.27l12 3.86V5.37L8 9.23v4.54zm2 2.74v.99c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-.02l-3-.97z"></path></g></svg>
                  <h4>Request community note</h4>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vines;