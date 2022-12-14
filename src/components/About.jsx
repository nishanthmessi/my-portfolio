import { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn } from '../animation/variants'
import ProfileImg from '../assets/img/project-img/profilePic.jpg'
import {Link} from 'react-scroll'

const About = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  };

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    } 
  }, [control, inView]);

  return (
    <div>
      <section className='pt-24' id='about'>
        <motion.div 
          variants={container}
          initial='hidden'
          whileInView={'show'}
          className='sm:text-3xl lg:text-4xl text-3xl font-bold text-center mb-20'
        >
          <motion.h1
            variants={fadeIn('up')}
            initial='hidden'
            whileInView={'show'}
          >
            About Me
          </motion.h1>
        </motion.div>
        <div className="container mx-auto flex px-10 xl:px-40 md:flex-row flex-col items-center">
          <motion.div 
            variants={fadeIn('up')}
            initial='hidden'
            whileInView={'show'}
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">I'm a Full Stack Web developer</h1>           
            <p className="mb-8 leading-relaxed text-lg font-medium">I enjoy translating designs into responsive, interactive experiences with clean and semantic code. I am passionate about building thoughtful web experiences and care about the details. Other than coding, I watch F1 & play badminton.</p>
            <div className="flex justify-center gap-4">
              <Link
                className='btn inline-flex bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary-focus rounded text-md hover:text-white'
                activeClass="active"
                to="works"
                spy={false}
                smooth={true}
                offset={0}
                duration={650}
                delay={100}
                >view works
              </Link>
              <a
                className='btn inline-flex bg-neutral border-0 py-2 px-6 focus:outline-none hover:text-primary rounded text-md'
                href="https://drive.google.com/file/d/17hmSCLcWJh7op0dEyLoI7p9-9N3NqxRZ/view?usp=sharing"
                target="_blank" 
                >view resume
              </a>
            </div>
          </motion.div>
          <motion.div 
            variants={fadeIn('up')}
            initial='hidden'
            whileInView={'show'}
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          >
            <div className="hover-effect">
              <img className="object-cover object-center rounded grayscale ease-in hover:grayscale-0 hover:duration-300 profile-img" alt="hero" src={ProfileImg} />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About