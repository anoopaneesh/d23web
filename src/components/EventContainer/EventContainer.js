import React from 'react'
import './style.css'
import no_image from '../../assets/jpeg/No_Image.png'
const EventContainer = ({ item, onClick ,clip,className}) => {
    return (

        // <div className='md:w-1/3' onClick={() => onClick(item)}>
        //     <img src={item.url} alt="" className='w-full' />
        // </div>
        <div className='w-10/12 md:w-500px h-500px'>
            <div className={`curved_container w-full h-full clip_path ${className}`}>
                <div className={`inner clip_path`} onClick={() => onClick(item)}>
                    <img src={item.url || no_image} className="w-full h-full" alt="" />
                </div>
            </div>
        </div>
    )
}

export default EventContainer