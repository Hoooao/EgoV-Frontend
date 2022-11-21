import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Layout from './containers/Layout'
import Course from './pages/Course'
import Profile from './pages/Profile'

const MainRouter = () => {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/course" element={<Course />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path='*' element={<Index />}/>
                </Routes>
            </Layout>
        </div>
    )
}

export default MainRouter; 