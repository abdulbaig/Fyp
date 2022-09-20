import React from 'react'
import homeImage from '../Assets/images/homeImage.png'

const Sdata = [
    {
      image: {homeImage},
      title: 'Janaza Funding',
      
        
    },
    {
        title: 'Janaza Funding',
       
          
      },
      {
        title: 'Janaza Funding',
          
      },

   
]

const Card = () => {
    return(
        <>
        
            <div className="cardd">
            
                {Sdata.map (data =>(
                  
  <div className="card-body landing-card-body">
    <img className='card-img-top banner-img' src={homeImage} />
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.description}</p>
    </div>
    )) }
    
  </div>
  </>
    )
}

export default Card
