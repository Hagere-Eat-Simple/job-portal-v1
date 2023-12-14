"use client"

import React, { useState, useEffect } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import axios from "axios";
import jobData from "./jobData";
import "@/components/JobFiltering/styles/FilterApp.scss"

function Filter({data}) {




  const [searchQuery, setSearchQuery] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const [filters, setFilters] = useState({
    experience: "",
    salary: "",
    careerLevel: "",
    location: ""
  });
 //const [filteredJobs, setFilteredJobs] = useState(jobData);
 const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
      let data1 = {};
      let search = "search";
      if(data){
        console.log(data)
        data1 = String(data)
        search = true
      }
      axios.post('http://localhost:3000/filter/tasks',{search , data : data1 , skip : 0})
      .then( (response) => {
      setFilteredJobs(response.data);

        console.log(response.data[0])
        // setUser(response.data);
        // console.log("com" , response.data)
      })
      .catch( (error)=>{
        console.log(error);
      });

  }, [])
  
  const handleSearch = () => {

    axios.post('http://localhost:3000/filter/tasks',{ search:"search" , data : searchQuery , skip : 0})
    .then( (response) => {
    setFilteredJobs(response.data);

      console.log(response.data[0])
      // setUser(response.data);
      // console.log("com" , response.data)
    })
    .catch( (error)=>{
      console.log(error);
    });



    // const filtered = jobData.filter(
    //   job =>
    //     job.title.includes(searchQuery) ||
    //     job.careerLevel.includes(searchQuery)
    // );
  };

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(6);

//event handler
const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
};

const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

const indexOfLastJob = currentPage * jobsPerPage;
const indexOfFirstJob = indexOfLastJob - jobsPerPage;
const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);


  const handleFilter = () => {
    // e.preventDefault();
    const { experience, level, salary, location } = filters;
    console.log(filters)
  
    // const filtered = jobData.filter(job => {
    //   const matchesExperience = (experience) => {
    //     if (experience === "option1") {
    //       return job.experienceRequired >= 0 && job.experienceRequired <= 3;
    //     } else if (experience === "option2") {
    //       return job.experienceRequired > 3 && job.experienceRequired <= 5;
    //     } else if (experience === "option3") {
    //       return job.experienceRequired > 5 && job.experienceRequired <= 10;
    //     } else if (experience === "option4") {
    //       return job.experienceRequired > 10 && job.experienceRequired <= 15;
    //     } else if (experience === "option5") {
    //       return job.experienceRequired > 15 && job.experienceRequired <= 20;
    //     } else if (experience === "option6") {
    //       return job.experienceRequired > 20;
    //     }
    //     return true; // Return true for no filter selected
    //   };
  
    //   const matchesLevel = (level) => {
    //     const levelsMap = {
    //       option1: "Entry",
    //       option2: "Junior",
    //       option3: "Mid-Level",
    //       option4: "Senior",
    //       option5: "Executive"
    //     };
    //     return level ? job.careerLevel === levelsMap[level] : true;
    //   };
  
    //   const matchesSalary = (salary) => {
    //           // Filter by salary
    //   if (salary === "option1") {
    //     return job.salary >= 2000 && job.salary <= 3000;
    //   } else if (salary === "option2") {
    //     return job.salary > 3000 && job.salary <= 5000;
    //   } else if (salary === "option3") {
    //     return job.salary > 5000 && job.salary <= 10000;
    //   } else if (salary === "option4") {
    //     return job.salary > 10000 && job.salary <= 15000;
    //   } else if (salary === "option5") {
    //     return job.salary > 15000 && job.salary <= 20000;
    //   } else if (salary === "option6") {
    //     return job.salary > 20000;
    //   }
    //     return true; // Return true for no filter selected
    //   };
  
    //   const matchesLocation = (location) => {
    //     const locationsMap = {
    //       option1: "Remote",
    //       option2: "Addis Abeba",
    //       option3: "Gondar",
    //       option4: "America",
    //       option5: "London",
    //       option6: "Japan",
    //     };
    //     return location ? job.location === locationsMap[location] : true;
    //   };
  
    //   return (
    //     matchesExperience(experience) &&
    //     matchesLevel(level) &&
    //     matchesSalary(salary) &&
    //     matchesLocation(location)
    //   );
    // });
    
    // setFilteredJobs(filtered);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const arr = ['exp' , "salary" , "location" , "level"]
    const data2 = {}
    const { experience,careerLevel , level, salary, location } = filters;
    console.log(filters)
    let i = 0;
    for (let key in filters) {
      if(key !== "careerLevel"){
          data2[arr[i]] = filters[key]
          i++
      }}
    
  
    console.log(data2)
      axios.post('http://localhost:3000/filter/tasks',{ search:"filter" , data : data2 , skip : 0})
      .then( (response) => {
        console.log(response)
        setFilteredJobs(response.data);
        console.log(response.data[0])
        // setUser(response.data);
        // console.log("com" , response.data)
      })
      .catch( (error)=>{
        console.log(error);
      });
  };

  return (
    <div className="sectionF">
        <div className="search-input">
          <input
            type="text"
            className="InputSearch"
            placeholder="Search by job title, position, keyword..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <button className="searchBtn" onClick={handleSearch}> <FaSearch /> </button>
         
          <button className="filterBtn" onClick={() => setShowSidebar(!showSidebar)}>
            <FaFilter className="icon" />
          </button>
        </div>
      {showSidebar && (
        <div className="sidebar">
          <form className="filterFields"  onSubmit={handleSubmit}>
          <div className="top">
            {/* <h3>Select Filters</h3> */}
            <button className="apllyFilter" type="submit" onClick={handleFilter}>Apply Filter</button>
          </div>
          <div className="exp">
            <h3>Experience </h3>
              <div className="radio-container">
                <div className="left-column">
                    <label className="radio-label">
                    <input type="radio" name="experience" value={0}
                    onChange={e =>
                      setFilters({ ...filters, experience: e.target.value })
                    }
                    />
                    0 - 3
                    </label>
                    <label className="radio-label">
                        <input type="radio" name="experience" value={5}
                          onChange={e =>
                            setFilters({ ...filters, experience: e.target.value })
                          }
                        />
                        3 - 5
                    </label>
                    <label className="radio-label">
                        <input type="radio" name="experience" value={10}
                          onChange={e =>
                            setFilters({ ...filters, experience: e.target.value })
                          }                           
                        />
                        5 - 10
                    </label>
                    <label className="radio-label">
                        <input type="radio" name="experience" value={15}
                          onChange={e =>
                            setFilters({ ...filters, experience: e.target.value })
                          }
                        />
                        10 - 15
                    </label>
                </div>
                <div className="right-column">
                    <label className="radio-label">
                        <input type="radio" name="experience" value={20}
                          onChange={e =>
                            setFilters({ ...filters, experience: e.target.value })
                          }                           
                        />
                        15 - 20
                    </label>
                    <label className="radio-label">
                        <input type="radio" name="experience" value="20" 
                          onChange={e =>
                            setFilters({ ...filters, experience: e.target.value })
                          }                           
                        />
                        20 Plus
                    </label>
                 </div>
             </div>
          </div>
          <div className="level">
                <h3>Carrer Level</h3>
                    <div className="radio-container">
                        <div className="left-column">
                        <label className="radio-label">
                            <input type="radio" name="level" value="entry"
                           onChange={e =>
                            setFilters({ ...filters, level: e.target.value })
                          }                           
                            />
                            Entry
                        </label>
                        <label className="radio-label">
                            <input type="radio" name="level" value="junior"
                            onChange={e =>
                              setFilters({ ...filters, level: e.target.value })
                            }                           
                            />
                            Junior
                        </label>
                        <label className="radio-label">
                            <input type="radio" name="level" value="mid-level"
                           onChange={e =>
                            setFilters({ ...filters, level: e.target.value })
                          }                            
                            />
                            Mid-Level
                        </label>
                        <label className="radio-label">
                            <input type="radio" name="level" value="senior" 
                           onChange={e =>
                            setFilters({ ...filters, level: e.target.value })
                          }                           
                            />
                            Senior
                        </label>
                        </div>
                        <div className="right-column">
                        <label className="radio-label">
                            <input type="radio" name="level" value="executive"
                           onChange={e =>
                            setFilters({ ...filters, level: e.target.value })
                          }                           
                            />
                            Executive
                        </label>
                        </div>
                  </div>
            </div>
            <div className="salary">
              <h3>Salary</h3>
                  <div className="radio-container">
                      <div className="left-column">
                      <label className="radio-label">
                          <input type="radio" name="salary" value="3000" 
                           onChange={e =>
                            setFilters({ ...filters, salary: e.target.value })
                          }                      
                          />
                          {" < "}3,000 birr
                      </label>
                      <label className="radio-label">
                          <input type="radio" name="salary" value="5000"
                           onChange={e =>
                            setFilters({ ...filters, salary: e.target.value })
                          }                          
                          />
                          {" < "}5,000 birr
                      </label>
                      <label className="radio-label">
                          <input type="radio" name="salary" value="10000"
                           onChange={e =>
                            setFilters({ ...filters, salary: e.target.value })
                          }                          
                          />
                          {" < "}10,000 birr
                      </label>
                      <label className="radio-label">
                          <input type="radio" name="salary" value="15000"
                            onChange={e =>
                              setFilters({ ...filters, salary: e.target.value })
                            }                         
                          />
                          {" < "}15,000 birr
                      </label>
                      </div>
                      <div className="right-column">
                      <label className="radio-label">
                          <input type="radio" name="salary" value="20000" 
                            onChange={e =>
                              setFilters({ ...filters, salary: e.target.value })
                            }                         
                          />
                          {" < "}20,000 birr
                      </label>
                      <label className="radio-label">
                          <input type="radio" name="salary" value="21000" 
                           onChange={e =>
                            setFilters({ ...filters, salary: e.target.value })
                          }                         
                          />
                          {" "}20,000 birr +
                      </label>
                      </div>
                  </div>
              </div>
              <div className="location">
                <h3>Location</h3>
                    <div className="radio-container">
                        <div className="left-column">
                        <label className="radio-label">
                            <input type="radio" name="location" value="remote" 
                           onChange={e =>
                            setFilters({ ...filters, location: e.target.value })
                          }                             
                            />
                            Remote
                        </label>
                        <label className="radio-label">
                            <input type="radio" name="location" value="addis ababa"
                           onChange={e =>
                            setFilters({ ...filters, location: e.target.value })
                          }                           
                            />
                            Addis Abeba
                        </label>
                        <label className="radio-label">
                            <input type="radio" name="location" value="gondar" 
                           onChange={e =>
                            setFilters({ ...filters, location: e.target.value })
                          }                           
                            />
                            Gondar
                        </label>
                        <label className="radio-label">
                            <input type="radio" name="location" value="america"
                           onChange={e =>
                            setFilters({ ...filters, location: e.target.value })
                          }                            
                            />
                            America
                        </label>
                        </div>
                        <div className="right-column">
                        <label className="radio-label">
                            <input type="radio" name="location" value="hawassa"
                           onChange={e =>
                            setFilters({ ...filters, location: e.target.value })
                          }                            
                            />
                            hawassa
                        </label>
                        <label className="radio-label">
                            <input type="radio" name="location" value="gambela"
                           onChange={e =>
                            setFilters({ ...filters, location: e.target.value })
                          }                           
                            />
                            gambela
                        </label>
                        </div>
                    </div>
                </div>
            </form>
       </div>
      )}
      <div className="jobSnipents">
        <div className="grid">
        {/* {currentJobs.map((job) => (
  // Render job snippet JSX code
))} */}
          {/* {filteredJobs.map(job => ( */}
          {currentJobs.map((job) => (
            <div className="grid-item" key={job.id}>
              <b><h2>{job.job_title}</h2></b>
              <p>Company Name: {job.company_name}</p>
              <p>Work Location: {job.job_location}</p>
              <p>Career Level: {job.careerLevel}</p>
              <p>Salary: {job.salary}</p>
              <p>Experience required: {job.exp}</p>
              <hr />
              <p>Job Description: {job.desc}</p>
              <a href={`${job.owner?`/employer/apply?id=${job._id}`:job.link}`} target="_blank">View Job Details And Apply</a>
            </div>
          ))}
        </div>
      </div>
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
  );
}
export default Filter;
