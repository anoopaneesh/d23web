import React from 'react'
import './style.css'
const CutButton = ({text}) => {
    return (
        <div className='w-10/12 md:w-1/4 h-1/4 text-white'>
            <div className={`.cut_button w-full h-full clip_path ${className}`}>
                <div className="inner clip_path">
                    <Link to={text ? '/error' : getRedirection(workshop, to)}>{text}</Link>
                </div>
            </div>
        </div>
    )
}

export default CutButton