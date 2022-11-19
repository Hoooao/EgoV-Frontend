import React from 'react'
import { useNavigate } from 'react-router-dom';  
import SubCardGrid from '../../containers/SubCardGrid';
import { Typography, Box, Button, ButtonGroup, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
import index_banner from '../../img/index/index_banner.jpg';
const useStyle = makeStyles({
  banner: {
    height: 400,
    background: `url(${index_banner}) 10%`,
    backgroundSize: 'cover'
  }
});



export default function Index() {
  const classes = useStyle();
  const navigate = useNavigate();
  const subjects = ['Machine Learning', 'Operating Systems', 'Computer Vision', 'Computer Networking',
    'Database Management System', 'Distributed Systems'];
  return (
    <div>
      <Box className={classes.banner}>

        <Typography sx={{
          paddingTop: '100px',
          fontSize: { xs: '50px', md: '100px', lg: '150px' },
          fontWeight: 'bold',
          color: 'white'
        }}>
          Start Here
        </Typography>


        <ButtonGroup size='large' sx={{ outlineWidth: '12px' }}>
          <Button variant="bold" onClick ={()=> navigate('/login')} sx={{
            fontSize:24
          }}><Typography>Log In</Typography></Button>
          <Button variant="bold" onClick = {()=> navigate('/signup')}><Typography>Sign Up</Typography></Button>
        </ButtonGroup>
      </Box>

      <Box sx={{
        paddingTop:'100px'
      }}>
        <Grid container spacing={7}>
        <SubCardGrid/>
        <SubCardGrid/>
        <SubCardGrid/>
        <SubCardGrid/>
        </Grid>
      </Box>

    </div>
  )
}
