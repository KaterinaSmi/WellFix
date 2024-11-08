import React from 'react';
import {
    Drawer,
    IconButton,
    List,
    ListItemText,
    ListItemButton,
    styled,
    Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { menuItems } from './Header';

export const DrawerContainer = ({ activeTab, setActiveTab }) => {
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const drawerBtn = () => {
        setOpenDrawer(!openDrawer);
    };

    const CustomDrawer = styled(Drawer)`
        .MuiDrawer-paper {
            background: #004085; /* Drawer background in light sand */
            color: whitesmoke;
           
            transition: all 0.3s ease-in-out; 
        }
    `;
    const CustomListItemButton = styled(ListItemButton)`
        color: whitesmoke ! important; /* Same as the header link color */
        &:hover {
            background-color: #f9b57a; /* Hover color same as underline */
        }
    `;

    const handleScroll = (event, link, index) => {
        event.preventDefault();
        const targetSection = document.querySelector(link);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            setActiveTab(index); // Set the active tab index
            setOpenDrawer(false); // Close the drawer
        }
    };

    return (
        <>
            <CustomDrawer open={openDrawer} onClose={drawerBtn} anchor="left">
                <List>
                    {menuItems.map((nav, index) => (
                        <CustomListItemButton
                            key={index}
                            onClick={(event) => handleScroll(event, nav.link, index)} // Trigger smooth scroll
                        >
                            <ListItemText>
                                {nav.name}
                            </ListItemText>
                        </CustomListItemButton>
                    ))}
                </List>
            </CustomDrawer>
            <IconButton onClick={drawerBtn} sx={{ marginLeft: "auto", color: "whitesmoke" }}>
                <MenuIcon />
            </IconButton>
        </>
    );
};
