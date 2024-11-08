import React, { useState } from 'react'
import {AppBar, Typography, Tabs, Tab, Button, Toolbar, useTheme, useMediaQuery} from '@mui/material'
import {DrawerContainer} from './DrawerContainer';
import { NavbarWrapper } from '../styles/Styles.modules';
import { Link } from 'react-router-dom';

export const menuItems = [
    { name: 'Etusivu', link: '#video' },
    { name: 'Meistä', link: '#about' },
    { name: 'Palvelut', link: '#services' },
    { name: 'Kuvat', link: '#gallery' },
    { name: 'Ota Yhteyttä', link: '#contact-info' }
];

const Header = () => {
    const themes = useTheme();
    const isMatching = useMediaQuery(themes.breakpoints.down("md"));
    const [activeTab, setActiveTab] = useState(0);
    const handleScroll = (event, link, index) => {
        event.preventDefault();
        const targetSection = document.querySelector(link);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            setActiveTab(index); // Set the active tab index
        }
    };
  return (
    <div>
        <NavbarWrapper>
            <AppBar sx={{padding:"5px",backgroundColor:"#004085"}}>
                <Toolbar>
                    <Typography className='logo'>  <img  className='logo-img'src="avatar.jpg" alt="Logo" /> </Typography>
                    {isMatching? (
                        <DrawerContainer/>
                    ): (
                        <>
                        <Tabs sx={{
                            marginLeft:'auto',
                        '.MuiTabs-indicator': {
                            backgroundColor: '#f9b57a', }}}
                            textColor='inherit'
                            
                            value={activeTab} // Bind value to activeTab 
                        >
                            {menuItems.map((menuItem,index) =>(
                                <Tab key={index} label={menuItem.name}
                                href={menuItem.link}
                                onClick={(event) => handleScroll(event, menuItem.link, index)}
                              
                                />
                            ))}
                            </Tabs>
                        
                    </>
)}
                    
                </Toolbar>
            </AppBar>
        </NavbarWrapper>
    </div>
  )
}

export default Header