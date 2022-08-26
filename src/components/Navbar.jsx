import { useState } from 'react'
import NavList from './shared/NavList'
import Logo from '../assets/img/project-img/NM_red.png'
import {motion} from 'framer-motion'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [isActive, setActive] = useState(false)
  
  const handleClick = () => setActive(!isActive)
  
  return (
    <div className='w-full fixed z-50 backdrop-blur-lg'>
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      >
      <nav className="relative container mx-auto p-4">
      <div className="flex items-center justify-between">
        <div>
          
          <Link
          activeClass="active"
          to="home"
          spy={false}
          smooth={true}
          offset={0}
          duration={500}
          delay={100}
          className='hover:text-primary cursor-pointer'
        >
          <img src={Logo} alt="logo" className='w-14 h-14 cursor-pointer mr-10'/>
        </Link>
        </div>
        <div className="hidden space-x-10 md:flex font-bold">
          <NavList/>
        </div>

        <a
          href="https://donate.redcrossredcrescent.org/ua/donate/~my-donation?_cv=1"
          target='_blank'
          rel="noreferrer"
          className="hidden btn btn-sm btn-neutral p-3 pt-1.5 text-white rounded text-xs hover:text-success md:block"
          >Support UA 
        </a>

        <button
          id="menu-btn"
          className={`block hamburger md:hidden focus:outline-none ${isActive ? 'open' : null}`}
          onClick={handleClick}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button> 
      </div>

      <div className="md:hidden">
        <div
          id="menu"
          className={`absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-2xl border-1 ${isActive ? 'flex': 'hidden'}`}
        >
          {/* <NavList/> */}
          
          <Link
          activeClass="active"
          to="about"
          spy={false}
          smooth={true}
          offset={0}
          duration={500}
          delay={100}
          className={`hover:text-primary cursor-pointer ${isActive ? 'flex': 'hidden'}`}
          onClick={handleClick}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="exp"
          spy={false}
          smooth={true}
          offset={0}
          duration={550}
          delay={100}
          className={`hover:text-primary cursor-pointer ${isActive ? 'flex': 'hidden'}`}
          onClick={handleClick}         
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={false}
          smooth={true}
          offset={0}
          duration={600}
          delay={100}
          className={`hover:text-primary cursor-pointer ${isActive ? 'flex': 'hidden'}`}
          onClick={handleClick}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={false}
          smooth={true}
          offset={0}
          duration={650}
          delay={100}
          className={`hover:text-primary cursor-pointer ${isActive ? 'flex': 'hidden'}`}
          onClick={handleClick}
        >
          Works
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={false}
          smooth={true}
          offset={0}
          duration={700}
          delay={100}
          className={`hover:text-primary cursor-pointer ${isActive ? 'flex': 'hidden'}`}
          onClick={handleClick}
        >
          Contact
        </Link>
        </div>        
      </div>    
      </nav>
    </motion.div>
    </div>
  )
}

export default Navbar