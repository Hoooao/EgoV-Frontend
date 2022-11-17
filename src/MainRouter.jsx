import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignInSide from './containers/SignInSide'
import Header from './containers/Header'


const MainRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<SignInSide />} />
            </Routes>


        </div>
    )
}

export default MainRouter;