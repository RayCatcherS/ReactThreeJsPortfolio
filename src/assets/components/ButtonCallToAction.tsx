import React from 'react'
import { CallToAction } from '../types/interfaces';

const ButtonCallToAction: React.FC<{ callToAction: CallToAction }> = ({ callToAction }) => {

    const handleClick = () => {
        window.open(callToAction.callToActionUrl, '_blank');
    };
    return (
        <button
            onClick={handleClick}
            className={`px-5 py-2.5 
                text-white text-description font-melodi-light rounded-lg
                bg-violet-900 shadow-md transition-all duration-300 ease-out
                hover:bg-violet-700 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]
                active:translate-y-0 active:scale-95`}>
            <div className='pr-1.5 pl-1.5 pt-1 pb-1'>{callToAction.callToActionText}</div>
        
        </button>
    )
}

export default ButtonCallToAction
