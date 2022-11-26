import React from 'react'
import { Box, Typography,Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import Carousel from "nuka-carousel";
import SubCardGrid from '../../containers/SubCardGrid'
import axios from 'axios';
import apiConfig from '../../apiConfig.mjs';
export default function Subjects() {
    const [subjects, setSubjects] = useState([]);
    const baseURL = apiConfig.base;


    useEffect(()=>{
        axios({
            method:"GET",
            url:`${baseURL}/api/subject/getSubjects/0`
        }).then(res=>{
            setSubjects(res.data.subjects)
        })
    },[])

    return (
        <Box>
            <Box >
                <Carousel autoplay={true} autoplayInterval={5000} wrapAround={true} adaptiveHeight={true} animation={'zoom'} style={{ height: '300px' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/LetterA.svg/800px-LetterB.svg.png" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/LetterA.svg/800px-LetterB.svg.png" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/LetterA.svg/800px-LetterB.svg.png" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/LetterA.svg/800px-LetterB.svg.png" />
                </Carousel>
            </Box>

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

                <Grid container spacing={7}>
                    {subjects.map(ele => {
                        return <SubCardGrid {...ele} key={ele.id} />
                    })}
                </Grid>
            </Box>
        </Box>
    )
}



