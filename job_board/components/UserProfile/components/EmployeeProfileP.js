 // import Wrapper from "..//wrappers/EmployeeProfilePage"
//import employeeProfilePage  from "../images/EmployeeProfileImage.svg"
"use client"
import plus from "../images/plus.svg"
import React, {useRef, useState, useEffect } from 'react'; 
import PDFLogo from "../images/PDF_file_icon.svg"
//import SecNavBar from "./SecNavbar";
import ThrNavBar from "./ThrNavBar";
import axios from "axios";
import { Button } from "@mui/material";

const initialState={

fullName:'',
email:'',
gender:'',
phoneNum:'',
profession:'',
experience:'',
profliePic:'',
cv:'',

}
const val = [
  "name",
  "email",
  "gender",
  "phone",
  "profession",
  "exp",
]
const data={}



const EmployeeProfile = () => {
  //nav bar
  const [isOpen, setIsOpen] = useState(false);
  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

 const [values, setValues] = useState(initialState)


const inputRef= useRef(null);
const inputFileRef= useRef(null);
const [selectedImage, setSelectedImage] = useState(null);

const [selectedFile, setSelectedFile] = useState(null);
// const [preview, setPreview] = useState(null);
const handleFileClick= () => {
  inputFileRef.current.click();
}
const handleFileUpload = (event) => {
  const selectedfile= event.target.files[0];
  setSelectedFile(event.target.files[0]);
  console.log(selectedfile);
  // if(selectedfile){
  //   const reader = new FileReader();
  //   // reader.onloadend = () => {
  //   //   setPreview(reader.result);
  //   // };
  //   reader.readAsDataURL(selectedfile);
  // }
};

const handleOpenFile = () => {
  if (selectedFile) {
    const fileURL = URL.createObjectURL(selectedFile);
    window.open(fileURL);
  }
};

const handleImageClick= () =>{
  inputRef.current.click();
};
const handleImageUpload = (event) => {
  const file= event.target.files[0];
  setSelectedImage(event.target.files[0]);
  console.log(file);
}


const handleFUpload = async () => {
  
  if (!selectedImage) {
    console.log("Please select a pdf file.");
    return;
  }

  const formData = new FormData();
  formData.append("pdf", selectedFile);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      'Authorization':  localStorage.getItem('token')
    },
  };

  try {
    const response = await axios.post("http://localhost:3000/users/me/cv", formData, config);
    if (response.status === 200) {
      console.log("File uploaded successfully.");
    } else {
      console.log("An error occurred.");
    }
  } catch (error) {
    console.log(error.message);
  }
};

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
  removeEmptyValue(values)
  // const data = removeEmptyValue(values)
  console.log(data)
  data['exp'] = parseInt(data['exp'])
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
  return(

<section className="EmployeeProfileSec ">
  <ThrNavBar isOpen={isOpen} toggleDetails={toggleDetails} />
<div className="ProfilePageEmployee">

<form id="myForm" className= {isOpen? 'BasicInfo-clicked-style':'BasicInfo-default-style'} onSubmit={onSubmit}>
 <h2 className="BasicPersonalInformation">
  Basic Personal information
 </h2> 
 <div className="GridLayout">
   <div className="grid-item">
        
    <div className="Upload">
      <label htmlFor="pp"  className="profilePicture">Profile Picture</label><br/>
  <div >
           {selectedImage ? <div>
            <div className="Rectangle24" />
            <img src={URL.createObjectURL(selectedImage)} className="newImage" alt=""/>
             <label htmlFor="upload"  className="uploadPhotoText" style={{display:'none'}} >Upload Photo</label>
             <div onClick={handleImageClick} className="changeImg" style={{cursor:'pointer'}}>
    <label htmlFor="changePhoto" className="changeImgText" style={{cursor:'pointer'}}>Change Photo</label>
    <input
        type="file"
        id="image-upload2"
        name="profilePic"
        accept=".jpg,.jpeg,.png,.svg"
        ref={inputRef}
        onChange={handleImageUpload}
        style={{ display: 'none' }}
      />
    </div>
             </div>
 : <div>
  <div onClick={handleImageClick} className="Rectangle24" />
  <img onClick={handleImageClick} src={plus} alt="plus Logo" className="uploadPhoto" style={{ cursor: 'pointer' }}/>
  <label onClick={handleImageClick} htmlFor="upload"  className="uploadPhotoText">Upload Photo</label>
  <div  className="changeImg" style={{display:'none'}}>
    <label htmlFor="changePhoto" className="changeImgText" >Change Photo</label>
    </div>

  </div>}
         </div>
      <input
        type="file"
        id="image-upload"
        name="profilePic"
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
    <label htmlFor="fName" className="label-Input-Text">Full Name</label><br/>
  <input 
  type="text" 
  name="fullName" 
  className="label-Input-Text" 
 value={values.fullName}
  placeholder="eg: John Smith" 
  required 
  onChange={handleChange}
  /><br/>
     
  <label htmlFor="sex" className="label-Input-Text">Gender</label><br/>
  <select id="dropdown" name="gender"  required  className="label-Input-Text" onChange={handleChange}  value={values.gender} >
  
        <option value="none">-- Select --</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
  </select><br/>
      
  <label htmlFor="experience" className="label-Input-Text">Experience</label><br/>
  <input type="text" name="experience" className="label-Input-Text" onChange={handleChange} value={values.experience}/><br/>
      
    </div>

    <div 
    
    className="grid-item">
    <label htmlFor="phoneNum" className="label-Input-Text">Phone Number</label><br/>
  <input 
  type="tel" 
  name="phoneNum" 
  className="label-Input-Text" 
  placeholder="Phone_No" 
  value={values.phoneNum} 
  onChange={handleChange} 
  required
  /><br/>
      
  <label htmlFor="Proff" className="label-Input-Text">Proffesion</label><br/>
  <input 
  type="text" 
  name="profession" 
  className="label-Input-Text" 
  placeholder="example: software engineer" 
  value={values.profession} 
  required 
  onChange={handleChange} 
  /><br/>
      
  <label htmlFor="email" className="label-Input-Text">Email</label><br/>
  <input 
  type="email" 
  name="email" 
  className="label-Input-Text" 
  placeholder="eg: johnsmith@gmail.com" 
  value={values.email} 
  required 
  onChange={handleChange}
  /><br/>
      
    </div>

    </div>
    <div className="foot" >
    
    <label htmlFor="cv" className="UploadYourCvResume">Upload Your CV/Resume</label>
    
    
    
    <div >
           {selectedFile ? 
           <div>
            <div className="Rectangle25" />
            <div onClick={handleOpenFile}>
              <img src={PDFLogo} className="newFile"  alt="" style={{cursor:'pointer'}} />
              <span className="fileName" style={{cursor:'pointer'}}>{selectedFile.name}</span>
              </div>
            <div className="AddCvResume" style={{display:'none'}} >Add Cv/ Resume</div> 
            <img src={plus} alt="plus Logo"  className="uploadCv" style={{ display:'none' }}/> 
           <div onClick={handleFileClick} className="changeFile" style={{cursor:'pointer'}}> 
           <span className="changeFileText"  >Change File</span>
           <input
        type="file"
        id="file-upload"
        name="cv"
        accept=".pdf"
        ref={inputFileRef}
        onChange={handleFileUpload}
        style={{ display: 'none' }}
      />
           </div>

            </div>
    :<div >
      <div className="Rectangle25" />
      {/* <img src={plus} alt="plus Logo" className="uploadCv" onClick={handleFileClick} style={{ cursor: 'pointer' }}/>  */}
      <div className="AddCvResume" onClick={handleFileClick}>Add Cv/ Resume <i class="fas fa-paperclip"></i></div>
      <div className="changeFile" style={{display:"none"}}> <span className="changeFileText"  >Change File</span></div>
      <input
        type="file"
        id="file-upload"
        name="cv"
        accept=".pdf"
        ref={inputFileRef}
        onChange={handleFileUpload}
        value={values.cv}
        style={{ display: 'none' }}
        />
      </div>}
           <Button  variant="contained" color="primary" onClick={handleFUpload}>
              Save
            </Button>
      </div>
      <button type="submit" className="SaveChanges" onSubmit={onSubmit} >Save Changes</button>
      
    </div>
    
</form> 
</div>
  </section>
  )
}

export default EmployeeProfile