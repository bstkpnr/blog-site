import React from 'react'
import { skill } from '../../data/data'
import '../Skills/skills.css'

const SkillsPage:React.FC = () => {
  return (
    <div className="skills-container">
    {skill.map((item) => (
        <div key={item.id} className="skill-item">
          <h3 className='skill-name'>{item.skillName}</h3>
          {item.desc.map((e, index)=>{ 
            return (
              <div key={index} className="skill-detail"> 
                <img src={e.image} alt={e.name} />
                <p>{e.name}</p>
              </div>
            )
          })}
        </div>
    ))}  
    <div className='icon-container'>
    </div>
</div>
  )
}

export default SkillsPage;
