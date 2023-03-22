import React from 'react'
import './style.css'
const CutButton = ({children,className}) => {
    return (
        <div className='w-10/12 md:w-1/4 h-[200px] text-white'>
            <div className={`cut_button w-full h-full clip_path`}>
                <div className="inner clip_path">
                   {children}
                </div>
            </div>
        </div>
    )
}

export default CutButton