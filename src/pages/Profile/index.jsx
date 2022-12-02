import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Box, TextField, Typography, Grid, Button, Container } from '@mui/material'
import axios from 'axios';
import apiConfig from '../../apiConfig.mjs';
import UserLeftBar from '../../containers/UserLeftBar';


export default function Profile(props) {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [avatar, setavatar] = useState('');
  const [id, setid] = useState('');
  const [description, setdescription] = useState('');
  const [userObj, setUserObj] = useState({})
  const baseURL = apiConfig.base;
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "GET",
      url: `${baseURL}/api/user/profile`
    }).then(res => {
      const user = res.data.userObj || JSON.parse(localStorage.getItem('userObj'));
      setUserObj(user)
      if (userObj.id) {
        setavatar(userObj.avatar);
        setdescription(userObj.description);
        setemail(userObj.email);
        setname(userObj.name);
        setid(userObj.id)
      }
      else {
        navigate('/');
      }
    })
  }, [])

  const handleChangeInfo = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `${baseURL}/api/user/update_profile`,
      data: {
        name,
        description,
        avatar,
        email,
        id
      }
    }).then(res => {
      navigate("/profile")
    })
  }

  const handleLogout = () => {
    axios({
      method: "GET",
      url: `${baseURL}/api/user/logout`,
    }).then(res => {
      navigate('/');
      localStorage.removeItem("userObj")
    })
  }

  return (
    <Container fixed maxWidth='lg'>
      <Box>
        <UserLeftBar {...userObj}/>
        <Typography>
          You Can Change Your Profile Here
        </Typography>

        <form action="" onSubmit={handleChangeInfo}>
          <Grid container spacing={3}>

            <Grid item xs={12}>
              <TextField
                id="filled-multiline-flexible"
                label="Username"
                multiline
                maxRows={4}
                value={name}
                variant="filled"
                onChange={(e) => { setname(e.target.value) }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="filled-multiline-flexible"
                label="E-mail"
                multiline
                maxRows={4}
                value={email}
                variant="filled"
                onChange={(e) => { setemail(e.target.value) }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="filled-multiline-flexible"
                label="Avatar"
                multiline
                maxRows={4}
                value={"Please put the url here"}
                variant="filled"
                onChange={(e) => { setavatar(e.target.value) }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                value={description}
                sx={{
                  width: "30%"
                }}
                onChange={(e) => { setdescription(e.target.value) }}
              />
            </Grid>
          </Grid>
          <Button variant="outlined" size="large" sx={{ marginTop: "30px" }} type="submit">Submit</Button>
        </form>
        <Button variant="outlined" size="large" sx={{ marginTop: "30px" }} onClick={handleLogout}>Logout</Button>
      </Box>
    </Container>
  )
}
