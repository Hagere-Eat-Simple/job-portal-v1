"use client"
import React from "react";
import axios from "axios";
export const useUserRole = () => {
    const [isUserAuth, setIsAuth] = React.useState("");
    const [loading, setLoading] = React.useState(true);
  
    const check = async () => { 
        const response = await axios.get('http://localhost:3000/users/me', {
          headers: {
            'Authorization':  localStorage.getItem('token')
          }
        });
    
        if (response.status === 200) {
          const user = response.data;
          if (user.role === 'user') {
            setIsAuth("user")
          }else {
            setIsAuth("company")
          }
        }
        setLoading(false) 
      }
  
    React.useEffect(  () => {
        if(localStorage.getItem('token')){
          check()
        }else{
          setLoading(false)
        }
      }, []);
     
    return {
      isUserAuth,
      loading
    };
  };