"use client"
import React, { useState } from 'react';
import axios from 'axios';
import  { useRouter } from 'next/navigation';
import { useCheckUserRole } from '@/hooks/useCheckUserRole';
// import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter()
  const {isAdmin , loading} = useCheckUserRole()

  // const check = async () => { 
  //   const response = await axios.get('http://localhost:3000/users/me', {
  //     headers: {
  //       'Authorization':  localStorage.getItem('token')
  //     }
  //   });

  //   if (response.status === 200) {
  //     const user = response.data;
  //     if (user.role === 'admin') {
  //       router.push('/admin/Dashboard/Analytics');
  //     }
  //   }
  // }

  // React.useEffect(  () => {
  //   if(localStorage.getItem('token')){
  //     check()
  //   }
  // }, []);
  if (!loading) {
    if(isAdmin){
          router.push('/admin/Dashboard/Analytics');
        }
        }

  const handleLogin = async (e:any) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post('http://localhost:3000/user/login', loginData);

      if (response.status === 200) {
        if(response.data.token){
            localStorage.setItem('token' ,"Bearer "+response.data.token)
        }
        // Successful login logic
        console.log('Login successful!', response.data);
        // console.log(localStorage.getItem('token'))
        router.push("/admin/Dashboard/Analytics")
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className='w-full h-screen flex justify-center items-center  '>
    <div className="flex h-[70vh]  w-[40vw]  p-[20px] rounded-lg border-2 border-cyan-700 flex-col justify-center items-center shadow-lg ">
      <h2 className=' mb-2'>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin} className='flex flex-col'>
        <label className=' block mb-[5px]'>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className=' w-full p-[10px] mb-10 border-2 rounded-lg'
        />
        <label className=' block mb-[5px]'>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className=' w-full p-[10px] mb-10 border-2 rounded-lg'
        />
        <button type="submit" className=" bg-cyan-600 text-white px-5 py-2 cursor-pointer rounded-md hover:bg-cyan-400 self-center">Login</button>
      </form>
    </div>
</div>
  );
}

export default Login;
