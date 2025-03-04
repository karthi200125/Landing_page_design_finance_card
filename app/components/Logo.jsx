import React from 'react'
import logo from '../../public/logo.png'
import TextAnimation from '../animations/TextAnimation'

const Logo = ({ type }) => {
    return (
        <div className='flex flex-row items-center gap-1'>
            <img src={logo.src} alt="" className={`w-20 h-20 object-contain ${type === 'footer' && "invert"}`} />
            <h2> <TextAnimation text="Capo" /></h2>
        </div>
    )
}

export default Logo