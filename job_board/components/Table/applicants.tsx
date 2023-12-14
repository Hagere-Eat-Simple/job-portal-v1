"use client"
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import BlockIcon from '@mui/icons-material/Block';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    MenuItem,
    Stack,
    TextField,
    Tooltip,
  } from '@mui/material';
import { Check, Delete, Edit, FileOpen } from '@mui/icons-material';
import axios from 'axios';
import { MaterialReactTable } from 'material-react-table';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function StickyHeadTable(props:any) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const router = useRouter();
  const handleAccept = React.useCallback( 
    async (row: any) => { 
 
      try { 
        const response = await axios.post('http://localhost:3000/sendemail', {email:row.getValue('email')} ); 
        if (response.status === 200) { 
          // Successful login logic 
          alert('email sent'); 
        } else { 
          console.log('Invalid email or password'); 
        } 
      } catch (error) { 
        console.log('An error occurred. Please try again.'); 
      } 
      //  req.${row.getValue('_id')}  
    }, 
    [], 
  ); 
const handleDelete = React.useCallback(
    (row: any) => {
      router.push(`/employer/employee/${row.getValue('_id')}` ,{ })
    },
    [],
  );



const [gender, setGender] = React.useState('');
   
    const renderRowActions = ({ row, table }:any) => {
      return (
        <Box sx={{ display: 'flex', gap: '.1rem' , marginLeft:"1"}}>
          <Tooltip arrow placement="left" title="Accept">
            <IconButton onClick={() => handleAccept(row)}>
              <Check />
            </IconButton>  
          </Tooltip>
          <Tooltip arrow placement="left" title="rej">
            <IconButton onClick={() => handleDelete(row)}>
              <Delete />
            </IconButton>  
          </Tooltip>
          <Tooltip arrow placement="left" title="Cv">
            <Link href={`http://localhost:3000/users/${row.getValue('_id')}/cv`} target='_blank'>
            <IconButton >
              <FileOpen />
            </IconButton>  
            </Link>
          </Tooltip>
        </Box>
      );
    };
  

  const data = props.user
  return (
    <Box sx={{paddingTop:"200px" , paddingX:"3vw"}}>
    <MaterialReactTable
      columns={props.columns}
      data={data}     
      enableEditing={true}
      renderRowActions={renderRowActions}
    />
    </Box>
    );

}