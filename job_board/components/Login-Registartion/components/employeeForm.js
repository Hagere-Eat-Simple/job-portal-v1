"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function EmpeForm(){

    //states
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [study, setStudy] = useState('');
    const [education, setEducation] = useState('');
    const [profession, setProfession] = useState('');
    const [level, setLevel] = useState('');
    const [exp, setExp] = useState('');
    const [recentE, setRecentE] = useState('');
    const [recentJ, setRecentJ] = useState('');
    const [salary, setSalary] = useState('');
    const navigate = useRouter()

    //event handlers
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const data = {
            localtion : "A.A", 
            phone:"12345",
            name : firstName ,  
            isactive : "active" ,  
            lname: lastName,
            exp :  parseInt(exp), 
            gender: gender,
            filedofs: study,
            education_level: education,
            proferssion: profession,
            employedAt: recentE,
            job_title: recentJ,
            recent_salary:  parseInt(salary)    
             }
        const jsonData = JSON.stringify(data);
        sessionStorage.setItem("registrationData", jsonData);
        navigate.push('/registration/CreateAccount');
        // handleCreateAccount();
       };
    return(
        <section className='empesec'>
            <div className="employee">
                <h2>Setting up your account</h2>
                <form className='settingAcc2' onSubmit={handleFormSubmit}>
                <div className="form-group2">
                    <label htmlFor="Name">Name*</label>
                    <div className='name-inputs'>
                        <input 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required type="text" placeholder='First Name'/>
                        <input 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required  type="text" placeholder='Last Name'/>
                    </div>
                </div>
                <div className="form-group2">
                    <label htmlFor="gender">Gender*</label>
                    <select value = {gender} onChange={(e) => setGender(e.target.value)} className ="gender">
                        <option value="">Select Below</option>
                        <option value="option1">Female</option>
                        <option value="option2">Male</option>
                    </select>
                </div>
                <div className="form-group2">
                    <label htmlFor="study">Field of study*</label>
                    <select  value = {study} onChange={(e) => setStudy(e.target.value)} className ="study">
                        <option value="">Select Field of Study</option>
                        <option value="option1">Enginerring</option>
                        <option value="option2">Chemistry</option>
                        <option value="option3">Pyschology</option>
                    </select>
                </div>
                <div className="form-group2">
                    <label htmlFor="education">Hiest Level of Education*</label>
                    <select  value = {education} onChange={(e) => setEducation(e.target.value)} className ="education">
                        <option value="">Higest level of education</option>
                        <option value="option1">Primary education</option>
                        <option value="option2">Secondary education</option>
                        <option value="option3">Post-secondary education</option>
                        <option value="option4">Bachelor's degree</option>
                        <option value="option5">Master's degree</option>
                        <option value="option6">Doctorate degree</option>
                    </select>
                </div>
                <div className="form-group2">
                    <label htmlFor="profession">Profession*</label>
                    <select  value = {profession} onChange={(e) => setProfession(e.target.value)} className ="profession">
                        <option value="">Select your profession</option>
                        <option value="option1">Therapist</option>
                        <option value="option2">Programmer</option>
                        <option value="option3">something else</option>
                    </select>
                </div>
                <div className="form-group2">
                    <label htmlFor="Clevel">Career Level*</label>
                    <select  value = {level} onChange={(e) => setLevel(e.target.value)} className ="Clevel">
                        <option value="">Select your carrer level</option>
                        <option value="option1">Entry Level</option>
                        <option value="option2">Junior</option>
                        <option value="option3">Mid-Level</option>
                        <option value="option4">Senior</option>
                        <option value="option5">Expert/Executive</option>
                    </select>
                </div>
                <div className="form-group2">
                    <label htmlFor="Recent">Currently/Recently Employed at & Job Title (optional) (if you don't have one please submit "No")</label>
                    <div className='employment-inputs'>
                        <input  
                        value={recentE}
                        onChange={(e) => setRecentE(e.target.value)}  
                        type="text" placeholder='Recently Employed at'/>
                        <input 
                        value={recentJ}
                        onChange={(e) => setRecentJ(e.target.value)}                  
                        type="text" placeholder='Recent Job Title'/>
                    </div>
                </div>
                <div className="form-group2">
                    <label htmlFor="exp">Total Years of Experience(optional) (if you don't have one please submit "No")</label>
                    <input 
                    value={exp}
                    onChange={(e) => setExp(e.target.value)}
                    type="Number" min='0' placeholder='Total Years of Experince'/>
                </div>
                <div className="form-group2">
                    <label htmlFor="Recent">Current/Recent Salary (optional)</label>
                    <input
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    type="Number" min='0' placeholder='Recently Salary'/>
                    <h4>Are you looking to Hire? Go to <a href='/registration/employer'> Employer Registration</a></h4>
                </div>
                <div className="NextBtn">
                    <button type='submit'>Next</button>
                </div>
                </form>
            </div>
        </section>
    )
}

export default EmpeForm;




 

 
 