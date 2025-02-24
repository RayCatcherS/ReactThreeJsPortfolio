import React from 'react'
import ButtonCallToAction from '../../../../../components/ButtonCallToAction'
import { ProjectItem, ItemType } from '../../../../../types/interfaces'
import ImageMediaItem from '../MediaItemType/ImageMediaItem'
import YoutubeMediaItem from '../MediaItemType/YoutubeMediaItem'
import VideoMediaItem from '../MediaItemType/VideoMediaItem'

const SubSubSectionIntroduction: React.FC<{ projectItem: ProjectItem }> = ({ projectItem }) => {
  return (
    <div
        className='relative pt-26 pb-26
        md:pl-30 md:pr-30 
        sm:pl-10 sm:pr-10
        pl-10 pr-10'>
        {/* Overlay nero con opacità e sfocatura */}
        <div
            className='absolute inset-0 z-2'
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}></div>
        <div className='flex justify-center items-center'>
            <div className='relative z-3 flex justify-center w-430 flex-col md:flex-row'>
                <div className='flex-100 order-2 md:order-1'>
                    <h1 className='text-white font-melodi-light text-title sm:pt-9 pt-9 md:pt-0' style={{ fontWeight: "bold" }}>
                        {projectItem.title}</h1>
                    <p className='pt-6 text-white font-melodi-light text-sub-title' style={{ fontWeight: "bold" }}>
                        {projectItem.professionalRoles}
                    </p>
                    <p className='pt-4 text-white font-melodi-light text-sub-title' >
                        {projectItem.company.companyName + ' - ' + projectItem.platforms}
                    </p>
                    <div className='pt-20'>
                    <ul className='flex flex-wrap gap-6'>
                        {projectItem.callToActions.map((callToAction, index) => (
                            <li key={index} id={`projectGroup-${index}`}>
                                <ButtonCallToAction callToAction={callToAction} ></ButtonCallToAction>
                            </li>
                        ))}
                        </ul>
                        
                    </div>
                    
                </div>
                <div className='flex-32 order-3 md:order-2'></div>
                <div className='flex-100 relative order-1 md:order-3 flex justify-center items-center' style={{ overflow: 'hidden' }}>
                    <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%' }}>
                            {projectItem.itemType === ItemType.YoutubeUrl && (
                                <YoutubeMediaItem projectItem={projectItem} />
                            )}
                            {projectItem.itemType === ItemType.UrlImage && (
                                <ImageMediaItem projectItem={projectItem} />
                            )}
                            {projectItem.itemType === ItemType.UrlVideo && (
                                <VideoMediaItem projectItem={projectItem} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {projectItem.itemCoverBackgroundType === 'video' ? (
            <video
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                webkit-playsinline="true"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                    pointerEvents: 'none', // Evita interazioni con il video
                    userSelect: 'none', // Previene selezioni indesiderate
                }}
            >
                <source src={projectItem.backgroundCoverVideoUrl} type="video/mp4" />
            </video>
        ) : (
            <div
                className='absolute inset-0'
                style={{
                    backgroundImage: `url(${projectItem.backgroundCoverImageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                }}
            ></div>
        )}
    </div>
  )
}

export default SubSubSectionIntroduction
