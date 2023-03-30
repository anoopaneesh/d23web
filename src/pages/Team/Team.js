import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import MemberContainer from '../../components/MemberContainer/MemberContainer'
import Navbar from '../../components/Navbar/Navbar'
import TeamContainer from '../../components/TeamContainer/TeamContainer'
import { useFirebaseContext } from '../../context/FirebaseContext'
import { useNavContext } from '../../context/NavContext'




const Team = () => {
    const { changeCurrentPage } = useNavContext()
    const { getTeamData } = useFirebaseContext()
    const [teams, setTeams] = useState([])
    const [currentTeam, setCurrentTeam] = useState("Web Team")
    useEffect(() => {
        document.documentElement.style.setProperty('--heading', '#fd0130')
        changeCurrentPage('teams')
        getTeamData().then((data) => {
            setTeams(data)
        })
        return () => { document.documentElement.style.setProperty('--heading', '#02d7f2') }
    }, [])
    const team = teams.reduce((obj, item) => {
        obj[item.team] = obj[item.team] || []
        obj[item.team].push(item)
        return obj
    }, {})
    console.log(team)
    return (
        <div className='font-chakra text-white min-h-screen'>
            <Navbar />
            <div className='w-full flex justify-center mb-[32px] pt-32'>
                <div className='text-4xl md:text-7xl text-heading mb-8 font-bold flex flex-col md:flex-row md:justify-start md:items-center justify-center items-center'>
                    <h2 className='md:-translate-x-5'>Team</h2>
                    <h3 className='text-transparent text_stroke'>D'23</h3>
                </div>
            </div>
            <div className='w-10/12 md:w-1/2 m-auto pb-20 flex flex-col items-center'>
                <div className='flex pb-10 space-x-2 w-full'>
                    {Object.keys(team).sort().map(key => {
                        return <div onClick={() => setCurrentTeam(key)} className={`text-center w-full md:w-auto border-2 cursor-pointer border-c_red px-4 py-2 ${currentTeam == key && 'bg-c_red'}`}>{key}</div>
                    })}
                </div>
                {team[currentTeam] && <TeamContainer team={team[currentTeam]} />}
            </div>
            <Footer />
        </div>
    )
}

export default Team