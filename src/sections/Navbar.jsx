import React from 'react'
import { useState } from 'react'

const NavItems = () => {
    return (
        <ul className='nav-ul'>
            {
                
            }

        </ul>
    )

}

const Navbar = () => {
    const [isopen, setIsopen] = useState(false)

    const toggleMenu = () => {
        setIsopen((prevIsOpen) => !prevIsOpen)
    }


  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-5 mx-auto c-space'>
            <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Kaith
            </a>
            <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label='toggle menu'>
                <img src={isopen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className='w-6 h-6'/>
            </button>
            <nav className='sm:flex hidden'>

            </nav>

        </div>
      </div>
    </header>
  )
}

export default Navbar
