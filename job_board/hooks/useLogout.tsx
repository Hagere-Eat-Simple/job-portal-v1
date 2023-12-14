"use client"
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
export const useLogout = () => {
  const router = useRouter()
    const check = async () => { 
        const response = await axios.post('http://localhost:3000/user/logout',{}, {
          headers: {
            'Authorization':  localStorage.getItem('token')
          }
        });
    
        if (response.status === 200) {
         localStorage.removeItem('token')
         router.push("/home")
        }
      
      }
  
   const logout = () => {
        if(localStorage.getItem('token')){
          check()

        } 
      }
     
    return {
      logout
    };
  };