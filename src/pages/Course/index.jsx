import React from 'react'
import { Box, Card, Button, Typography, Rating, Paper, ButtonGroup, Grid, Container, Divider } from '@mui/material'
import ClassCardButtonGrid from '../../containers/ClassCardButtonGrid';
export default function Course() {
    const courseInfoBold = {
        fontWeight: 'bold',
        marginBottom: '10px',
        float: 'left',
        clear: 'left'
    }
    const courseInfoThin = { float: 'left', marginLeft: '7px' };
    return (
        <Container maxWidth='lg'>
            <div>
            <Box sx={{
                marginTop: '20px',
                display: 'flex',
                flexDirection:{sm:'row', xs:'column'}
            }}>
                <Card sx={{
                    width: '290px',
                    height: '310px',
                    marginLeft:'auto',
                    marginRight:'auto'
                }} />
                <Box sx={{
                    position: 'relative',
                    width: '100%',
                    background:'green',
                }}>
                    <Box sx={{
                        marginLeft: '20px',
                        display: 'flex wrap column',
                        width: '100%',
                        height: '250px',
                        overflow:'hidden'
                    }}>
                        <Typography variant='h6' align='left' sx={{
                            fontWeight: 'bold',
                            marginBottom: '7px',
                        }}>
                            Course Title
                        </Typography>
                        
                        <Divider sx={{width:'90%'}}/>
                        <Box sx={{ marginTop: '10px' }}>
                            <Typography align='left' sx={courseInfoBold}>
                                Instructor(s):
                            </Typography >
                            <Typography sx={courseInfoThin}>Instructor</Typography>

                            <Typography align='left' sx={courseInfoBold}>
                                Offered By:
                            </Typography >
                            <Typography sx={courseInfoThin}>Uni</Typography>

                            <Typography align='left' sx={courseInfoBold}>
                                Difficulty:
                            </Typography >
                            <Rating name="read-only" value={4.5} readOnly precision={0.5} sx={{
                                float: 'left'
                            }} />

                            <Typography align='left' sx={courseInfoBold}>
                                Prerequisites:
                            </Typography >
                            <Typography sx={courseInfoThin}>Prerequisites</Typography>

                            <Typography align='left' sx={courseInfoBold}>
                                Languages:
                            </Typography >
                            <Typography sx={courseInfoThin}>Languages</Typography>

                            <Typography align='left' sx={courseInfoBold}>
                                Course Hour:
                            </Typography >
                            <Typography sx={courseInfoThin}>Course Hour</Typography>

                        </Box>
                    </Box>
                </Box>
                
            </Box>
            <Box sx={{ marginTop:'20px' }}>
                <Typography sx={{ fontWeight: 'bold', float: 'left', clear: 'both', fontSize:'20px' }}>Introduction:</Typography>
                <Typography align='left' sx={{
                    maxHeight: { lg: '120px', sm: '100px',xs:'50px' },
                    overflow: 'scroll',
                    clear: 'both'
                }}>
                    6.S081 is AUS subject intended for undergraduates, and it provides an introduction to operating systems. Separately, 6.828 will be offered in future terms as a graduate-level seminar-style class focused on research in operating systems.
                    </Typography>
            </Box>

            
            <Box sx={{
                marginTop: '30px'
            }}>
                <Paper sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(1,1,1,0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative'
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
                        float:'left',
                        background:'red'
                    }}>
                        <ClassCardButtonGrid />

                        <ClassCardButtonGrid />

                        <ClassCardButtonGrid />

                    </Grid>
                </Paper>
            </Box>
        </div>
        </Container>
    )
}
