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
import { Delete, Edit } from '@mui/icons-material';
import axios from 'axios';
import { MaterialReactTable } from 'material-react-table';

export default function StickyHeadTable(props:any) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const data = props.user
  console.log(data)
 

//   const columns = [
//       {
//         accessorKey: "name", //simple recommended way to define a column
//         header: 'Name',
//         muiTableHeadCellProps: { sx: { color: 'green' } }, //custom props
//       },
//       {
//         id: 'age', //id required if you use accessorFn instead of accessorKey
//         header: 'Age',
//         Header: <i style={{ color: 'red' }}>Age</i>, //optional custom markup
//       },
//     ]
const handleDeleteRow = React.useCallback(
    (row: any) => {
      if (
        !confirm(`Are you sure you want to delete ${row.getValue('name')}`)
      ) {
        console.log('not')
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      props.handleDelete(row.getValue('_id'))
    },
    [],
  );
const handleActivation = React.useCallback(
    (row: any) => {
      if (
        !confirm(`Are you sure you want to give auth to ${row.getValue('name')}`)
      ) {
        console.log('not')
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      props.handleActivation(row.getValue('_id'))
    },
    [],
  );
const handleBan = React.useCallback(
    (row: any) => {
      if (
        !confirm(`Are you sure you want to ban  ${row.getValue('name')}`)
      ) {
        console.log('not')
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      props.handleBan(row.getValue('_id'))
    },
    [],
  );



const [gender, setGender] = React.useState('');
   
    const renderRowActions = ({ row, table }:any) => {
      let thirdActionButton = (<></>)
      console.log(row)
      const bancolor = row.getValue('isactive') === 'banned' ? 'success' : 'primary';
      try{
      if(row.getValue('isactive')==="pending"){
        thirdActionButton = (
        <Tooltip arrow placement="right" title="Report">
          <IconButton color="success" onClick={() => handleActivation(row)}>
            <CheckCircleIcon />
          </IconButton>
        </Tooltip>
      );}}catch(e){

      }
  
  
      return (
        <Box sx={{ display: 'flex', gap: '.1rem' , marginLeft:"-15px"}}>
          <Tooltip arrow placement="left" title="Ban">
            <IconButton  color={bancolor}  onClick={() => handleBan(row)}>
              <BlockIcon />
            </IconButton>  
          </Tooltip>
          <Tooltip arrow placement="right" title="Delete">
            <IconButton color={'error'} onClick={() => handleDeleteRow(row)}>
              <Delete />
            </IconButton>  
          </Tooltip>
          {thirdActionButton}
        </Box>
      );
    };
  

  return (
    <MaterialReactTable
      columns={props.columns}
      data={data}
      enableRowSelection //enable some features
      // displaySelectAll = {false}
      enableColumnOrdering
      enableGlobalFilter={true}  
      enableEditing={true}
      renderRowActions={renderRowActions}
      
      
    />);
}
