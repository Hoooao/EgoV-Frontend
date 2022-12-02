import React, { useEffect, useState } from 'react'
import { useParams, Routes, Route, useNavigate } from 'react-router-dom';
import { Box, Card, Button, Typography, Rating, Paper, ButtonGroup, Grid, Container, Divider } from '@mui/material'
import axios from 'axios';
import ClassCardButtonGrid from '../../containers/ClassCardButtonGrid';
import apiConfig from '../../apiConfig.mjs';


export default function Course() {
    let { id } = useParams();
    const [course, setCourse] = useState({});
    //const [YTBLectures, setYTBLectures] = useState([])
    //const [lectures, setLectures] = useState([])
    const navigate = useNavigate()
    const baseURL = apiConfig.base;
    useEffect(() => {
        if (isNaN(id)) {
            navigate('/');
            return;
        }
        axios({
            method: 'GET',
            url: `${baseURL}/api/course/getCoursesWithID`,
            params: { id }
        }).then(res => {
            if (res.data.ok) {
                localStorage.setItem("course", JSON.stringify(res.data.course));
                setCourse(res.data.course);
            }
            else console.log(res.data.message);
        })
    }, [])

    useEffect(() => {
        localStorage.setItem("course", JSON.stringify(course));
    }, [course])

    const courseInfoBold = {
        fontWeight: 'bold',
        marginBottom: '10px',
        float: 'left',
        clear: 'left'
    }
    const VideoCourseList = () => {
        const lectures = JSON.parse(localStorage.getItem('course')).info.items;
        return (
            <Box sx={{
                float: 'left',
                width: { lg: '30%', sm: '100%', xs: '100%' },
                marginLeft: { lg: '20px', sm: '0px' },
                height: '450px',

            }}>
                <Paper sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                }}>

                    <ButtonGroup variant='outlined' size='large'
                        sx={{
                            width: '100%',
                            position: 'relative',
                        }}>
                        <Button >YouTube</Button>
                        <Button>Bilibili</Button>
                    </ButtonGroup>

                    <Grid container sx={{
                        marginTop: '20px',
                        width: '100%',
                        float: 'left',
                        overflow: 'scroll',
                    }}>
                        {lectures.map((ele, index) => {
                            return (
                                <ClassCardButtonGrid {...ele.snippet} key={index}
                                    {...{ course_id: course.id, lec_num: index + 1 }} />
                            )
                        })}
                    </Grid>
                </Paper>
            </Box>
        )

    }

    const BannerCourseList = () => {
        const lectures = JSON.parse(localStorage.getItem('course')).info.items;
        return (
            <Box sx={{
                marginTop: '30px'
            }}>
                <Paper sx={{
                    width: '100%',
                    height: '600px',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                }}>

                    <ButtonGroup variant='outlined' size='large'
                        sx={{
                            width: '100%',
                            position: 'relative',
                        }}>
                        <Button >YouTube</Button>
                        <Button>Bilibili</Button>
                    </ButtonGroup>

                    <Grid container sx={{
                        marginTop: '20px',
                        width: '100%',
                        float: 'left',
                        overflow: 'scroll'
                    }}>
                        {
                            lectures.map((ele, index) => {

                                return (
                                    <ClassCardButtonGrid {...ele.snippet} key={index}
                                        {...{ course_id: course.id, lec_num: index + 1 }} />
                                )
                            })}

                    </Grid>
                </Paper>
            </Box>
        )

    }

    const Banner = (props) => {
        const { id, title, instructor_1, instructor_2, instructor_3,
            description, uni, time, preqs, difficulties, language, img_url } = JSON.parse(localStorage.getItem('course'));
        return (
            <Box>
                <Box sx={{
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: { sm: 'row', xs: 'column' }
                }}>
                    <Card sx={{
                        width: '290px',
                        height: '310px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        backgroundImage: `url(${img_url})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        backgroundSize: 'contain',
                        backgroundColor:'black'
                    }} />
                    <Box sx={{
                        position: 'relative',
                        width: '100%',
                    }}>
                        <Box sx={{
                            marginLeft: '20px',
                            display: 'flex wrap column',
                            width: '100%',
                            height: '250px',
                            overflow: 'hidden'
                        }}>
                            <Typography variant='h6' align='left' sx={{
                                fontWeight: 'bold',
                                marginBottom: '7px',
                            }}>
                                {title}
                            </Typography>

                            <Divider sx={{ width: '90%' }} />
                            <Box sx={{ marginTop: '10px' }}>
                                <Typography align='left' sx={courseInfoBold}>
                                    Instructor(s):
                                </Typography >
                                <Typography sx={courseInfoThin}>{`${instructor_1 === '' ? 'Unknown' : `${instructor_1}`} ${instructor_2 === '' ? '' : `, ${instructor_2}`} ${instructor_3 === '' ? '' : `, ${instructor_3}`}`}</Typography>

                                <Typography align='left' sx={courseInfoBold}>
                                    Offered By:
                                </Typography >
                                <Typography sx={courseInfoThin}>{uni}</Typography>

                                <Typography align='left' sx={courseInfoBold}>
                                    Difficulty:
                                </Typography >
                                <Rating name="read-only" value={difficulties} readOnly precision={0.5} sx={{
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

                            </Box>
                        </Box>
                    </Box>

                </Box>
                <Box sx={{ marginTop: '20px' }}>
                    <Typography sx={{ fontWeight: 'bold', float: 'left', clear: 'both', fontSize: '20px' }}>Introduction:</Typography>
                    <Typography align='left' sx={{
                        maxHeight: { lg: '120px', sm: '100px', xs: '50px' },
                        overflow: 'scroll',
                        clear: 'both'
                    }}>
                        {description}
                    </Typography>
                </Box>
                <BannerCourseList {...props} />
            </Box>
        )
    }

    const Video = () => {
        const lectures = JSON.parse(localStorage.getItem('course')).info.items;
        const { id } = useParams();
        if (id > lectures.length) navigate('/')
        console.log(id)
        const videoId = lectures[id - 1].snippet.resourceId.videoId;
        return (
            <div>
                <Box sx={{ backgroundColor: 'black', width: '100%' }}>
                    <Box sx={{
                        float: 'left',
                        marginBottom: '20px',
                        width: { lg: '65%', sm: '100%', xs: '100%' },
                        height: '450px',

                    }}>
                        <iframe width="100%" height="450px" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen" allowFullScreen="allowfullscreen"></iframe>
                    </Box>
                    <VideoCourseList />
                </Box>
            </div>
        )
    }


    const courseInfoThin = { float: 'left', marginLeft: '7px' };
    return (
        <Container maxWidth='lg'>
            <div>

                <Routes>
                    <Route path=':id/' element={<Banner />} />
                    <Route path={`${course.id}/lecture/:id`} element={<Video />} />
                </Routes>


            </div>
        </Container>
    )
}
