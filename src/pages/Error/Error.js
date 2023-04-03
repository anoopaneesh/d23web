import React from 'react'
import './error.css'
const Error = () => {

    return (
        <div class="text_container comming_soon error_body">
            <h1 className="glitch leading-[90%] md:leading-none" data-text="COMING SOON!">COMING SOON!</h1>
            <h3 className='mt-8'>Site under maintenance.<br />Stay tuned.</h3>
            <div className='h-20'></div>
            <p className='lowercase load'>gallery upload in process . . .</p>
            <div className='mt-10 flex md:flex-row flex-col space-y-4 md:space-y-0 md:space-x-4 '>
                <a href='/' className='text-center'><button className=' button bg-[#36fdfd] font-chakra' type="button" style={{
                    background
                        : " linear-gradient(45deg, transparent 5%, aqua 5%)", color: "black", boxShadow: "6px 0 0 var(--c_red)"
                }}>GO HOME</button></a>
                <a href="/events" className='text-center'><button className='button bg-c_red font-chakra' type="button">VIEW EVENTS</button></a>
            </div>
        </div>
    )
}

export default Error