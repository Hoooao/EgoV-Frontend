import React from 'react'
import { Typography, Box, Card, Paper, Button, ButtonGroup } from '@mui/material'
import { makeStyles } from '@mui/styles';
import index_banner from '../../img/index_banner.jpg';
import SubCard from '../../containers/SubCard';
const useStyle = makeStyles({
  banner: {
    height: 400,

    background: `url(${index_banner}) 10%`,
    backgroundSize: 'cover'
  }
});



export default function Index() {
  const classes = useStyle();
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
          //按钮的颜色！！！！！
          <Button variant="outlined" ><Typography>Log In</Typography></Button>
          <Button variant="outlined"><Typography>Sign Up</Typography></Button>
        </ButtonGroup>
      </Box>

      <Box>
        <SubCard/>
        <SubCard/>
        <SubCard/>
      </Box>

    </div>
  )
}
