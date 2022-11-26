import React ,{useState,useEffect}from 'react'
import { useNavigate } from 'react-router-dom';
import SubCardGrid from '../../containers/SubCardGrid';
import { Typography, Box, Button, ButtonGroup, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
import index_banner from '../../img/index/index_banner.jpg';
import axios from 'axios';
import apiConfig from '../../apiConfig.mjs';
const useStyle = makeStyles({
  banner: {
    background: `url(${index_banner}) 10%`,
    backgroundSize: 'cover'
  }
});



export default function Index() {
  const baseURL = apiConfig.base;
  const [subjects, setsubjects] = useState([]);
  const classes = useStyle();
  const navigate = useNavigate();
  const userObj = JSON.parse(localStorage.getItem("userObj"))?
  JSON.parse(localStorage.getItem("userObj")):{};
  
  const LoginButtonGroup = () => {
    return (
      <ButtonGroup size='large' sx={{ outlineWidth: '12px' }}>
        <Button variant="bold" onClick={() => navigate('/login')} sx={{
          fontSize: 24
        }}><Typography>Log In</Typography></Button>
        <Button variant="bold" onClick={() => navigate('/signup')}><Typography>Sign Up</Typography></Button>
      </ButtonGroup>
    )
  }

  const WelcomeSign = () => {
    return (
      <Typography sx={{
        paddingTop: '10px',
        fontSize: { xs: '30px', md: '50px', lg: '75px' },
        fontWeight: 'bold',
        color: 'white'
      }}>
        Welcome Back, {userObj.name}!
      </Typography>
    )
  }

  const getSixSubjects = ()=>{
    axios({
      method:"GET",
      url:`${baseURL}/api/subject/getSubjects/6`
    }).then(res=>{
      setsubjects(res.data.subjects);
    })
  }
  useEffect(() => {
    getSixSubjects();
  }, [])
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

        {
          userObj.name? <WelcomeSign/>: <LoginButtonGroup/>
        }
      </Box>

      <Box sx={{
        paddingTop: '100px'
      }}>
        <Typography sx={{
        paddingTop: '10px',
        fontSize: { xs: '15px', md: '25px', lg: '32px' },
        fontWeight: 'bold',
        color: 'black',
        float:'left'
      }}>
          Guess You Like...
        </Typography>
        <Grid container spacing={7}>
          {subjects.map(ele=>{
            return <SubCardGrid {...ele} key = {ele.id}/>
          })}
        </Grid>
      </Box>

    </div>
  )
}
