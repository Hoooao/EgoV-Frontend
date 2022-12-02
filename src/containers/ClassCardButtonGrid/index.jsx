import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, ButtonBase, Grid, Typography, CardMedia, CardContent, Box } from '@mui/material'

export default function ClassCardButtonGrid(props) {
    const { title, thumbnails, resourceId, course_id, lec_num } = props;
    const navigate = useNavigate();

    const tbnArrResolution = ['maxres', 'standard', 'high', 'medium', 'default'];
    let thumbnail_url = '';
    for (let i = 0; i < tbnArrResolution.length; i++) {
        if (thumbnails[tbnArrResolution[i]])
            thumbnail_url = thumbnails[tbnArrResolution[i]].url;
        break;
    }

    return (
        <Grid item xs={12} sx={{
            marginTop: '10px',
            float: 'left',
        }}>
            <ButtonBase sx={{ float: 'left', width: '100%' }}
                onClick={() => navigate(`/course/${course_id}/lecture/${lec_num}`)}>
                <Card sx={{
                    height: '80px',
                    width: '95%',
                    float: 'left',
                    display: 'flex'
                }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151, display: 'block' }}
                        image={thumbnail_url}
                        alt={title}
                    />

                    <Box>
                        <CardContent>
                            <Typography variant='h6' sx={{ float: 'left', marginLeft: '0px', marginTop: {lg:'-5px', sm:'3px'}, fontSize: {lg:'15px'} }}>
                                {title}
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </ButtonBase>
        </Grid>
    )
}
