import { Box, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Paper } from '@mui/material';
import { Grid, TextField, Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import apiConfig from '../../apiConfig.mjs';

export default function Suggest() {
    const baseURL = apiConfig.base;
    const [type, setType] = useState('course');
    const navigate = useNavigate();
    const userObj = JSON.parse(localStorage.getItem("userObj"));
    if(!userObj){
        navigate('/login')
    }
    const NewCourse = () => {
        const [reason, setReason] = useState('Please enter why would you like to make the suggestion');
        const [subjects, setSubjects] = useState('Please enter the subject');
        const [course, setCourse] = useState('Please enter the course name');
        const handleSubmit = () => {
            axios({
                method:"POST",
                url:`${baseURL}/api/user/add_suggestion`,
                data:{
                    user_id:userObj.id,
                    type,
                    content:JSON.stringify({reason,
                        subjects,
                        course})
                }
            }).then(
                navigate('/')
            )
        }
        return (
            <form action="" onSubmit={handleSubmit}>
                <FormControl sx={{
                    marginTop: "20px",
                    float: "left"
                }}>

                    <Box sx={{
                    }}>
                        <FormLabel >
                            Input your suggestion detail:
                        </FormLabel>
                    </Box>
                </FormControl>
                <Grid container spacing={3} sx={{
                    float: "left",
                    marginTop: '0px'
                }}>

                    <Grid item xs={12}>
                        <TextField
                            id="filled-multiline-flexible"
                            label="Subject"
                            multiline
                            maxRows={4}
                            value={subjects}
                            variant="filled"
                            onChange={(e) => { setSubjects(e.target.value) }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="filled-multiline-flexible"
                            label="Course"
                            multiline
                            maxRows={4}
                            value={course}
                            variant="filled"
                            onChange={(e) => { setCourse(e.target.value) }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Reason"
                            multiline
                            rows={4}
                            value={reason}
                            sx={{
                                width: "30%"
                            }}
                            onChange={(e) => { setReason(e.target.value) }}
                        />
                    </Grid>
                </Grid>

                <Button type="submit" variant="contained" sx={{ marginTop: "20px" }}>Submit</Button>
            </form>

        )
    }
    const Suggestion = () => {
        const [reason, setReason] = useState('Please enter why would you like to make the suggestion');
        const handleSubmit = () => {
            axios({
                method:"POST",
                url:`${baseURL}/api/user/add_suggestion`,
                data:{
                    user_id:userObj.id,
                    type,
                    content:reason
                }
            }).then(
                navigate('/')
            )
        }
        return (
            <form action="" onSubmit={handleSubmit}>
                <FormControl sx={{
                    marginTop: "20px",
                    float: "left"
                }}>

                    <Box sx={{
                    }}>
                        <FormLabel >
                            Input your suggestion detail:
                        </FormLabel>
                    </Box>
                </FormControl>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Suggestion"
                        multiline
                        rows={4}
                        value={reason}
                        sx={{
                            marginTop: "20px"
                        }}
                        onChange={(e) => { setReason(e.target.value) }}
                    />
                </Grid>

                <Button type="submit" variant="contained" sx={{ marginTop: "20px" }}>Submit</Button>
            </form>
        )

    }
    return (
        <Box>
            <Paper sx={{
                position: 'absolute',
                padding: "10px",
                paddingLeft: "30px",
                width: "100%",
                display: "flex",
                flexDirection: "column"
            }}>
                <FormControl sx={{
                    float: "left"
                }}>
                    <FormLabel id="demo-radio-buttons-group-label" sx={{
                        position: "relative",
                        left: "-48%"
                    }}>Type</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={type}
                        name="radio-buttons-group"
                        onChange={(e) => {
                            navigate(`/suggest/${e.target.value === "course" ? "newcourse" : "general"}`)
                            setType(e.target.value)
                        }}
                    >
                        <FormControlLabel value="course" control={<Radio />} label="New Course" />
                        <FormControlLabel value="suggestion" control={<Radio />} label="Suggestion" />
                    </RadioGroup>
                </FormControl>

                <Routes>
                    <Route path="/newcourse" element={<NewCourse />} />
                    <Route path="/general" element={<Suggestion />} />
                </Routes>


            </Paper>
        </Box>
    )
}
