import React from 'react'

const RoundeBtn = ({ icon, className }) => {
    return (
        <div className={`border w-[60px] h-[60px] flex items-center justify-center rounded-full ${className}`}>
            <div>
                {icon}
            </div>
        </div>
    )
}

export default RoundeBtn