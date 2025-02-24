import React from 'react'
import { ProjectItem } from '../../../../../types/interfaces'

const VideoMediaItem: React.FC<{ projectItem: ProjectItem }> = ({ projectItem }) => {
return (
    <video
        className="absolute top-0 left-0 w-full h-full"
        style={{
            borderRadius: '9px',
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            objectFit: 'cover',
        }}
        src={projectItem.mediaPreviewUrl}
        loop
        muted
        autoPlay
        playsInline
    />
)
}

export default VideoMediaItem
