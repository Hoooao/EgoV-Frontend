import { makeStyles } from '@mui/styles'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ResponsiveAppBar from '../ResponsiveAppBar'
import { Container, Box } from '@mui/material'
import SuggestButton from '../SuggestButton/index.jsx'

const useStyle = makeStyles({
    container: {
        backgroundColor: ''
    },
    content: {
        position: 'relative',
        top: '20px'
    }
});
export default function Layout({ children }) {
    const navigate = useNavigate();
    const classes = useStyle();
    return (
        <div>
            <ResponsiveAppBar />

            <Box className={classes.content}>
                {children}
            </Box>
            <SuggestButton />
        </div>
    )
}


