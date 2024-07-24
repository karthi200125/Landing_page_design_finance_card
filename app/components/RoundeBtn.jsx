import React from 'react'
import Magnete from '../animations/Magnet'

const RoundeBtn = ({ icon, className }) => {
    return (
        <Magnete>
            <div className={`custom-cursor-target border w-[40px] h-[40px] flex items-center justify-center rounded-full ${className} z-[99]`}>
                <div>
                    {icon}
                </div>
            </div>
        </Magnete>
    )
}

export default RoundeBtn