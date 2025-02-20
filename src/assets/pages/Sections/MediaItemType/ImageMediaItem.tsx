import React from 'react'
import { ProjectItem } from '../../../types/interfaces'

const ImageMediaItem: React.FC<{ projectItem: ProjectItem }> = ({ projectItem }) => {
  return (
      <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url(${projectItem.mediaPreviewUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
      
    </div>
  )
}

export default ImageMediaItem
