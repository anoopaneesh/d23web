import React from 'react'
import MemberContainer from '../MemberContainer/MemberContainer'

const TeamContainer = ({team}) => {
    return (
        <div className='flex md:flex-row flex-col gap-5'>
            {team.map(item => <MemberContainer item={item} key={item.name} />
            )}
        </div>
    )
}

export default TeamContainer