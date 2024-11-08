import React from 'react'
import Contact from './ContactUs/Contact'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import About from './About';
import HomeIcon from '@mui/icons-material/Home';
import Services from './Services';
import ImageListMui from './ImageListMui';
import VpnKeyIcon from '@mui/icons-material/VpnKey';





const MainPage = () => {
  return (
    <div>
        <section  id="video">
            <div className='video-wrapper'>
                <video 
                autoPlay
                loop
                muted
                playsInline
                className='video'
                >
                    <source src="FixWell.mp4" type="video/mp4"/>
                </video>
                <div className='blur-overlay'></div>
                <p className="video-overlay-text">WellFix Rakennus - Luotettava Kumppaninne Rakentamisessa</p>
            </div>
        </section>
        <section className='container' id="about">
            <About/>
        </section>
        <section className='container' id="services">
            
            <br/>
            <Services/>  
        </section>
        
        <section className='container center-gallery' id="gallery">
           <h1 className='gal'>Gallery</h1>
            <ImageListMui/>
        </section>

        <section className='container' id="contact-info">
            <div className='left-div'>
                <h2>Yhteistiedot</h2>
                <p className='roboto-regular'> <HomeIcon/>WellFix Rakennus Oy</p>
                <p className='roboto-regular'><LocalPhoneIcon/> 046 945 0077</p>
                <p className='roboto-regular'><EmailIcon/>wellfixrakennus@gmail.com</p>
                <p> <VpnKeyIcon/> Y-tunnus: 3230380-7</p>
                
            
            </div>
            <div className='right-div'>
            <Contact/>
            </div>
        </section>

        <section className='footer-container' id="footer">
        <div className="footer-content">
        
            </div>

            <div className="footer-bottom">
                 <p>&copy; 2024 WellFix Rakennus Oy. All rights reserved.</p>
                 <p>Y-tunnus: 3230380-7</p>
            </div>

        </section>
        </div>
        
  )
}

export default MainPage