import React from 'react'
import { ProjectItem } from '../../../../types/interfaces'


const SubSubSectionDescription: React.FC<{ projectItem: ProjectItem }> = ({ projectItem }) => {
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
                        backdropFilter: 'blur(70px)', // Effetto di sfocatura
                        WebkitBackdropFilter: 'blur(70px)', // Effetto di sfocatura per Safari
                        backgroundColor: 'rgba(0, 0, 0, 0.2)'
        }}></div>
        <div className='flex justify-center items-center'>
            <div className='relative z-3 flex justify-center w-430 flex-col md:flex-row'>
                <div className='flex-120 order-2 md:order-1'>
                    <p className='pt-6 text-white font-melodi-light text-sub-title' style={{ fontWeight: "bold" }}>
                        {projectItem.professionalRoles}
                    </p>
                    <p className='text-white mt-5 font-melodi-light text-description'>{projectItem.description}</p>
                    
                    
                </div>
                <div className='flex-32 order-3 md:order-2'></div>
                <div className='flex-100 relative order-1 md:order-3 flex justify-center items-center' style={{ overflow: 'hidden' }}>
                    <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
                                style={{
                                    borderRadius: '9px',
                                    backgroundImage: `url(${projectItem.gameAssetImageUrl})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat'
                                }}>
                            </div>
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

export default SubSubSectionDescription
