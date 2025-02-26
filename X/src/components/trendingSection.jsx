import '../css/explorePage.css'
import { useRef } from 'react';
import { trendPictures1, trendPostCount1, trendTitle1, trendPictures2, trendPostCount2, trendTitle2, trendPictures3, trendPostCount3, trendTitle3, trendPictures4, trendPostCount4, trendTitle4 } from '../../data';
import { trendingPostDp, trendingPostNames, trendingPostUsernames, trendingPostContent, trendingPostPics, trendingPeopleName, trendingPeopleBanner, trendingPeopleDp, trendingPeopleUsernames, trendingCommunitiesPics, trendingCommunitiesName, trendingCommunitiesMembers } from '../../data';

function TrendingSection() {
    return (
        <div className="content">
            <h2>Trends</h2>
            {trendPictures1.map((picture, index) => {
                return (
                    <div className="trend" key={index}>
                        <div className="image">
                            <img src={picture} alt="image" />
                        </div>
                        <div className="text">
                            <div className="info">
                                <p>{index + 1} • Trending • {trendPostCount1[index]} posts</p>
                            </div>
                            <div className="title">
                                <p>{trendTitle1[index]}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="trendingPosts">
                <h2>Trending Posts</h2>
                <div className="posts">
                    {trendingPostDp.map((picture, index) => {
                        const videoRef = useRef(null);
                        return (
                            <div className="post" key={index}>
                                <div className="account">
                                    <img src={picture} alt="" />
                                    <div>{trendingPostNames[index]}<svg viewBox="0 0 22 22" height='18px' aria-label="Verified account" role="img" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-f9ja8p r-og9te1 r-3t4u6i" data-testid="icon-verified"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg></div>
                                    <p>{trendingPostUsernames[index]}</p>
                                </div>
                                <div className='postContent'>
                                    <p>{trendingPostContent[index]}</p>
                                </div>
                                {trendingPostPics[index] && (
                                    <div className="media">
                                        {trendingPostPics[index].endsWith('.mp4') ? (
                                            <div className="videoWrapper">
                                                <video className="contentPic" ref={videoRef}>
                                                    <source src={trendingPostPics[index]} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                                <svg className="playIcon" viewBox="0 0 60 61" aria-hidden="true" height="50px"
                                                    onClick={() => {
                                                        if (videoRef.current) {
                                                            videoRef.current.play();
                                                            videoRef.current.controls = true;
                                                            videoRef.current.nextElementSibling.style.display = 'none';
                                                        }
                                                    }}
                                                >
                                                    <g>
                                                        <circle cx="30" cy="30.4219" fill="#333333" opacity="0.6" r="30"></circle>
                                                        <path d="M22.2275 17.1971V43.6465L43.0304 30.4218L22.2275 17.1971Z" fill="white"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                        ) : (
                                            <img className="contentPic" src={trendingPostPics[index]} alt="content" />
                                        )}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
            {trendPictures2.map((picture, index) => {
                return (
                    <div className="trend" key={index}>
                        <div className="image">
                            <img src={picture} alt="image" />
                        </div>
                        <div className="text">
                            <div className="info">
                                <p>{index + 6} • Trending • {trendPostCount2[index]} posts</p>
                            </div>
                            <div className="title">
                                <p>{trendTitle2[index]}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="trendingPeople">
                <h2>Trending People</h2>
                <div className="people">
                    {trendingPeopleDp.map((picture, index) => {
                        return (
                            <div className="person" key={index}>
                                <img src={trendingPeopleBanner[index]} alt="" className='banner' />
                                <div className='info'>
                                    <img src={picture} alt="" className='dp' />
                                    <div className="account">
                                        <div>
                                            <h4>{trendingPeopleName[index]}</h4>
                                            <p>{trendingPeopleUsernames[index]}</p>
                                        </div>
                                        <button>Follow</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {trendPictures3.map((picture, index) => {
                return (
                    <div className="trend" key={index}>
                        <div className="image">
                            <img src={picture} alt="image" />
                        </div>
                        <div className="text">
                            <div className="info">
                                <p>{index + 11} • Trending • {trendPostCount3[index]} posts</p>
                            </div>
                            <div className="title">
                                <p>{trendTitle3[index]}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="trendingCommunities">
                <h2>Trending Communities</h2>
                <div className="communities">
                    {trendingCommunitiesPics.map((picture, index) => {
                        return (
                            <div className="community" key={index}>
                                <img src={picture} alt="" />
                                <div className="info">
                                    <div>
                                        <h3>{trendingCommunitiesName[index]}</h3>
                                        <p>{trendingCommunitiesMembers[index]} Members</p>
                                    </div>
                                    <button>Join</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {trendPictures4.map((picture, index) => {
                return (
                    <div className="trend" key={index}>
                        <div className="image">
                            <img src={picture} alt="image" />
                        </div>
                        <div className="text">
                            <div className="info">
                                <p>{index + 16} • Trending • {trendPostCount4[index]} posts</p>
                            </div>
                            <div className="title">
                                <p>{trendTitle4[index]}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default TrendingSection