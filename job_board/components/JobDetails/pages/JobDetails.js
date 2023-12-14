"use client"

import NavBar from "../components/NavBar.js";
import Wrapper from "../styles/JobDetailsStyle.js"
import React, {useState} from 'react'; 
// import descimage from "../images/des"

const JobDetails = () => {
    const [isOpen, setIsOpen] = useState(false);
  return <Wrapper className="resizable-page" >

  <div className="JobPostPage">
          <NavBar isOpen={isOpen} toggleDetails={() => setIsOpen(!isOpen)} />

  <div id="myForm" className= {isOpen? 'JobPost-clicked-style':'JobPost-default-style'} >
  <div className="Boundary">
    <div className="PostJobText">
    Job Details
   </div> 
    <div className="board">
      <p className="JTitle">Job Title</p>
      <div className="info">
        <div>Company Name =Dan Energy P.L.C</div>
        <div>Work Location=Ethiopia, addis-Ababa,Arat-KIlo</div>
        <div>carrier Level=</div>
        <div>Salary=</div>
        <div>Years of Experience Required=7</div>
        <div>Proffesion=</div>
      </div>
      <div className="JDesc">Job Description</div>
      <textarea name="jobDesc" className="jobDescription" >
        
        Minimum of 50 words about the requirements for Job... 
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Nunc nec nisi auctor,
         vestibulum lacus a, 
         consectetur ligula. 
         Fusce id mollis nisl. 
         Sed tristique ligula a ligula tristique, 
         ac malesuada risus tincidunt. 
         Mauris ac nisl eget neque tempus finibus. 
         Nulla facilisi. Curabitur tincidunt elit sit amet lorem tincidunt, 
         at bibendum velit commodo. '
         Integer semper quam sed lorem lacinia, id fermentum lorem laoreet. Etiam vitae tortor vitae erat eleifend varius. Sed molestie lectus sed viverra tristique. Sed sollicitudin tortor sed arcu malesuada, ac lacinia odio efficitur.
        </textarea>
        
    </div>
    <button type="submit" className="apply" style={{cursor:'pointer'}}>Apply</button>
  </div>
  
  
  </div>
  
     </div>
      
    </Wrapper>
}

export default JobDetails