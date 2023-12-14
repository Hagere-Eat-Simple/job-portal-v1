"use client"
import React, { useEffect, useState } from 'react';
import SecNavBar from './SecNavbar';
import axios from 'axios';
import { useLogout } from '@/hooks/useLogout';
import { useRouter } from 'next/navigation';

const EmployerDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

 
  

  // Sample data for jobs
  const [jobs, setJobs] = useState([]);
  const {logout} = useLogout();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [ref , setRef] = useState(false);
  const jobsPerPage = 5;
  const totalJobs = jobs.length;
  const totalPages = Math.ceil(totalJobs / jobsPerPage);

  React.useEffect(() => {
         
    axios.get('http://localhost:3000/tasks' , {
      headers: {
        'Authorization':  localStorage.getItem('token')
      }
    
      })
    .then( (response) => {
      // console.log(response.data)
      setJobs(response.data);
      // console.log("com" , response.data)
    })
    .catch( (error)=>{
      console.log(error);
    });
 
    }, [ref])


  const toggleStatus = async (id , isactive) => {
    console.log(id)
    try {
      const response = await axios.patch(`http://localhost:3000/task/${id}`,{
        isactive:!isactive
    } , {
            headers: {
              'Authorization':  localStorage.getItem('token')
            } 
      });
  
      if (response.status === 200) {
        // console.log('activated', response.data);
        setRef(prev=>!prev)
      } else {
        setError('error');
      }
    } catch (error) {
      console.log(error);
    } 
  };

  const navigateToApplicants = (jobId) => {
    router.push(`/employer/applicants?id=${jobId}`)
//not done yet
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Get current jobs
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  return (
    <section className="dashboardSec">
      <SecNavBar isOpen={isOpen} toggleDetails={toggleDetails} />

      <div className="dashboard-content">
        <div className="dashboard-header">
          <h2>Recently Posted</h2>
          <button className="post-job-button">Post Jobs</button>
        </div>

        <div className="dashboard-table">
          <div className='titles'>
            <h3>Job</h3>
            <h3>Status</h3>
            <h3>Applicants</h3>
          </div>

          {jobs.map((job) => (
            <div key={job._id} className="job-row">
              <p>{job.desc}</p>
              <button
                className={`toggle-button ${job.isactive ? 'active' : 'inactive'}`}
                onClick={() => toggleStatus(job._id , job.isactive)} >
                {job.isactive ? 'Active' : 'Inactive'}
              </button>
              <button
                className="view-applicants-button"
                onClick={() => navigateToApplicants(job._id)}>
                View Applicants
              </button>
            </div>
          ))}

          {/* Pagination */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerDashboard;