
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box,Fab } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';

export default function SuggestButton() {
    const navigate = useNavigate();
    return (
        <Box>
            <Fab variant="extended" sx={{
                position: "fixed",
                top: "90%",
                left: {lg:'80%',sm:"70%"}
            }} onClick={() => { navigate("/suggest/newcourse") }}>
                
                <EditIcon sx={{ mr: 1 }} />
                suggestions
            </Fab>
        </Box>
    )
}
