import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DoughnutChart from './chart';
import EmailIcon from '@mui/icons-material/Email';
import Barchart from './Bar';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
 


export default function BasicCard({data}:any) {
  console.log(data.text)
  let icn;
  if(data.icn === "email"){
    icn = <EmailIcon />
  } 
  const width = data.chart !== "bar" ? 400 : 800 
  const height = data.chart !== "bar" ? 200 : 350 
  return (
    <Card sx={{ maxWidth: width  , height : height, border:'solid red 1px' , padding : '4px'}}>
      <CardContent sx={{display:'flex' , justifyContent:"space-between"}}>
      {data.chart !== "bar" ? <Box>
        {icn}
        <Typography sx={{ fontSize: 25 , paddingTop : 2}} color="text.secondary" gutterBottom>
         {data.value}
        </Typography>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
         {data.text}
        </Typography>
        </Box> : ""}
        <Box sx={{display:'flex' , justifyContent:'center' , flexDirection:'column' ,alignItems:'center' }}>
        {data.chart !== "bar" ? <DoughnutChart /> : <Barchart /> }
        <Typography sx={{ fontSize: 14 , paddingTop : 1}} color="text.secondary" gutterBottom>
         {data.percent}
        </Typography>
        </Box>
      </CardContent>
    </Card>
  )}