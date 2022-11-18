import React from 'react'
import { Card, ButtonBase, Grid, Typography } from '@mui/material'

export default function ClassCardButtonGrid() {
    return (
        <Grid item xs={12} sx={{
            width: '100%',
            marginTop: '10px',
            float:'left'
        }}>
            <ButtonBase>
                <Card sx={{
                    height: '70px',
                }}>
                    <Typography variant='h6'>
                        Lecture 3 OS Organization and System Calls
                    </Typography>
                </Card>
            </ButtonBase>
        </Grid>
    )
}
