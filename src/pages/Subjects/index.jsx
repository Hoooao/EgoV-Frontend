import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Container, Card, Rating, Button } from '@mui/material';
import Carousel from "nuka-carousel";
import Masonry from 'react-masonry-css'
import axios from 'axios';
import SubCardGrid from '../../containers/SubCardGrid'
import apiConfig from '../../apiConfig.mjs';



export default function Subjects() {
    const [subjects, setSubjects] = useState([]);
    const navigate = useNavigate();
    const baseURL = apiConfig.base;

    const MyCarousel = () => {
        const [carouselCourses, setCarouselCourses] = useState([])
        const baseURL = apiConfig.base;
        const courseInfoBold = {
            fontWeight: 'bold',
            marginBottom: '10px',
            float: 'left',
            clear: 'left'
        }
        const courseInfoThin = { float: 'left', marginLeft: '7px' };

        const getCourses = (num) => {
            axios({
                method: 'GET',
                url: `${baseURL}/api/course/getCourses`,
                params: {
                    num: '5'
                }
            }).then(res => {
                setCarouselCourses(res.data.courses);
            })
        }

        const CarouselCard = (props) => {
            const { id, title, instructor_1, instructor_2, instructor_3, description, uni, time, preqs, difficulties, language } = props;

            return (
                <Card height="140">
                    <Box sx={{
                        marginTop: '20px',
                        display: 'flex',
                    }}>
                        <Card sx={{
                            width: '70%',
                            height: '300px',
                            backgroundImage: 'url("https://i.ytimg.com/vi/Z56Jmr9Z34Q/sddefault.jpg")'
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
                                    marginBottom: '7px',
                                    fontSize: { lg: '25px', md: '15px', sm: '15px', xs: '10px' }
                                }}>
                                    {title}
                                </Typography>
                                <hr />
                                <Box sx={{ marginTop: '10px' }}>
                                    <Typography align='left' sx={courseInfoBold}>
                                        Instructor(s):
                                    </Typography >
                                    <Typography sx={courseInfoThin}>{`${instructor_1} ${instructor_2 === '' ? '' : `, ${instructor_2}`} ${instructor_3 === '' ? '' : `, ${instructor_3}`}`}</Typography>

                                    <Typography align='left' sx={courseInfoBold}>
                                        Offered By:
                                    </Typography >
                                    <Typography sx={courseInfoThin}>{uni}</Typography>

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

                                </Box>

                                <Button variant='outlined' size='large' sx={{
                                    position: 'absolute',
                                    bottom: '0px',
                                    left: '20px'
                                }} onClick={() => { navigate(`/course/${id}`) }}>
                                    Start
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ marginTop: '20px' }}>
                        <Typography align='left' sx={{
                            maxHeight: { lg: '120px', sm: '100px', xs: '50px' },
                            overflow: 'scroll',
                            clear: 'both',
                            fontSize: { lg: '30px', sm: '20px', xs: '5px' }
                        }}>
                            {description}
                        </Typography>
                    </Box>
                </Card>
            )
        }

        useEffect(() => {
            getCourses();
        }, [])

        return (
            <Container fixed maxWidth='xl'>
                <Carousel autoplay={true} autoplayInterval={5000} wrapAround={true} adaptiveHeight={true} animation={'zoom'} style={{ height: '500px' }}>
                    {carouselCourses.map(ele => {
                        return <CarouselCard {...ele} key={ele.id} />
                    })}
                </Carousel>
            </Container>
        )
    }
    useEffect(() => {
        axios({
            method: "GET",
            url: `${baseURL}/api/subject/getSubjects`
        }).then(res => {
            setSubjects(res.data.subjects)
        })
    }, [])

    const breakpoints = {
        default: 3,
        1100: 2,
        500: 1,
    }

    return (
        <Box>
            <Box >
                <MyCarousel />
            </Box>
            <Container maxWidth='lg'>
                <Box>
                    <Typography sx={{
                        paddingTop: '50px',
                        fontSize: { xs: '12px', md: '25px', lg: '30px' },
                        fontWeight: 'bold',
                        color: 'black',
                        float: 'left'
                    }}>
                        All Subjects:
                    </Typography>

                    <Box sx={{
                        clear: "both"
                    }}>
                        <Masonry
                            breakpointCols={breakpoints}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column"
                        >
                            {subjects.map(ele => {
                                return (
                                    <SubCardGrid {...ele} key={ele.id} />
                                )
                            })}
                        </Masonry>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}



