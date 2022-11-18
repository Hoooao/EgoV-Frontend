import { makeStyles } from '@mui/styles'
import React from 'react'
import ResponsiveAppBar from '../ResponsiveAppBar'
import LeftDrawer from '../LeftDrawer'
import { Container,Box } from '@mui/material'

const useStyle = makeStyles({
    container: {
        backgroundColor: ''
    },
    content:{
        position:'relative',
        top:'20px'
    }
});
export default function Layout({ children }) {
    const classes = useStyle();
    return (
        <div>
            <ResponsiveAppBar />
            <Container className={classes.container} maxWidth='lg'>
                <Box className={classes.content}>
                    {children}
                </Box>
            </Container>
        </div>
    )
}


