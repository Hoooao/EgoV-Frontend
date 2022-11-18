import React from 'react'
import { Box, Card, Button, Typography, Rating, Paper, ButtonGroup, Grid,ButtonBase } from '@mui/material'
import ClassCardButtonGrid from '../../containers/ClassCardButtonGrid';
export default function Course() {
    return (
        <div>
            <Box sx={{
                marginTop: '20px',
                display: 'flex',
            }}>
                <Card sx={{
                    width: '290px',
                    height: '310px',
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
                            marginBottom: '26px',
                        }}>
                            MIT 6.S081: Operating System Engineering
                        </Typography>

                        <Typography align='left' sx={{

                            fontWeight: 'bold',
                            marginBottom: '26px',

                        }}>
                            Difficulty: <Rating name="read-only" value={4.5} readOnly precision={0.5} />
                        </Typography >
                        <Typography align='left' sx={{
                            height: '30px'
                        }}>
                            Introduction: 6.S081 is AUS subject intended for undergraduates, and it provides an introduction to operating systems. Separately, 6.828 will be offered in future terms as a graduate-level seminar-style class focused on research in operating systems.
                        </Typography>
                        <Button variant='outlined' size='large' sx={{
                            position: 'absolute',
                            bottom: '0px',
                            left: '20px'
                        }}>
                            Start
                        </Button>
                    </Box>
                </Box>

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
                            position:'relative',
                        }}>
                        <Button >YouTube</Button>
                        <Button>Bilibili</Button>
                    </ButtonGroup>

                    <Grid container sx={{
                        marginTop: '20px',
                        width: '100%',
                        diaplay:'flex'
                    }}>
                        <ClassCardButtonGrid/>

                        <ClassCardButtonGrid/>

                        <ClassCardButtonGrid/>
                        
                    </Grid>
                </Paper>
            </Box>
        </div>
    )
}
