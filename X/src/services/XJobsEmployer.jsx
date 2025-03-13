import '../scss/xjobs.css'
import { Link } from 'react-router-dom';
import xjobsemployerlogo from '../assets/xjobsemployerlogo.jpg';
import { savedJobsPictures, jobcompany2, joblocation2, jobtitles2, suggestedPeople1, suggestedPeople2, suggestedPersonNames1, suggestedPersonNames2, suggestedPersonUserNames1, suggestedPersonUserNames2 } from '../../data';

function XJobsEmployer({ setEmployerPage }) {
    return (
        <div className="xjobs2">
            <div className="topBar">
                <div className='title'>
                    <Link to={'/services'} className='link'><svg viewBox="0 0 24 24" aria-hidden="true" height='2.5rem' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03"><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg></Link>
                    <h2>X Jobs</h2>
                </div>
                <div className='options'>
                    <p onClick={() => setEmployerPage(false)}>Back</p>
                </div>
            </div>
            <div className="logo">
                <img src={xjobsemployerlogo} alt="" />
            </div>
            <div className="jobPost">
                <button>Post a New Job</button>
                <p>View Your Posted Jobs</p>
            </div>
            <div className="boxes">
                <div className="box">
                    <h2>Suggested Employees</h2>
                    <p className='p1'>These people are suggested by comparing their resume with your job post.</p>
                    <div className="people">
                        <p className='p1'>Web Designer post</p>
                        {suggestedPeople1.map((picture, index) => (
                            <div key={index} className='person'>
                                <img src={picture} alt='picture' />
                                <div className="personDetails">
                                    <h4>{suggestedPersonNames1[index]}</h4>
                                    <p className='p1'>{suggestedPersonUserNames1[index]}</p>
                                </div>
                                <p className='p2'>view resume</p>
                            </div>
                        ))}
                        <hr className='hr'/>
                        <p className='p1 p3'>Web Engineer post</p>
                        {suggestedPeople2.map((picture, index) => (
                            <div key={index} className='person'>
                                <img src={picture} alt='picture' />
                                <div className="personDetails">
                                    <h4>{suggestedPersonNames2[index]}</h4>
                                    <p className='p1'>{suggestedPersonUserNames2[index]}</p>
                                </div>
                                <p className='p2'>view resume</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="box">
                    <h2>Job Post Analytics</h2>
                    <p className='p1'>Showing analytics for two jobs posted by you.</p>
                    <div className="jobs">
                        {savedJobsPictures.slice(0, 2).map((picture, index) => (
                            <div className={index < 1 ? 'jobAnalytics jobBottom' : 'jobAnalytics'}>
                                <div key={index} className='job'>
                                    <img src={picture} alt='picture' />
                                    <div className="details">
                                        <h3>{jobtitles2[index]}</h3>
                                        <p>{jobcompany2[index]}</p>
                                        <p className='p1'>{joblocation2[index]}</p>
                                    </div>
                                    <p className='p2'>view job</p>
                                </div>
                                <div className="analytics">
                                    <p className='p1'>{Math.floor(Math.random()*10)}K people viwed your job</p>
                                    <p className='p1'>{Math.floor(Math.random()*100)} people are interested in your job</p>
                                    <p className='p1'>0{Math.floor(Math.random()*10)} people applied for your job</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default XJobsEmployer