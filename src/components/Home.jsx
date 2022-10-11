import {motion} from 'framer-motion'
import { Link } from 'react-scroll'
import coffeeCup from '../assets/img/project-img/coffee-cup.png'
import Socials from './shared/Socials'

const Home = () => {
  return (
    <>     
    <div className="flex flex-col items-center justify-center z-20 h-screen" id='home'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
      }}
      >
        <p className='xl:text-3xl md:text-2xl text-2xl font-bold text-center'>G'day, I'm</p>
        <h1 className='xl:text-8xl md:text-6xl text-6xl font-bold'>Nisanth</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.7,
          ease: [0, 0.71, 0.2, 1.01]
      }}
      >
        <p className='xl:text-3xl md:text-2xl text-2xl font-bold my-4 px-2 text-center'>I build things for the web and I love <img src={coffeeCup} alt="coffee-cup" className='inline mb-2 h8 w-8'/> 
        </p>  
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.9,
          ease: [0, 0.71, 0.2, 1.01]
      }}
      >
      <Link className='btn btn-primary rounded hover:text-white'
          activeClass="active"
          to="contact"
          spy={false}
          smooth={true}
          offset={0}
          duration={700}
          delay={100}
        >
          Contact Me
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01]
      }}
      >
        <Socials/>
      </motion.div>    
    </div>
    </>
  )
}

export default Home