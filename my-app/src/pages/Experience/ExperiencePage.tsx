import React from 'react'
import { experience } from '../../data/data'

const ExperiencePage:React.FC=()=> {
  return (
    <div className='experience-container'>
    {experience.map((item) => (
        <div className='experience-item' key={item.id}>
        <h3>{item.companyName}</h3>
        <p>{item.department}</p>
        <p>{item.desc}</p>
      </div>
    ))}  
</div>
        )
}

export default ExperiencePage;