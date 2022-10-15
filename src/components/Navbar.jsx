import { useState } from 'react'
import {motion} from 'framer-motion'
import NavItems from './shared/NavItems'
import NavSlider from './NavSlider'
import Logo from '../assets/img/project-img/NM_red.png'
import { Link as Scroll } from 'react-scroll'
import { Menu, X } from 'react-feather'


const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  return (
    <div className='w-full fixed z-50 bg-white'>
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
          <Scroll
          activeClass="active"
          to="home"
          spy={false}
          smooth={true}
          offset={0}
          duration={500}
          delay={100}
          className='hover:text-primary cursor-pointer'
          onClick={() => setNavMobile(false)}
        >
          <img src={Logo} alt="logo" className='w-14 h-14 cursor-pointer mr-10'/>
        </Scroll>
        </div>

        <div className="hidden space-x-10 md:flex font-bold">
          <NavItems/>
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
          className={`block btn btn-circle pl-2.5 md:hidden focus:outline-none`}
          onClick={() => setNavMobile(!navMobile)}
        >
          {!navMobile ? <Menu/> : <X/> }
        </button> 

        <div
          className={`${navMobile ? 'max-h-full' : 'max-h-0 overflow-hidden'} ${
            isActive
              ? 'top-[80px] lg:top-[110px]'
              : 'top-[80px] lg:top-[150px]'
          } fixed left-0 z-10 w-full h-full bg-white transition-all duration-300`}
        >
          <NavSlider setNavMobile={setNavMobile}/>
        </div>
      </div>    
      </nav>
    </motion.div>
    </div>
  )
}

export default Navbar