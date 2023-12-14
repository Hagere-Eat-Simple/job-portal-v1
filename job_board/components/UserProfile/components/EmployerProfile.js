"use client"
import employeeProfilePage  from "../images/EmployeeProfileImage.svg"
import plus from "../images/plus.svg"
import React, {useRef, useState} from 'react'; 
import SecNavBar from './SecNavbar';
import axios from "axios";
import Button from '@mui/material/Button'
import { blue } from "@mui/material/colors";

const initialState={
  companyName:'',
  email:'',
  websiteLink:'',
  primaryPhoneNum:'',
  Location:'',
  proflieLogo:'',  
  }
const val = [
  "name",
  "email",
  "link",
  "phone",
  "location",
]
const data={}

const EmployerProfile = () => {

 //states
  const [values, setValues] = useState(initialState);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };


const inputRef= useRef(null);
const [selectedImage, setSelectedImage] = useState(null);
const handleImageClick= () =>{
  inputRef.current.click();
};
const handleImageUpload = (event) => {
  const file= event.target.files[0];
  setSelectedImage(event.target.files[0]);
  console.log(file);
}
 
const handleUpload = async () => {
  
  if (!selectedImage) {
    console.log("Please select an image.");
    return;
  }

  const formData = new FormData();
  formData.append("avatar", selectedImage);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      'Authorization':  localStorage.getItem('token')
    },
  };

  try {
    const response = await axios.post("http://localhost:3000/users/me/avatar", formData, config);
    if (response.status === 200) {
      console.log("File uploaded successfully.");
    } else {
      console.log("An error occurred.");
    }
  } catch (error) {
    console.log(error.message);
  }
};



const handleChange = (e) => {
  setValues({...values, [e.target.name]:e.target.value} )
}
function removeEmptyValue(object) {
  const keys = Object.keys(object);
  for (let i = 0; i < keys.length; i++) {
    if (object[keys[i]].replace(/\s/g, "")) {
      data[val[i]] = object[keys[i]]
    }
  }
}
    const onSubmit = async (e) => {
      e.preventDefault()
      console.log(values)
      removeEmptyValue(values)
      // const data = removeEmptyValue(values)
      console.log(data)
      try {
        const response = await axios.patch(`http://localhost:3000/user/update`,data, {
              headers: {
                'Authorization':  localStorage.getItem('token')
              }
            
        });
    
        if (response.status === 200) {
          console.log('updated', response.data);
          // setRef(prev=>!prev)
        } else {
          console.log('error');
        }
      } catch (error) {
        console.log(error)
        console.log('An error occurred. Please try again.');
      } 


      
      };
      // className= {isOpen? 'BasicCompanyInfo-clicked-style':'BasicCompanyInfo-default-style'}

  return (
   <section className="EmployerProfileSec" >
      <SecNavBar isOpen={isOpen} toggleDetails={toggleDetails} />
      <div className="ProfilePageEmployer">
         <h3 className="BasicCompanyInformation">
            Basic Company information
          </h3>
        <form id="profileForm" onSubmit={onSubmit}> 
          <div className="GridLayout">
          <div className="grid-item">
          <div className="Upload">
            <h4 className="profileLogo">
              Upload Company Logo
            </h4>
            <div>
              {selectedImage ? (
                <div>
                  <div className="Rectangle24" />
                  <img src={URL.createObjectURL(selectedImage)} className="newLogo" alt=""/>
                  <label htmlFor="upload" className="uploadLogoText" style={{ display: 'none' }}>
                    Upload Logo
                  </label>
                  <div onClick={handleImageClick} className="changeLogo" style={{ cursor: 'pointer' }}>
                    <label htmlFor="changePhoto" className="changeLogoText" style={{ cursor: 'pointer' }}>
                      Change Logo
                    </label>
                    <input
                      type="file"
                      id="image-upload2"
                      name="LogoPic"
                      accept=".jpg,.jpeg,.png,.svg"
                      ref={inputRef}
                      onChange={handleImageUpload}
                      style={{ display: 'none' }}
                    />
                  </div>
                </div>
              ) : (
                <div>
                    {/* <div onClick={handleImageClick} className="Rectangle24" />
                    <i onClick={handleImageClick} className="plusIcon" style={{ cursor: 'pointer' }}/> */}
                  <div onClick={handleImageClick} className="Rectangle24" />
                  <img onClick={handleImageClick} src={plus} alt="plus Logo" className="uploadLogo" style={{ cursor: 'pointer' }}/>
                  <label onClick={handleImageClick} htmlFor="upload" className="uploadLogoText">
                    Upload Logo
                  </label>
                  <div className="changeLogo" style={{ display: 'none' }}>
                    <label htmlFor="changePhoto" className="changeLogoText">
                      Change Logo
                    </label>
                  </div>
                </div>
              )}
            </div>
            <input
              type="file"
              id="image-upload"
              name="profileLogo"
              accept=".jpg,.jpeg,.png,.svg"
              ref={inputRef}
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
            <Button  variant="contained" color="primary" onClick={handleUpload}>
              Save
            </Button>
          </div>
        </div>
              <div className="grid-item">
              <label htmlFor="companyName" className="label-Input-Text">Company Name</label><br/>
            <input 
            type="text" 
            name="companyName" 
            className="label-Input-Text" 
          value={values.fullName}
            placeholder="eg: Dan Energy P.L.C" 
            required 
            onChange={handleChange}
            /><br/>
              
              <label className="label-Input-Text">Email</label><br/>
            <input 
            type="email" 
            name="email" 
            className="label-Input-Text" 
          value={values.fullName}
            placeholder="eg: danenergy@gmail.com" 
            required 
            onChange={handleChange}
            /><br/>
                
            <label htmlFor="websiteLink" className="label-Input-Text">Website Link</label><br/>
            <input type="text" name="websiteLink" className="label-Input-Text" onChange={handleChange} value={values.websiteLink}/><br/>
                
              </div>
          
              <div 
              
              className="grid-item">
              <label htmlFor="PrimaryPhoneNum" className="label-Input-Text">Primary Phone Number</label><br/>
                <input 
                type="tel" 
                name="primaryPhoneNum" 
                className="label-Input-Text" 
                placeholder="Primary_Phone_number" 
                value={values.primaryPhoneNum} 
                onChange={handleChange} 
                required
                /><br/>
                    
            <label htmlFor="Location" className="label-Input-Text">Location</label><br/>
                <input 
                type="text" 
                name="Location" 
                className="label-Input-Text" 
                placeholder="example: Ethiopia, Addis-Ababa, CMC-around Civil Service college" 
                value={values.Location} 
                required 
                onChange={handleChange} 
                /><br/>
              </div>
            </div>
        <button type="submit" className="SaveChanges" onSubmit={onSubmit} >Save Changes</button>    
    </form>
  </div>
</section>
    );
};

export default EmployerProfile