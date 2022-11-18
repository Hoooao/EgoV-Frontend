// reference: https://levelup.gitconnected.com/create-a-signup-page-with-react-and-material-ui-9b203d18cf3f
import React, { useState } from 'react';

import { Button, TextField, Box, Paper, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import p1 from '../../img/signin/p1.jpg'
import p2 from '../../img/signin/p2.jpg'
import p3 from '../../img/signin/p3.jpg'
import p4 from '../../img/signin/p4.jpg'
import p5 from '../../img/signin/p5.jpg'
import p6 from '../../img/signin/p6.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose }) => {
  const pics = [p1, p2, p3, p4, p5, p6];
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    handleClose();
  };

  return (
    <Box sx={{
      background: `url(${pics[Math.floor(Math.random() * 5)]}) 1000px`,
      height: '600px'
    }}>
      <form className={classes.root} onSubmit={handleSubmit}>
        <Paper sx={{
          background: 'rgba(255,255,255,0.5)',
          marginTop:'50px'
        }}>
          <Box >
            <Grid container >
              <Grid item xs={12} sx={{
      paddingTop:'20px'}}>
              <TextField
                label="First Name"
                variant="filled"
                required
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.7)',
                }}
              />
              </Grid>

              <Grid item xs={12} sx={{
      paddingTop:'20px'}}>
              <TextField
                label="Last Name"
                variant="filled"
                required
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.7)'
                }}
              />
              </Grid>

              <Grid item xs={12} sx={{
      paddingTop:'20px'}}>
              <TextField
                label="E-mail"
                variant="filled"
                required
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.7)'
                }}
              />
              </Grid>
              <Grid item xs={12} sx={{
      paddingTop:'20px'}}>
              <TextField
                label="Password"
                type="password"
                variant="filled"
                required
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.7)'
                }}
              />
              </Grid>
            </Grid>
            <div>
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" variant="outlined" color="secondary">
                Signup
              </Button>
            </div>
          </Box>
        </Paper>
      </form>
    </Box>
  );
};

export default Form;