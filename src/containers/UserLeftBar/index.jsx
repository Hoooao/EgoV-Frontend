import React from 'react'
import { Paper, Box, Divider, Typography } from '@mui/material'

export default function UserLeftBar(props) {
    const userObj = props;

    return (
        <Paper sx={{
            width: '150%',
            height: '200%',
            background: 'red'
        }}>
            <Box sx={{
                width: '85%',
                height: '0',
                paddingBottom: '50%',
                paddingTop: '25%',
                background: 'blue',
                marginLeft: 'auto',
                marginRight: 'auto',
                backgroundImage: `url(${userObj.avatar})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'contain'
            }}>

            </Box>

            <Box>
                <hr />
                <Typography>
                    {userObj.name}
                </Typography>
                <hr />
            </Box>

            <Box >
                <Typography variant='h5' sx={{ float: 'left', marginLeft: '10%', fontWeight: 'bold' }} >
                    Introduction:
                </Typography>

                <Typography sx={{
                    clear: 'left',
                    marginLeft: '10%',
                    float: 'left',
                    marginTop: '10px'
                }} paragraph>
                    {userObj.description}
                </Typography>
            </Box>
        </Paper >
    )
}
