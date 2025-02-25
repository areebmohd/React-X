import '../css/explorePage.css'
import { trendPictures1, trendPostCount1, trendTitle1, trendPictures2, trendPostCount2, trendTitle2, trendingPostPeople } from '../../data';

function NewsSection() {
    return (
        <div className="content">
            {trendPictures2.map((picture, index) => {
                return (
                    <div className="trend" key={index}>
                        <div className="image">
                            <img src={picture} alt="image" />
                        </div>
                        <div className="text">
                            <div className="title">
                                <h3>{trendTitle2[index]}</h3>
                            </div>
                            <div className="info">
                                <p><div><img src={trendingPostPeople[index][0]} alt="" className='img1'/><img src={trendingPostPeople[index][1]} alt="" className='img2'/><img src={trendingPostPeople[index][2]} alt="" className='img3'/></div> {trendPostCount2[index]} posts • {index + 2} hours ago</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            {trendPictures1.map((picture, index) => {
                return (
                    <div className="trend" key={index}>
                        <div className="image">
                            <img src={picture} alt="image" />
                        </div>
                        <div className="text">
                            <div className="title">
                                <h3>{trendTitle1[index]}</h3>
                            </div>
                            <div className="info">
                                <p><div><img src={trendingPostPeople[index][0]} alt="" className='img1'/><img src={trendingPostPeople[index][1]} alt="" className='img2'/><img src={trendingPostPeople[index][2]} alt="" className='img3'/></div> {trendPostCount1[index]} posts • {index + 10} hours ago</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default NewsSection