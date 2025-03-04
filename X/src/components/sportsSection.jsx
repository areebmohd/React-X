import '../css/explorePage.css'
import { trendPictures3, trendPostCount3, trendTitle3, trendPictures4, trendPostCount4, trendTitle4, trendingPostPeople, sportsTeams } from '../../data';
import IndvsAus from '../assets/IndvsAus.avif';

function SportsSection() {
    return (
        <div className="content">
            <div className="ongoing">
                <h2>Ongoing</h2>
                <div className="box">
                    <div className="title">ICC Champions Trophy</div>
                    <div className="teams"><h1>IND</h1><h2>vs</h2><h1>AUS</h1></div>
                    <div className="score">Score: IND 236-5</div>
                    <div className="buttons"><button>Watch Live</button><button>Pin Live Score</button></div>
                    <div className="liveVideo">
                        <img src={IndvsAus} alt="" />
                        <svg className="playIcon" viewBox="0 0 60 61" aria-hidden="true" height="50px">
                            <g>
                                <circle cx="30" cy="30.4219" fill="#333333" opacity="0.6" r="30"></circle>
                                <path d="M22.2275 17.1971V43.6465L43.0304 30.4218L22.2275 17.1971Z" fill="white"></path>
                            </g>
                        </svg>
                        <div className="livestamp">LIVE</div>
                    </div>
                </div>
            </div>
            {trendPictures3.map((picture, index) => {
                return (
                    <div className="trend" key={index}>
                        <div className="image">
                            <img src={picture} alt="image" />
                        </div>
                        <div className="text">
                            <div className="title">
                                <p>{trendTitle3[index]}</p>
                            </div>
                            <div className="info">
                                <p><div><img src={trendingPostPeople[index][0]} alt="" className='img1' /><img src={trendingPostPeople[index][1]} alt="" className='img2' /><img src={trendingPostPeople[index][2]} alt="" className='img3' /></div> {trendPostCount3[index]} posts • {index + 1} hours ago</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="upcoming">
                <h2>Upcoming</h2>
                <div className="posts">
                    {sportsTeams.map((teams, index) => {
                        return (
                            <div className="box" key={index}>
                                <div className="title">Champions Trophy</div>
                                <div className="teams"><h3>{teams}</h3></div>
                                <div className="date">{index + 5} March 2024</div>
                                <div className="buttons"><button>Buy Tickets</button><button>Notify</button></div>
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
                            <div className="title">
                                <p>{trendTitle4[index]}</p>
                            </div>
                            <div className="info">
                                <p><div><img src={trendingPostPeople[index][0]} alt="" className='img1' /><img src={trendingPostPeople[index][1]} alt="" className='img2' /><img src={trendingPostPeople[index][2]} alt="" className='img3' /></div> {trendPostCount4[index]} posts • {index + 5} hours ago</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default SportsSection