import React from 'react';
import { ItemType, ProjectItem } from '../../types/interfaces';
import YoutubeMediaItem from './MediaItemType/YoutubeMediaItem';
import ImageMediaItem from './MediaItemType/ImageMediaItem';

const SubSection: React.FC<{ projectItem: ProjectItem }> = ({ projectItem }) => {
    return (
        <div>
            <div
                className='relative pt-26 pb-26
                md:pl-30 md:pr-30 
                sm:pl-10 sm:pr-10
                pl-10 pr-10'
                style={{
                    backgroundImage: `url(${projectItem.backgroundCoverImageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Colore nero con opacità
                    backgroundBlendMode: 'overlay', // Modalità di fusione
                }}>
                
                <div className='flex justify-center items-center'>
                    <div className='relative z-10 flex justify-center w-430'>
                        <div className='flex-100 '>
                            <h1 className='text-white font-melodi-light text-title' style={{ fontWeight: "bold" }}>
                                {projectItem.title}</h1>
                            <p className='pt-6 text-white font-melodi-light text-sub-title' style={{ fontWeight: "bold" }}>
                                {projectItem.professionalRoles}
                            </p>
                            <p className='pt-4 text-white font-melodi-light text-sub-title' >
                                {projectItem.company.companyName + ' - ' + projectItem.platforms}
                            </p>
                        </div>
                        <div className='flex-32'></div>
                        <div
                            className='flex-100 relative'
                            style={{
                                
                                paddingBottom: '27%', // 16:9 aspect ratio
                                height: 0,
                                borderRadius: '9px', // Arrotonda i bordi
                                overflow: 'hidden', // Nasconde il contenuto che esce dai bordi arrotondati
                            }}>
                            {projectItem.itemType === ItemType.YoutubeUrl && (
                                <YoutubeMediaItem projectItem={projectItem} />
                            )}
                            {projectItem.itemType === ItemType.UrlImage && (
                                <ImageMediaItem projectItem={projectItem} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative pt-22 pb-22
                md:pl-30 md:pr-30 
                sm:pl-10 sm:pr-10
                pl-10 pr-10'
                style={{
                    backgroundImage: `url(${projectItem.backgroundCoverImageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.25)', // Colore nero con opacità
                    backgroundBlendMode: 'overlay', // Modalità di fusione
            }}>
                {/* Overlay nero con opacità e sfocatura */}
                <div
                    className='absolute inset-0 '
                    style={{
                        backdropFilter: 'blur(70px)', // Effetto di sfocatura
                        WebkitBackdropFilter: 'blur(70px)', // Effetto di sfocatura per Safari
                }}></div>
            </div>
        </div>

    );
};

export default SubSection;
