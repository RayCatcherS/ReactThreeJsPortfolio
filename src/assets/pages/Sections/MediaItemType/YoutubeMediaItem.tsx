import React from 'react'
import { ProjectItem } from '../../../types/interfaces'

const YoutubeMediaItem: React.FC<{ projectItem: ProjectItem }> = ({ projectItem }) => {
  return (
    <iframe className="absolute top-0 left-0 w-full h-full"
        src= {projectItem.mediaItemSource} 
        title="YouTube video player"
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
    </iframe>
      
  )
}

export default YoutubeMediaItem
