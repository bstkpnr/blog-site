import React from 'react'
import { education } from '../../data/data'
import '../Education/education.css'

const EducationPage:React.FC=()=> {
  return (
    <div className='education-container'>
        {education.map((item) => (
            <div className='education-item' key={item.id}>
            <h3>{item.universityName}</h3>
            <p>{item.department}</p>
            <p>{item.desc}</p>
          </div>
        ))}  
    </div>
        )
}

export default EducationPage;