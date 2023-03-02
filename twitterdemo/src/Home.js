import { Box } from '@mui/material'
import React from 'react'
import MainContent from './MainContent'
import NavMenu from './NavMenu'
import RightBar from './RightBar'

function Home() {
    return (
        <Box>
            <NavMenu />
            <MainContent />
            <RightBar />
        </Box>
    )
}

export default Home