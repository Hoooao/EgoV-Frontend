import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignInSide from './containers/SignInSide'
import Header from './containers/Header'
import SubForm from './containers/SubForm'
import Show from './containers/Show'

const MainRouter = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<SignInSide />} />
                <Route path="/submit" element={<SubForm />} />
                <Route path="/show" element={<Show />} />
            </Routes>


        </div>
    )
}

export default MainRouter;