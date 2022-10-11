import { useState } from 'react'
import NavList from './shared/NavList'
import NavSlider from './NavSlider'
import Logo from '../assets/img/project-img/NM_red.png'
import {motion} from 'framer-motion'
import { Link } from 'react-scroll'
import { Menu } from 'react-feather'

const Navbar = () => {
  const [isShown, setIsShown] = useState(false)

  const handleClick = () => {
    setIsShown(current => !current)
  }
  
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
          className={`block btn btn-circle pl-2.5 md:hidden focus:outline-none ${isShown ? 'open' : null}`}
          onClick={handleClick}
        >
          <Menu className='socialIcons'/>
          {isShown && <NavSlider/>}
        </button> 
      </div>    
      </nav>
    </motion.div>
    </div>
  )
}

export default Navbar