"use client"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container gap={3} spacing={1}>
        <Grid    >
          <Paper className='w-[30.3vw]'>xs=8</Paper>
        </Grid>
        <Grid    >
          <Paper className='w-[30.3vw]'>xs=8</Paper>
        </Grid>
        <Grid    >
          <Paper  className='w-[30.3vw]'>xs=8</Paper>
        </Grid> 
      <Grid />
        <Grid item xs={12}>
        <Paper >xs=8</Paper>
        </Grid>
      </Grid>
    </Box>
  );
}