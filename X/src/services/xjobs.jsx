import '../scss/xjobs.css'
import { useAppContext } from '../App';
import { useEffect, useState } from 'react';
import XJobsEmployee from '../services/XJobsEmployee';
import XJobsEmployer from '../services/XJobsEmployer';

function XJobs() {

    const [employerPage, setEmployerPage] = useState(false);

    const { setServices, setService, setHomePage } = useAppContext();

    useEffect(() => {
        setService(true);
        setServices(false);
        setHomePage(false);
    }, []);

    return (
        <div className="xjobs">
            {employerPage?<XJobsEmployer setEmployerPage={setEmployerPage}/> : <XJobsEmployee setEmployerPage={setEmployerPage}/>}
        </div>
    )
}
export default XJobs