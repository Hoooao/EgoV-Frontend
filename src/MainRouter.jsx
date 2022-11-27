import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Layout from './containers/Layout'
import Course from './pages/Course'
import Profile from './pages/Profile'
import Suggest from './pages/Suggest'
import ShowSuggestion from './pages/ShowSuggestion'
import Subjects from './pages/Subjects'
import axios from 'axios'
import apiConfig from './apiConfig.mjs'
import { useEffect } from 'react'

const MainRouter = () => {
    useEffect(() => {
        const baseURL = apiConfig.base;
        axios({
            method: "GET",
            url: `${baseURL}/api/user/checkLoginState`
        }).then(res=>{
            if(!res.data.logged){
                localStorage.removeItem("userObj");
            }
        })
    },[]);

    return (
        <div>
            <Layout>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/course" element={<Course />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/suggest/*" element={<Suggest />} />
                    <Route path="/subjects/*" element={<Subjects />} />
                    <Route path="/show_suggestion" element={<ShowSuggestion />} />
                    <Route path='*' element={<Index />} />
                </Routes>
            </Layout>
        </div>
    )
}

export default MainRouter; 