import React from 'react'
import DoneIcon from '@mui/icons-material/Done';

const About = () => {
  return (
    <div className='container-about' >
      <div id='company-info'>
        <div className='right-div'>
          <img
              src="svarka.jpg"
              alt="svarka"
              className="about-image"
          />
        </div>
        <div className='left-div'>
          <h2 className='bigger-font'>Meistä:</h2>
          <p className='roboto-medium' ><DoneIcon sx={{height:'20px',color: '#f9b57a'}}/>WellFix Rakennus Oy on vuonna 2021 perustettu. </p>
                    <p className='roboto-medium' ><DoneIcon sx={{height:'20px',color: '#f9b57a'}}/>Tarjoaa laadukkaita korjaus-, rakennus- ja remonttipalveluja pääkaupunkiseudulla </p>
                    <p  className='roboto-medium'><DoneIcon sx={{height:'20px', color: '#f9b57a'}}/>Tiimissämme on kokeneita ammattilaisia.</p>

         
        </div>
      </div>

      <div id='company-info'>
       
          <div className='left-div'>
               <h2 className='bigger-font'>Lupaamme:</h2>
                <p className='roboto-medium' ><DoneIcon sx={{height:'20px', color: '#f9b57a'}}/>Aikataulu: Pidämme kiinni aikarajoista ja budjeteista ilman kompromisseja.</p>
                <p  className='roboto-medium'><DoneIcon sx={{height:'20px', color: '#f9b57a'}}/>Laatu: Taataan korkeimmat työstandardit.</p>
                <p className='roboto-medium' ><DoneIcon sx={{height:'20px', color: '#f9b57a'}}/>Yksilöllinen lähestymistapa: Olemme valmiita huomioimaan ainutlaatuiset toiveenne ja vaatimuksenne.</p>
                <br/>
                
          </div> 
        <div className='right-div'>
        <img
              src="beton.jpg"
              alt="beton"
              className="about-image "
          />
        </div>
        
      </div>
     
  
     

    </div>
  )
} 

export default About