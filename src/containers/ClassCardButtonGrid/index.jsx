import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, ButtonBase, Grid, Typography, CardMedia, CardContent, Box } from '@mui/material'

export default function ClassCardButtonGrid(props) {
    const { title, thumbnails, resourceId, course_id, lec_num } = props;
    const navigate = useNavigate();
    return (
        <Grid item xs={12} sx={{
            marginTop: '10px',
            float: 'left',
        }}>
            <ButtonBase sx={{ float: 'left', width: '100%' }} 
            onClick={()=>navigate(`/course/${course_id}/lecture/${lec_num}`)}>
                <Card sx={{
                    height: '80px',
                    width: '95%',
                    float: 'left',
                    display:'flex'
                }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151, display: 'block' }}
                        image={thumbnails.standard.url}
                        alt={title}
                    />

                    <Box>
                        <CardContent>
                            <Typography variant='h6' sx={{ float: 'left', marginLeft: '10px', marginTop: '5px', fontSize: '20px' }}>
                                {title}
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </ButtonBase>
        </Grid>
    )
}
