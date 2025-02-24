import '../css/explorePage.css'
import { useEffect, useState } from 'react';
import { trendPictures1, trendPostCount1, trendTitle1, trendPictures2, trendPostCount2, trendTitle2, trendPictures3, trendPostCount3, trendTitle3, trendPictures4, trendPostCount4, trendTitle4 } from '../../data';

function ExplorePage({ setExplorePage }) {

    useEffect(() => {
        setExplorePage(true);
    }, []);

    const [trending, setTrending] = useState(true)
    const [news, setNews] = useState(false)
    const [sports, setSports] = useState(false)
    const [entertainment, setEntertainment] = useState(false)

    return (
        <div className="explorePage">
            <div className="topbar">
                <div className='search'>
                    <span className='searchBox'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='13px'><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                        <input type="text" placeholder="Search" />
                    </span>
                    <svg viewBox="0 0 24 24" aria-hidden="true" height='1.5rem' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-1q142lx r-1kihuf0 r-1472mwg r-di8nfa r-lrsllp" data-testid="icon"><g><path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path></g></svg>
                </div>
                <div className='exploreOptions'>
                    <h4 className='trending highlight'>Trending</h4>
                    <h4 className='news normal'>News</h4>
                    <h4 className='sports normal'>Sports</h4>
                    <h4 className='entertainment normal'>Entertainment</h4>
                </div>
            </div>
            {trending ? <div className="trendingSection">
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
                                    <h3>{trendTitle1[index]}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })}
                
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
                                    <h3>{trendTitle2[index]}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })}
               
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
                                    <h3>{trendTitle3[index]}</h3>
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
                                <div className="info">
                                    <p>{index + 16} • Trending • {trendPostCount4[index]} posts</p>
                                </div>
                                <div className="title">
                                    <h3>{trendTitle4[index]}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div> : news ? '' : sports ? '' : entertainment ? '' : ''}
        </div>
    )
}
export default ExplorePage
