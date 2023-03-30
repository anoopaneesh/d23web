import React from 'react'
import './E404.css'




const E404 = () => {

    return (
        <div class="text_container comming_soon error_body">
            <h1 className="glitch leading-[90%] md:leading-none" data-text="UNTIL NEXT TIME!">UNTIL NEXT TIME!</h1>
            <h3 className='mt-8'>FESTIVAL OVER<br />Thank you for your visit.</h3>
            <div className='h-20'></div>
            <div className='mt-3 flex md:flex-row flex-col space-y-4 md:space-y-0 md:space-x-4 '>
                <a href='/' className='text-center'><button className=' button bg-[#36fdfd] font-chakra' type="button" style={{
                    background
                        : " linear-gradient(45deg, transparent 5%, aqua 5%)", color: "black", boxShadow: "6px 0 0 var(--c_red)"
                }}>GO BACK</button></a>
                <a href="https://www.yepdesk.com/profile/dyuksha" className='text-center' target="_blank"><button className='button bg-c_red font-chakra' type="button">VIEW GALLERY</button></a>
            </div>
            <div className='flex space-x-2 pt-20 item'>
                <div id='0' className='p_btn'>0</div>
                <div id='1' className='p_btn'>1</div>
                <div id='2' className='p_btn'>2</div>
                <div id='3' className='p_btn'>3</div>
                <div id='4' className='p_btn'>4</div>
                <div id='5' className='p_btn'>5</div>
                <div id='6' className='p_btn'>6</div>
                <div id='7' className='p_btn'>7</div>
                <div id='8' className='p_btn'>8</div>
                <div id='9' className='p_btn'>9</div>
            </div>
        </div>
    )
}

export default E404