"use client"
import React, { useState } from 'react';
import axios from 'axios';
import  { useRouter } from 'next/navigation';
import { join } from 'path';



// const check = async () => { 
//   const response = await axios.get('http://localhost:3000/users/me', {
//     headers: {
//       'Authorization':  localStorage.getItem('token')
//     }
//   });

//   if (response.status === 200) {
//     const user = response.data;
//     if (user.role === 'admin') {
//       router.push('/admin/Dashboard/Users');
//     }
//   }
// }

// React.useEffect(  () => {
//   check()
// }, []);




function AdminProf() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    const [error, setError] = useState('');
    const router = useRouter()

    const handleLogin = async (e:any) => {
        e.preventDefault();
      
        if(cpassword != password){
            setError('Password doesnt match'); 
            return
        }
      
        const loginData = {
        };
        if (email) {
            loginData.email = email
        }
        if (password) {
            loginData.password = password
        }
        console.log(loginData)
        try {
          const response = await axios.patch('http://localhost:3000/user/update', loginData , {
            
                headers: {
                  'Authorization':  localStorage.getItem('token')
                }
              
          });
      
          if (response.status === 200) {
            if(response.data.token){
                localStorage.setItem('token' ,"Bearer "+response.data.token)
            }
            // Successful login logic
            console.log('Login successful!', response.data);
            // console.log(localStorage.getItem('token'))
            router.push("/admin/Dashboard/Users")
          } else {
            setError('Invalid email or password');
          }
        } catch (error) {
          setError('An error occurred. Please try again.');
        }
      };

  return (
     
    <div className='w-full h-screen flex justify-center items-center  '>
    <div className="flex h-[70vh]  w-[40vw]   rounded-lg border-2 border-cyan-700 flex-col justify-center items-center shadow-lg ">
      <h2 className=' mb-2'>CP</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin} className='flex flex-col'>
      <div className=' flex flex-row items-center gap-3 mb-10 justify-between'>
        <label className='  '>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='   p-[10px]   border-2 rounded-lg'
        />
        </div>
        <div className=' flex flex-row items-center gap-3 mb-10 justify-between'>
            <label className='  '>Password:</label>
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='  p-[10px]  border-2 rounded-lg'
            />
        </div>
        <div className=' flex flex-row items-center gap-3 mb-10 justify-between'>
            <label className='  '>CPassword:</label>
            <input
            type="password"
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
            required
            className='  p-[10px]  border-2 rounded-lg'
            />
        </div>
        <button type="submit" className=" bg-cyan-600 text-white px-5 py-2 cursor-pointer rounded-md hover:bg-cyan-400 self-center">Login</button>
      </form>
    </div>
</div>
   
  )
}

export default AdminProf