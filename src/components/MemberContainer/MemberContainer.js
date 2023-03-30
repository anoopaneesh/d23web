import React from 'react'
import './style.css'
import no_image from '../../assets/jpeg/No_Image.png'
const insta = {
    "Anoop P K":"https://instagram.com/ichbin_anoop",
    "ShyamKrishnan S N":"https://instagram.com/shhyaaam",
    "Alan T A":"https://instagram.com/alan_ta_335",
    "Akhil Krishna S":"http://Instagram.com/ilmentore72"
}
function handleClick(item){
    if(Object.keys(insta).includes(item.name)){
        window.location = insta[item.name]
    }
}
const MemberContainer = ({ className, item }) => {
    return (
        <div>
            <div className='w-48 h-48'>
                <div className={`member_container w-full h-full clip_path ${className}`}>
                    <div className={`inner clip_path`} onClick={() => handleClick(item)}>
                        <img src={item.url || no_image} className="w-full h-full" alt="" />
                    </div>
                </div>

            </div>
            <p className='pt-2 uppercase'>{item.name}</p>
            <p className='text-sm opacity-75'>{item.position}</p>
        </div>
    )
}

export default MemberContainer