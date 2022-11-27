import React, { useState, useEffect } from 'react'
import { Box, Typography, Container } from '@mui/material';
import Carousel from "nuka-carousel";
import Masonry from 'react-masonry-css'
import axios from 'axios';
import SubCardGrid from '../../containers/SubCardGrid'
import apiConfig from '../../apiConfig.mjs';


export default function Subjects() {
    const [subjects, setSubjects] = useState([]);
    const baseURL = apiConfig.base;


    useEffect(() => {
        axios({
            method: "GET",
            url: `${baseURL}/api/subject/getSubjects`
        }).then(res => {
            setSubjects(res.data.subjects)
        })
    }, [])

    const breakpoints = {
        default:3,
        1100:2,
        500:1,
    }

    return (
        <Box>
            <Box >
                <Carousel autoplay={true} autoplayInterval={5000} wrapAround={true} adaptiveHeight={true} animation={'zoom'} style={{ height: '500px' }}>
                    <Typography>12</Typography>
                </Carousel>
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
                        clear:"both"
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



