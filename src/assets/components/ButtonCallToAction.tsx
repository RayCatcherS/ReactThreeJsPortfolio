import React from 'react'
import { CallToAction } from '../types/interfaces';

const ButtonCallToAction: React.FC<{ callToAction: CallToAction }> = ({ callToAction }) => {

    const handleClick = () => {
        window.open(callToAction.callToActionUrl, '_blank');
    };
    return (
        <button
            onClick={handleClick}
            className={`px-4 py-2 
                text-white text-description font-melodi-light rounded
                hover:bg-violet-950 bg-violet-900`}>
            <div className='pr-1.5 pl-1.5 pt-1 pb-1'>{callToAction.callToActionText}</div>
        
        </button>
    )
}

export default ButtonCallToAction
