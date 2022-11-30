import React from 'react'
import { Card, ButtonBase, Grid, Typography } from '@mui/material'

export default function ClassCardButtonGrid() {
    return (
        <Grid item xs={12} sx={{
            marginTop: '10px',
            float:'left',
            background:'blue'
        }}>
            <ButtonBase sx={{float:'left', width:'100%'}}>
                <Card sx={{
                    height: '80px',
                    width:'95%',
                    float:'left',
                    
                }}>
                    <Typography variant='h6' sx={{float:'left', marginLeft:'10px', marginTop:'5px', fontSize:'20px'}}>
                        Lecture 3 OS Organization and System Calls
                    </Typography>
                </Card>
            </ButtonBase>
        </Grid>
    )
}
