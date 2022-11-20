import React from 'react'
import { useNavigate } from 'react-router-dom';
import SubCardGrid from '../../containers/SubCardGrid';
import { Typography, Box, Button, ButtonGroup, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
import index_banner from '../../img/index/index_banner.jpg';
const useStyle = makeStyles({
  banner: {
    background: `url(${index_banner}) 10%`,
    backgroundSize: 'cover'
  }
});



export default function Index() {
  const classes = useStyle();
  const navigate = useNavigate();
  const loginButtonGroup = () => {
    return (
      <ButtonGroup size='large' sx={{ outlineWidth: '12px' }}>
        <Button variant="bold" onClick={() => navigate('/login')} sx={{
          fontSize: 24
        }}><Typography>Log In</Typography></Button>
        <Button variant="bold" onClick={() => navigate('/signup')}><Typography>Sign Up</Typography></Button>
      </ButtonGroup>
    )
  }

  const welcomeSign = () => {
    return (
      <Typography sx={{
        paddingTop: '10px',
        fontSize: { xs: '30px', md: '50px', lg: '75px' },
        fontWeight: 'bold',
        color: 'white'
      }}>
        Welcome Back,
      </Typography>
    )
  }
  return (
    <div>
      <Box className={classes.banner} sx={{
        height: { xs: 350, md: 400, lg: 500 },
      }}>

        <Typography sx={{
          paddingTop: '100px',
          fontSize: { xs: '50px', md: '100px', lg: '120px' },
          fontWeight: 'bold',
          color: 'white'
        }}>
          Start Here
        </Typography>






      </Box>

      <Box sx={{
        paddingTop: '100px'
      }}>
        <Grid container spacing={7}>
          <SubCardGrid />
          <SubCardGrid />
          <SubCardGrid />
          <SubCardGrid />
        </Grid>
      </Box>

    </div>
  )
}
