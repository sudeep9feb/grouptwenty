import { Box, IconButton, InputBase, Paper } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function RightBar() {
    return (
        <Box
            flex={2}
            sx={{
                display: {
                    xs: "none", sm: "none", md: "flex"
                },
                p: "5px",
                m: "10px",
            }}
        >
            <Box marginTop={"10px"} position="fixed">
                <Paper
                    sx={{
                        p: '2px 4px', display: 'flex',
                        alignItems: 'center', height: "40px"
                    }}
                >

                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Box>

        </Box>)
}

export default RightBar