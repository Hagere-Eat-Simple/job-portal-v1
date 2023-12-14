"use client"
import BasicCard from '@/components/analytics/card'
import { Box, Card, Grid } from '@mui/material'
import JobsTable from "@/components/Table/JobsTabe"

import React from 'react'
import LineChart from '@/components/analytics/Line';
import { useRouter } from 'next/navigation';
import { useCheckUserRole } from '@/hooks/useCheckUserRole';
interface Column {
  accessorKey: '_id'|'job_title' | 'company';
header: string;
field?: String ;
minWidth?: number;
align?: 'right';
format?: (value: number) => string;
}

const columns: Column[] = [
{accessorKey:'_id' ,  header:"ID"},
{ accessorKey: 'job_title', header: 'JOB'  },
{ accessorKey: 'company', header: 'Company'  },
];


function Analytics() {
  const router = useRouter()
  const {isAdmin , loading} = useCheckUserRole()
  console.log(isAdmin , loading)
  if (!loading) {
    console.log("over here")
      if(!isAdmin){
            console.log("over here")
            router.push('/admin');
          }
        }
  const arr = [{
    icn : "email",
    text : "Emails sent",
    value: 0 ,
    percent:'10%',
    chart : true
  } , {
    icn :  "email",
    text : "Emails sent",
    value: 0 ,
    percent:'10%',
    chart : true
  }, {
    icn : "email",
    text : "Emails sent",
    value: 0 ,
    percent:'10%',
    chart : true
  }, {
    icn : "email",
    text : "Emails sent",
    value: 0 ,
    percent:'10%',
    chart : true
  }]
  const arr2  = [{
    icn : "email",
    text : "Emails sent",
    value: 0 ,
    percent:'10%',
    chart : "bar"
  }]
 


  return (<>
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap:4
    }}
  >
    <div className=" m-x-auto text-red-500 bg-red-200 text-center w-full">Analytics </div>


    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, md: 8, lg: 12 }}>
      {arr.map((data, index) => (
        <Grid item xs={2} sm={3} md={3} key={index}>
            <BasicCard data={data}/>
        </Grid>
  ))}
</Grid> 
 
<Grid container spacing={{ xs: 1, md: 0 }} columns={{ xs: 4, md: 4, lg: 12}}>
      {arr2.map((data, index) => (
        <Grid item xs={2} sm={3} md={6} key={index}>
            <BasicCard data={data}/>
        </Grid>
  ))}
<Grid item xs={2} sm={3} md={6}> 
<JobsTable data = {[{job_title : " news" , company : "dan"}]} columns = {columns}/>
</Grid>
</Grid>
<LineChart />



</Box></> 
    
  )
}

export default Analytics