import { motion } from "framer-motion";
import { fadeIn } from '../animation/variants'

const Contact = () => {
  return ( 
      <div className='flex flex-col justify-center items-center py-14' id='contact'>
        <div>
          <motion.h1 
            variants={fadeIn('up')}
            initial='hidden'
            whileInView={'show'}
            className='sm:text-3xl lg:text-4xl text-3xl font-bold text-center mb-14'
          >
            Contact Me
          </motion.h1>
        </div>
        <div>
          <motion.div 
            variants={fadeIn('up')}
            initial='hidden'
            whileInView={'show'}
            className='flex flex-col justify-center items-center gap-6 max-w-lg px-4'
          >
            <h1 className='text-2xl font-medium'>Get in touch</h1>
            <p className='text-center font-medium'>Hello there. My inbox is always open, whether you have any question or just want to say 'hi' reach out to me, I'll try my best to get back to you!</p>
          </motion.div>
          <motion.div 
            variants={fadeIn('up')}
            initial='hidden'
            whileInView={'show'}
            className="flex justify-center mt-6"
          >
            <a className="btn btn-primary rounded hover:text-white" href="mailto:nisanthrtts@gmail.com">Say hola</a>
          </motion.div>
        </div>      
      </div>
  )
}

export default Contact