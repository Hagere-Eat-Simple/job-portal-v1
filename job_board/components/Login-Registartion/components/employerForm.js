"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function EmprForm() {
    const navigate = useRouter();
//states
    const [companyName, setCompanyName] = useState('');
    const [location, setLocation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errors, setErrors] = useState({});
//event handlers
    // const handleCreateAccount = () => {
    //   e.preventDefault();

        
    // }
    const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {localtion : location , phone : phoneNumber , name : companyName ,  isactive : "pending" , role : "company"  }
    const jsonData = JSON.stringify(data);
    sessionStorage.setItem("registrationData", jsonData);
    navigate.push('/registration/CreateAccount');
    // handleCreateAccount();
   };
   //nxt btn

  return (
    <section className="emprsec">
      <div className="employee">
        <h2>Setting up your account</h2>
        <form className="settingAcc" onSubmit={handleFormSubmit} >
          <div className="form-group">
            <label htmlFor="companyName">Company Name*</label>
            <input type="text"
             id="companyName"
              placeholder="Company Name"
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="websiteLink">Provide website link</label>
            <input type="text" id="websiteLink" placeholder="Optional" />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location*</label>
            <select id ="location" value={location} placeholder="Select below" onChange={(e) => setLocation (e.target.value)}>
              <option value="">Select Below</option>
              <option value="Remote">Remote</option>
              <option value="Addis Ababa">
                Addis Ababa 
              </option>
              <option value="Hawasa">Hawasa</option>
              <option value="Gondar">Gondar</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">
              Primary Phone Number of Organization*
            </label>
            <input type="text" 
            id="phoneNumber" 
            required
            placeholder="+011-123-4567"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}  />
            <h4>Are you looking for a job? Go to <a href='/registration/employee'> Job-Seeker Registration</a></h4>

          </div>
          <div className="NextBtn">
            <button type='submit' >Next</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EmprForm;