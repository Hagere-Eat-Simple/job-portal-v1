"use client"
//import NavBar from "../components/NavBar";
import Wrapper from "./JobPostPage"
import React, {useState} from 'react'; 
import axios from "axios";
// import SecNavBar from "../../Profile/components/SecNavbar";

const JobPost = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [job_title, setJob_title] = useState("");
    const [job_location, setJob_location] = useState("");
    const [salary, setSalary] = useState("");
    const [company_name, setCompany_name] = useState("");
    const [exp, setExp] = useState("");
    const [location, setLocation] = useState("");
    const [desc, setDesc] = useState("");
   
    // const [pdata, setPdata] = useState();
    const handleSubit=async (e) =>{
      e.preventDefault()
     
          try {
            const response = await axios.post('http://localhost:3000/task', {job_location , job_title , salary:parseInt(salary) , company_name ,exp:parseInt(exp),desc} ,
           { headers: {
              'Authorization':  localStorage.getItem('token')
            }
          }
            );

            if (response.status === 201) {
              // Successful login logic
              console.log('created', response.data);
              // console.log(localStorage.getItem('token'))
              setJob_title("")
              setCompany_name('')
              setExp('')
              setLocation("")
              setSalary('')
              setDesc("")
              setJob_location('')
            } else {
              console.log('something went wrong try again');
            }
          } catch (error) {
            console.log(error)
            console.log('An error occurred. Please try again.');
          }
          
    }


  return (<Wrapper className="resizable-page" >

  <section className="PostJobsSec">
  {/* <NavBar isOpen={isOpen} toggleDetails={() => setIsOpen(!isOpen)} /> */}

    <div className= {isOpen? 'JobPost-clicked-style':'JobPost-default-style'}>
    
    <div className="Boundary">
    <div className="PostJobText">
      Post a Job
    </div> 
    <div className="GridLayout">
      
        <div className="grid-item">
        <label htmlFor="jTitle" className="label-Input-Text">Job title</label><br/>
      <input type="text" name="jTitle" className="label-Input-Text" placeholder="eg: backend engineer"  required value={job_title}
         onChange={(e)=>{setJob_title(e.target.value)}}
      /><br/>
        
      <label htmlFor="workLocation" className="label-Input-Text">Work Location</label><br/>
      <input type="text" name="workLocation" className="label-Input-Text" placeholder="eg: Ethiopia, Addis-Ababa" required 
        value={job_location}
        onChange={(e)=>{setJob_location(e.target.value)}}
      /><br/>
      
          
      <label htmlFor="salary" className="label-Input-Text">Salary</label><br/>
      <input type="text" name="salary" className="label-Input-Text" required
        value={salary}
        onChange={(e)=>{setSalary(e.target.value)}}
      /><br/>
          
        </div>
    
        <div className="grid-item">
        <label htmlFor="cName" className="label-Input-Text">Company Name</label><br/>
      <input type="text" name="cName" className="label-Input-Text" placeholder="example: Google" required
      value={company_name}
      onChange={(e)=>{setCompany_name(e.target.value)}}
      /><br/>
          
      <label htmlFor="level" className="label-Input-Text">Carrer Level</label><br/>
      <input type="text" name="level" className="label-Input-Text"  required 
      value={location}
      onChange={(e)=>{setLocation(e.target.value)}}
      /><br/>
          
      <label htmlFor="exp" className="label-Input-Text">Experience</label><br/>
      <input type="text" name="exp" className="label-Input-Text"  required
        value={exp}
        onChange={(e)=>{setExp(e.target.value)}}
      /><br/>
          
        </div>
    
        </div>

            <label htmlFor="jobDesc" className="jobDesc" 
          
            >Job  Description</label>
        
            <textarea name="jobDesc" className="jobDescription" placeholder= "Minimum of 50 words about the requirements for Job... "
              value={desc}
              onChange={(e)=>{setDesc(e.target.value)}}
            ></textarea>
          <button className="postButton" onClick={handleSubit}>Post Job</button>
          </div>
      </div>     
  </section>
  
  

      
    </Wrapper>)
}

export default JobPost