import '../scss/xjobs.css'
import { Link } from 'react-router-dom';
import xjobslogo from '../assets/xjobslogo.jpg';
import { suggestedJobsPictures, savedJobsPictures, jobcompany1, jobcompany2, joblocation1, joblocation2, jobtitles1, jobtitles2 } from '../../data';

function XJobsEmployee({ setEmployerPage }) {

    return (
        <div className="xjobs1">
            <div className="topBar">
                <div className='title'>
                    <Link to={'/services'} className='link'><svg viewBox="0 0 24 24" aria-hidden="true" height='2.5rem' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03"><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg></Link>
                    <h2>X Jobs</h2>
                </div>
                <div className='options'>
                    <p>Your Resume</p>
                    <p onClick={() => setEmployerPage(true)}>For Employer</p>
                </div>
            </div>
            <div className="logo">
                <img src={xjobslogo} alt="" />
            </div>
            <div className="searchBar">
                <h1>Search Jobs</h1>
                <div className='input'><input type="text" placeholder='Keyword' /><input type="text" placeholder='Location' /><button>Search</button></div>
            </div>
            <div className="boxes">
                <div className="box">
                    <h2>Suggested Jobs</h2>
                    <p className='p1'>These jobs are suggested on the basis of your resume.</p>
                    <div className="jobs">
                        {suggestedJobsPictures.map((picture, index) => (
                            <div key={index} className={index<2?'job jobBottom':'job'}>
                                <img src={picture} alt='picture' />
                                <div className="details">
                                    <h3>{jobtitles1[index]}</h3>
                                    <p>{jobcompany1[index]}</p>
                                    <p className='p1'>{joblocation1[index]}</p>
                                </div>
                                <p className='p2'>view job</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="box">
                    <h2>Saved Jobs</h2>
                    <p className='p1'>Your saved jobs are shown here.</p>
                    <div className="jobs">
                        {savedJobsPictures.map((picture, index) => (
                            <div key={index} className={index<2?'job jobBottom':'job'}>
                                <img src={picture} alt='picture' />
                                <div className="details">
                                    <h3>{jobtitles2[index]}</h3>
                                    <p>{jobcompany2[index]}</p>
                                    <p className='p1'>{joblocation2[index]}</p>
                                </div>
                                <p className='p2'>view job</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="applications">
                <h2>Job Application Tracking</h2>
                <p className="p1">You have applied for two jobs.</p>
                <div className="applicationBox">
                    <div className="jobs">
                        {savedJobsPictures.slice(0, 2).map((picture, index) => (
                            <div key={index} className={index<1?'appliedJobs jobBottom':'appliedJobs'}>
                                <div className="appliedJob">
                                    <img src={picture} alt='picture' />
                                    <div className="details">
                                        <h3>{jobtitles2[index]}</h3>
                                        <p>{jobcompany2[index]}</p>
                                        <p className='p1'>{joblocation2[index]}</p>
                                    </div>
                                    <p className='p2'>view job</p>
                                </div>
                                <div className="statusBar">
                                    {['Applied', 'Resume Checking', 'Recruiters Review', 'Shortlisted', 'Interview', 'Final Decision'].map((text, stepIndex) => (
                                        <div key={stepIndex} className="statusStep">
                                            <div className={(index === 0 && stepIndex > 2) || (index === 1 && stepIndex > 4) ? "statusNumber1" : "statusNumber2"}>{stepIndex + 1}</div>
                                            <div className="statusText">{text}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}
export default XJobsEmployee