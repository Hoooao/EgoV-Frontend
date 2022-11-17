import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Index from './pages/Index'

import Layout from './containers/Layout'


const MainRouter = () => {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/signin" element={<SignIn />} />
                </Routes>
            </Layout>
        </div>
    )
}

export default MainRouter;