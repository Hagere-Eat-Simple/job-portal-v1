"use client"
import React from 'react'
import Table from "@/components/Table/Table"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCheckUserRole } from '@/hooks/useCheckUserRole';

interface Column {
  accessorKey: '_id'|'name' | 'email' | 'role' | 'isactive';
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
  accessorKey: 'role',
  header: 'role',
},
{
  accessorKey: 'isactive',
  header: 'Stat',
},
];

function Company() {
    const [user , setUser] = React.useState([])

    const [error, setError] = React.useState('');
    const [ref , setRef]  = React.useState(false)
    const router = useRouter()
    const {isAdmin , loading} = useCheckUserRole()
    if (!loading) {
        if(!isAdmin){
              router.push('/admin');
            }
          }
    
    
  const handleDelete = async (id:any)=>{
        try {
          const response = await axios.delete(`http://localhost:3000/user/${id}` , {
            
                headers: {
                  'Authorization':  localStorage.getItem('token')
                }
              
          });
      
          if (response.status === 200) {
            // Successful login logic
            console.log('deleted', response.data);
            // console.log(localStorage.getItem('token'))
            setRef(prev=>!prev)
            
          } else {
            setError('Invalid email or password');
          }
        } catch (error) {
          setError('An error occurred. Please try again.');
        } 
    }
  const handleActivation = async (id:any)=>{
      try {
        const response = await axios.patch(`http://localhost:3000/user/active/${id}`,{}, {
              headers: {
                'Authorization':  localStorage.getItem('token')
              }
            
        });
    
        if (response.status === 200) {
          console.log('activated', response.data);
          setRef(prev=>!prev)
        } else {
          setError('error');
        }
      } catch (error) {
        setError('An error occurred. Please try again.');
      } 
  }
  const handleBan = async (id:any)=>{
      axios.patch(`http://localhost:3000/user/ban/${id}`,{}, {
            headers: {
              'Authorization':  localStorage.getItem('token')
            }
          
      }).then( (response) => {
        setRef(prev=>!prev)
      })
      .catch( (error)=>{
        console.log(error);
      });;
  
      
}


    React.useEffect(() => {
         
        axios.get('http://localhost:3000/company' , {
          headers: {
            'Authorization':  localStorage.getItem('token')
          }
        })
        .then( (response) => {
          setUser(response.data.company);
          console.log("com" , response.data)
        })
        .catch( (error)=>{
          console.log(error);
        });
     
    }, [ref])
    return (
      <Table user = {user} columns = {columns} handleDelete = {handleDelete} handleActivation={handleActivation} handleBan={handleBan}/>
    )
  }


export default Company
 




 