import { Box, List, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';

function NavMenu() {
    return (
        <Box >
            <List>
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
        </Box>
    )
}

export default NavMenu