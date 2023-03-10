import { Box, List, ListItemButton, ListItemText, ListItemIcon, Stack, Button } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';

function NavMenu() {
    return (
        <Box
            flex={1}
            marginLeft={"10px"}
            marginTop={"10px"}
            sx={{ display: { xs: "none", sm: "flex" } }}
        >
            <Stack direction={"column"} spacing="2px" position="fixed"
            >
                <List disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </List>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <MessageIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tweets" />
                    </ListItemButton>
                </List>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <MessageIcon />
                        </ListItemIcon>
                        <ListItemText primary="Message" />
                    </ListItemButton>
                </List>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <Person2Icon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </List>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <Person2Icon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </List>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </List>
                <Button variant='contained'
                    sx={{ maxWidth: "160px", borderRadius: "24px" }}>Tweet</Button>
            </Stack>
        </Box>
    )
}

export default NavMenu