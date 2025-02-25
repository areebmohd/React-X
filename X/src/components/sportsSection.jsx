import '../css/explorePage.css'
import { trendPictures3, trendPostCount3, trendTitle3, trendPictures4, trendPostCount4, trendTitle4, trendingPostPeople } from '../../data';

function SportsSection() {
    return (
        <div className="content">
            {trendPictures3.map((picture, index) => {
                return (
                    <div className="trend" key={index}>
                        <div className="image">
                            <img src={picture} alt="image" />
                        </div>
                        <div className="text">
                            <div className="title">
                                <h3>{trendTitle3[index]}</h3>
                            </div>
                            <div className="info">
                                <p><div><img src={trendingPostPeople[index][0]} alt="" className='img1'/><img src={trendingPostPeople[index][1]} alt="" className='img2'/><img src={trendingPostPeople[index][2]} alt="" className='img3'/></div> {trendPostCount3[index]} posts • {index + 1} hours ago</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            {trendPictures4.map((picture, index) => {
                return (
                    <div className="trend" key={index}>
                        <div className="image">
                            <img src={picture} alt="image" />
                        </div>
                        <div className="text">
                            <div className="title">
                                <h3>{trendTitle4[index]}</h3>
                            </div>
                            <div className="info">
                                <p><div><img src={trendingPostPeople[index][0]} alt="" className='img1'/><img src={trendingPostPeople[index][1]} alt="" className='img2'/><img src={trendingPostPeople[index][2]} alt="" className='img3'/></div> {trendPostCount4[index]} posts • {index + 5} hours ago</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default SportsSection