import React, { useEffect, useRef } from 'react'
import { ProjectItem } from '../../../../../types/interfaces'
import { useIntersectionObserver } from '../../../../../hooks/useIntersectionObserver'

const SubSubSectionDescription: React.FC<{ projectItem: ProjectItem }> = ({ projectItem }) => {
  const { targetRef, isIntersecting } = useIntersectionObserver();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
        if (isIntersecting) {
            videoRef.current.play().catch(e => console.log("Autoplay prevented", e));
        } else {
            videoRef.current.pause();
        }
    }
  }, [isIntersecting]);

  return (
    <div
        ref={targetRef as any}
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
                    <p style={{ whiteSpace: 'pre-line' }} className='text-white mt-5 font-melodi-light text-description'>{projectItem.description}</p>
                    
                    
                </div>
                <div className='flex-32 order-3 md:order-2'></div>
                <div className='flex-100 relative order-1 md:order-3 flex justify-center items-center' style={{ overflow: 'hidden' }}>
                    <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                                <img 
                                    src={projectItem.gameAssetImageUrl} 
                                    loading="lazy" 
                                    alt="Game Asset"
                                    className="w-full h-full object-contain rounded-[9px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {projectItem.itemCoverBackgroundType === 'video' ? (
            <video
                ref={videoRef}
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
            <img 
                src={projectItem.backgroundCoverImageUrl} 
                loading="lazy"
                alt=""
                className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
            />
        )}
    </div>
  )
}

export default SubSubSectionDescription
