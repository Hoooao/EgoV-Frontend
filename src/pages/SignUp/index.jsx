// reference: https://levelup.gitconnected.com/create-a-signup-page-with-react-and-material-ui-9b203d18cf3f
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, TextField, Box, Paper, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';

import apiConfig from '../../apiConfig.mjs';
import p1 from '../../img/signin/p1.jpg'
import p2 from '../../img/signin/p2.jpg'
import p3 from '../../img/signin/p3.jpg'
import p4 from '../../img/signin/p4.jpg'
import p5 from '../../img/signin/p5.jpg'
import p6 from '../../img/signin/p6.jpg'

const baseURL = apiConfig.base;

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

const Form = () => {
  const navigate = useNavigate();
  const handleClose = () => { navigate('/') };
  const [picNum, setPicNum] = useState(Math.floor(Math.random() * 5));

  const pics = [p1, p2, p3, p4, p5, p6];
  const classes = useStyles();
  // create state variables for each input
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (password === repassword) {
      axios({
        method: "POST",
        url: `${baseURL}/api/user/signup`,
        data: {
          username: userName,
          email,
          password,
        }
      }).then(res => {
        if (res.data.ok) handleClose();
        else console.log(res.data.message)
      })
    } else {
      console.log("Password missmatch")
    }
  };
  return (
    <Box sx={{
      background: `url(${pics[picNum]}) 100%`,
      height: '600px'
    }}>
      <form className={classes.root} onSubmit={handleSubmit}>
        <Paper sx={{
          background: 'rgba(255,255,255,0.5)',
          marginTop: '50px'
        }}>
          <Box >
            <Grid container >
              <Grid item xs={12} sx={{
                paddingTop: '20px'
              }}>
                <TextField
                  label="Username"
                  variant="filled"
                  required
                  value={userName}
                  onChange={e => setUserName(e.target.value)}
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.7)',
                  }}
                />
              </Grid>

              <Grid item xs={12} sx={{
                paddingTop: '20px'
              }}>
                <TextField
                  label="E-mail"
                  variant="filled"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.7)'
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{
                paddingTop: '20px'
              }}>
                <TextField
                  label="Password"
                  type="password"
                  variant="filled"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.7)'
                  }}
                />
              </Grid>

              <Grid item xs={12} sx={{
                paddingTop: '20px'
              }}>
                <TextField
                  label="Enter your password again"
                  type="Repassword"
                  variant="filled"
                  required
                  value={repassword}
                  onChange={e => setRepassword(e.target.value)}
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