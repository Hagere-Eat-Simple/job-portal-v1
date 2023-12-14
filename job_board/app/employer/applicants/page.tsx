"use client"
import React from 'react'
import Table from "@/components/Table/applicants"
import axios from 'axios';
import  { useRouter } from 'next/navigation';
import { useCheckUserRole } from '@/hooks/useCheckUserRole';




interface Column {
  accessorKey: '_id'|'name' | 'email' | 'exp' | 'gender'  ;
header: string;
field?: String ;
minWidth?: number;
align?: 'right';
format?: (value: number) => string;
}

const columns: Column[] = [
{accessorKey:'_id' ,  header:"ID"},
{ accessorKey: 'name', header: 'Name'  },
{ accessorKey: 'email', header: 'Email'  },
{
  accessorKey: 'exp',
  header: 'exp',

},
{
  accessorKey: 'gender',
  header: 'gender',
  
},
];

function Users() {
  const [user , setUser] = React.useState([])
  const [error, setError] = React.useState('');
  const [ref , setRef]  = React.useState(false)
  const router = useRouter()
//   const {isAdmin , loading} = useCheckUserRole()
//   if (!loading) {
//     if(!isAdmin){
//           router.push('/admin');
//         }
//       }
  
  
  
  React.useEffect(() => {
    try {
          axios.post('http://localhost:3000/applicants', {applicants : ["64ee3c8d610cd7d37f382e11"]} , {
              headers: {
                'Authorization':  localStorage.getItem('token')
              }
          }).then(res =>{
              if (res.status === 200) {
            // Successful login logic
            // console.log('success', res.data);
            setUser(res.data)
            // console.log(localStorage.getItem('token'))
          } else {
            console.log('something went wrong try again');
          }
          }).catch(e=>{
              console.log(error)
          });
        } catch (error) {
          
          console.log('An error occurred. Please try again.');
        }
  }, [])
  return (
    <Table user = {user} columns = {columns} />
  )
}

export default Users