import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import './E404.css'





const E404 = () => {

    var x = "";
    const colours = ["#F11", "#F50", "#FA0", "#FF0", "#5F0", "#0F5", "#0FA", "#0FF", "#0AF", "#00F"];
    const seccolours = ["#0EF", "#FF0", "#FFF", "#F00", "#FFF", "#040", "#00F", "#F11", "#FFA", "#F00"];
    function find(y) {
        x += y;
        document.documentElement.style.setProperty('--heading', colours[parseInt(y)]);
        document.documentElement.style.setProperty('--c_red', seccolours[parseInt(y)]);
        let el = document.querySelector(".p_btn");
        let tbox = document.getElementById("t_box");
        let z = x.length;
        if (z > 2) {
            if (x[z - 1] == '0' && x[z - 2] == '0' && x[z - 3] == '0') {
                x = "";
                tbox.innerHTML += "&nbsp;|&nbsp;"
            }

        }
        el.classList.remove("warning");
        if (z > 8) {
            el.classList.add("warning");
            tbox.innerHTML += "&nbsp|&nbsp;"
            x = "";
        }
        // test deploy8
        if (validate_hash(x)) {
            window.open(hash_str("u}G<<{vy:{r:vzr;{ryvs;n}}<"));
        }
        tbox.innerHTML += x.charAt(x.length - 1);
        if (tbox.innerHTML.length > 100) tbox.innerHTML = "";
    }

    function hash_X(str) {
        let x = parseInt(str);
        let y = x * 950;
        y = parseInt(x * (22 / 3 - 4) % x + 2 * (766 % 2));
        return parseInt(y).toString();
    }

    function validate_hash(str) {
        if (hash_X(str) == "690667") { return true }
        else return false;
    }

    function hash_str(str) {
        var string = "";
        for (var i = 0; i < str.length; i++) {
            var temp = str.charAt(i);
            if (temp !== " " || temp !== "!" || temp !== "?") {
                string += String.fromCharCode(str.charCodeAt(i) - 13);
            } else {
                string += temp;
            }
        }
        return string;
    }



    return (
        <div class="text_container comming_soon error_body">
            <h1 className="glitch no_drag leading-[90%] md:leading-none" data-text="UNTIL NEXT TIME!">UNTIL NEXT TIME!</h1>
            <h3 className='mt-8'>FEST OVER<br />Thank you for your visit.</h3>
            <div className='h-20'></div>
            <div className='mt-3 flex md:flex-row flex-col space-y-4 md:space-y-0 md:space-x-4 '>
                <a href='/' className='text-center'><button className=' button bg-[#36fdfd] font-chakra' type="button" style={{
                    background
                        : " linear-gradient(45deg, transparent 5%, var(--heading) 5%)", color: "black", boxShadow: "6px 0 0 var(--c_red)"
                }}>GO BACK</button></a>
                <a href="/error" className='text-center'><button className='button bg-c_red font-chakra' type="button" style={{
                    background
                        : " linear-gradient(45deg, transparent 5%, var(--heading) 5%)", color: "black", boxShadow: "6px 0 0 var(--c_red)"
                }}>VIEW GALLERY</button></a>
            </div>
            <div className='flex space-x-2 pt-20 item'>
                <div onClick={() => find('0')} className='p_btn hover:bg-[#F00]'>0</div>
                <div onClick={() => find('1')} className='p_btn hover:bg-[#F50]'>1</div>
                <div onClick={() => find('2')} className='p_btn hover:bg-[#Fa0]'>2</div>
                <div onClick={() => find('3')} className='p_btn hover:bg-[#FF0]'>3</div>
                <div onClick={() => find('4')} className='p_btn hover:bg-[#5F0]'>4</div>
                <div onClick={() => find('5')} className='p_btn hover:bg-[#0F0]'>5</div>
                <div onClick={() => find('6')} className='p_btn hover:bg-[#0Fa]'>6</div>
                <div onClick={() => find('7')} className='p_btn hover:bg-[#0FF]'>7</div>
                <div onClick={() => find('8')} className='p_btn hover:bg-[#0aF]'>8</div>
                <div onClick={() => find('9')} className='p_btn hover:bg-[#00F]'>9</div>
            </div>
            <div id='t_box' className="fixed w-[200px] h-[16px] text-[10px] bottom-1 right-1 text-right text-heading"></div>
        </div>
    )
}

export default E404