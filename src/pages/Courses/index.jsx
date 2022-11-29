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
      if (res.data.ok) setCourses(res.data.courses);
      // error handler
    });

    axios({
      method: 'GET',
      url: `${baseURL}/api/subject/getSubjectWithID`,
      params: { id }
    }).then(res => {
      if (res.data.ok) setSubject(res.data.subject);
      // error handler
    })
  }, [])


  const Banner = () => {
    return (
      <Container fixed maxWidth='xl'>
        <Card height="140">
          <Box sx={{
            marginTop: '20px',
            display: 'flex'
          }}>
            <Card sx={{
              width: '70%',
              height: '400px',
              backgroundImage: ``,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundColor: 'black'
            }} />
            <Box sx={{
              position: 'relative',
              width: '100%'
            }}>
              <Box sx={{
                marginLeft: '20px',
                display: 'flex wrap column',
                width: '100%',
                height: '250px',
              }}>

                <Typography variant='h6' align='left' sx={{
                  fontWeight: 'bold',
                  marginBottom: '0px',
                  fontSize: { lg: '20px', md: '10px', sm: '10px', xs: '5px' }
                }}>
                  {subject.title}
                </Typography>

                <hr />
              </Box>
              <Box sx={{
                marginTop: '20px', clear: 'both', marginLeft: '20px', height: '100%', marginBottom: '10px',
                padding: '5px'
              }}>
                <Typography align='left' sx={{
                  maxHeight: { lg: '120px', sm: '100px', xs: '50px' },
                  overflow: 'scroll',
                  clear: 'both',
                  fontSize: { lg: '15px', sm: '10px', xs: '5px' }
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
