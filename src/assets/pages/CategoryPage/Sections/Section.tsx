import React from 'react'
import SubSection from './SubSection/SubSection.tsx';
import { ProjectGroup } from '../../../types/interfaces.ts';



const Section: React.FC<ProjectGroup> = ({ projectGroupName, projectGroupDescription, projectItemsData }) => {
/**
 * { projectGroup }
 * ogni section riceve un projectGroup(json) da visualizzare all'interno
 */
  return (
    <div>
      
      <div 
        className='pt-34 pb-20
        md:pl-30 md:pr-30 
        sm:pl-10 sm:pr-10
        pl-10 pr-10'
        style={{
          backgroundColor: '#1D1D1D', // Colore personalizzato in formato esadecimale
        }}>
        <h1 className='text-white font-melodi-light text-title' >{projectGroupName}</h1>
        <p className='text-white mt-2 font-melodi-light text-sub-title'>{projectGroupDescription}</p>
      </div>
      
      <ul>
        {projectItemsData.map((projectItem, index) => (
          <li key={index} id={`projectItem-${index}`}>
            <SubSection 
                projectItem={projectItem}>
                
              </SubSection>
            
          </li>
        
        ))}
      </ul>
      
    </div>
    
  )
}

export default Section
