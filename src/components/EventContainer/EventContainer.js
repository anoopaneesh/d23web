import React from 'react'
import './style.css'
const EventContainer = ({item,onClick}) => {
    return (
        <div className='md:w-1/3 border border-heading relative group' onClick={() => onClick(item)}>
            <img src={item.url} alt="" className='w-full' />
            {/* <div className='invisible opacity-0 group-hover:visible group-hover:opacity-100 w-full h-full bg-[#000a] backdrop-blur-md absolute top-0 left-0 px-4 transition-all grid place-items-center'>
    

                <div>
                    <h3 className='text-xl font-bold'>{item.eventname}</h3>
                    <p className='text-justify mt-2 mb-2 line-clamp-4'>{item.description} </p>
                    <p>Time : {item.time}</p>
                    <div className='mt-4 flex justify-between'>
                        <div>
                            <p>Contact</p>
                            <p>{item.cntname} - {item.contact}</p>
                        </div>
                        <a href={item.ticket} className='text-center'><button className=' bg-[#36fdfd] proshow_button font-chakra -translate-y-4' type="button" style={{
                            background
                                : " linear-gradient(45deg, transparent 5%, #dadada 5%)", color: "black", boxShadow: "6px 0 0 var(--c_red)",

                        }}>Register</button></a>
                    </div>
                </div>

            </div> */}
        </div>
    )
}

export default EventContainer