import React from 'react'
import Header from '../Header'
import LeftDrawer from '../LeftDrawer'

export default function Layout({ children }) {
    return (
        <Header>
            <LeftDrawer/>
            <div>
                {children}
            </div>
        </Header>
    )
}


