import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {
  Typography, Card, Box, Container, Grid,
  CardMedia, CardContent, Button, CardActions, Rating
} from '@mui/material'
import axios from 'axios';
import Masonry from 'react-masonry-css'
import apiConfig from '../../apiConfig.mjs'


function CourseCard(props) {
  const { id, title, uni, time, preqs, difficulties, language, img_url } = props;
  const navigate = useNavigate();

  const courseInfoBold = {
    fontWeight: 'bold',
    marginBottom: '10px',
    float: 'left',
    clear: 'left'
  }
  const courseInfoThin = { float: 'left', marginLeft: '7px' };

  return (
    <Grid item xs={12} md={6} lg={4} sx={{
      paddingTop: '20px'
    }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={img_url}
        />
        <CardContent>
          <Button variant='text' size='large' sx={{
          }} onClick={() => { navigate(`/course/${id}`) }}>
            <Typography gutterBottom variant="h8" component="div" sx={courseInfoBold}>
              {`${uni} - ${title}`}
            </Typography>
          </Button>
          <Typography align='left' sx={courseInfoBold}>
            Difficulty:
          </Typography >
          <Rating name="read-only" value={difficulties} readOnly precision={0.5} max={6} sx={{
            float: 'left'
          }} />

          <Typography align='left' sx={courseInfoBold}>
            Prerequisites:
          </Typography >
          <Typography sx={courseInfoThin}>{preqs}</Typography>

          <Typography align='left' sx={courseInfoBold}>
            Languages:
          </Typography >
          <Typography sx={courseInfoThin}>{language}</Typography>

          <Typography align='left' sx={courseInfoBold}>
            Course Hour:
          </Typography >
          <Typography sx={courseInfoThin}>{time}</Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [subject, setSubject] = useState({});
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [loadingSubject, setLoadingSubject] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  const baseURL = apiConfig.base;
  const breakpoints = {
    default: 3,
    1100: 2,
    500: 1,
  }
  useEffect(() => {
    axios({
      method: 'GET',
      url: `${baseURL}/api/course/getCoursesWithSubject`,
      params: { subject_num: id }
    }).then(res => {
      setCourses(res.data.courses);
      setLoadingCourses(false);
      // error handler
    });

    axios({
      method: 'GET',
      url: `${baseURL}/api/subject/getSubjectWithID`,
      params: { id }
    }).then(res => {
      if (res.data.ok) {
        setSubject(res.data.subject);
        setLoadingSubject(false);
      }
      else console.log(res.data.message)
      // error handler
    })
  }, [])


  const Banner = () => {
    return (
      <Container fixed maxWidth='xl'>
        <Card height="140">
          <Box sx={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: { sm: 'row', xs: 'column' }
          }}>
            <Card sx={{
              width: '70%',
              height: '400px',
              backgroundImage: `url(${subject.image_url})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundColor: 'black',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '20px'

            }} />
            <Box sx={{
              position: 'relative',
              width: '100%'
            }}>
              <Box sx={{
                marginLeft: '20px',
                display: 'flex wrap column',
                width: '100%',
                height: '250px'
              }}>

                <Box>
                  <Typography variant='h6' align='left' sx={{
                    fontWeight: 'bold',
                    marginBottom: '0px',
                    fontSize: { lg: '20px', md: '15px'}
                  }}>
                    {subject.name}
                  </Typography>

                  <hr />
                </Box>
              </Box>
              <Box sx={{
                marginLeft: '20px', height: '100%', marginBottom: '10px',
                padding: '5px', position: 'absolute', top: '50px'
              }}>
                <Typography align='left' sx={{
                  maxHeight: '55%',
                  overflow: 'scroll',
                  fontSize: { lg: '20px', sm: '15px', xs: '10px' }
                }}>
                  {subject.description}
                </Typography>
              </Box>
            </Box>

          </Box>
        </Card>
      </Container>
    )
  }

  if(loadingCourses || loadingSubject){
    return (
      <div>Loading...</div>
    )
  }
  return (
    <Box>
      <Banner />

      <Container maxWidth='lg' sx={{ marginTop: '30px' }}>
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {courses.map(ele => {
            return (
              <CourseCard {...ele} key={ele.id} />
            )
          })}
        </Masonry>
      </Container>
    </Box>
  )
}
