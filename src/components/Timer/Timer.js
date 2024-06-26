import React, { useEffect, useState } from 'react'
import "./style.css"
const Timer = ({ openEasterEgg }) => {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    useEffect(() => {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        const countDown = new Date("3/31/2023").getTime(),
            x = setInterval(function () {

                const now = new Date().getTime(),
                    distance = countDown - now;

                setDays(Math.floor(distance / (day)))
                setHours(Math.floor((distance % (day)) / (hour)))
                setMinutes(Math.floor((distance % (hour)) / (minute)))
                setSeconds(Math.floor((distance % (minute)) / second))

                //do something later when date is reached
                if (distance < 0) {
                    document.getElementById("headline").innerText = "It's my birthday!";
                    document.getElementById("countdown").style.display = "none";
                    document.getElementById("content").style.display = "block";
                    clearInterval(x);
                }
                //seconds
            }, 0)
    }, [])
    function handleEasterEgg(event) {
        openEasterEgg(true)
    }
    return (
        <div className="container_cd relative z-5">
            <div id="countdown">
                <ul>
                    <li className='no_drag'><span id="days" onClick={handleEasterEgg}>0</span>days</li>
                    <li className='no_drag'><span id="hours" onClick={handleEasterEgg}>0</span>Hours</li>
                    <li className='no_drag'><span id="minutes" onClick={handleEasterEgg}>0</span>Minutes</li>
                    <li className='no_drag'><span id="seconds" onClick={handleEasterEgg} >0</span>Seconds</li>
                </ul>
            </div>
            <div id="content" className="emoji">
                <span>🥳</span>
                <span>🎉</span>
            </div>
        </div>
    )
}

export default Timer