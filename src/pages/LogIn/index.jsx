import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import p1 from '../../img/signin/p1.jpg'
import p2 from '../../img/signin/p2.jpg'
import p3 from '../../img/signin/p3.jpg'
import p4 from '../../img/signin/p4.jpg'
import p5 from '../../img/signin/p5.jpg'
import p6 from '../../img/signin/p6.jpg'
import apiConfig from '../../apiConfig.mjs';
import {useDispatch} from 'react-redux';
import {setUser} from '../../redux/userSlice.mjs';
import Axios  from 'axios';
Axios.defaults.withCredentials=true
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://google.com/">
        Ego Varsity
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


export default function LogIn() {
  const navigate = useNavigate();
  const [usernameMail, setUsernameMail] = useState('');
  const [password, setPassword] = useState('');
  const [picNum, setPicNum] = useState(Math.floor(Math.random() * 5));
  const dispatch = useDispatch();


  const pics = [p1, p2, p3, p4, p5, p6];

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `${apiConfig.base}/api/user/login`,
      data: {
        username_mail: usernameMail,
        password
      },
      withCredentials:true
    }).then(res=>{
      if(res.data.ok){
       if(localStorage.getItem("userObj")) localStorage.removeItem("userObj");
       localStorage.setItem("userObj",JSON.stringify(res.data.userObj));
       console.log(localStorage.getItem('userObj'));
        dispatch(setUser(res.data.userObj));
        navigate("/test");
      }else {
        console.log(res.data.message)
      }
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${pics[picNum]})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Enter you email or username"
                name="email"
                autoComplete="email"
                value={usernameMail}
                autoFocus
                onChange={e => setUsernameMail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}