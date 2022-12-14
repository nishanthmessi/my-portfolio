import { motion } from "framer-motion";
import { fadeIn } from '../animation/variants'
import tcsLogo from '../assets/img/project-img/logo-tcs.png'

const Experience = () => {
  return (
    <div>
      <section id='exp'>
      <div className="container px-5 pt-24 mx-auto max-w-5xl">
        <div className="flex flex-col text-center w-full">
          <motion.h1 
            variants={fadeIn('up')}
            initial='hidden'
            whileInView={'show'}
            className="sm:text-3xl lg:text-4xl text-3xl font-bold title-font mb-20"
          >
            Where I've Worked
          </motion.h1>
          <div className="flex flex-wrap items-center justify-center p-2 w-full">
            <div className="flex flex-wrap gap-10 lg:px-90 justify-center">
              <motion.div
                variants={fadeIn('up')}
                initial='hidden'
                whileInView={'show'}
              >
                <img alt="html" className="w-full h-14 flex-shrink-0 mr-4" src={tcsLogo} />
                <p className='badge badge-neutral text-white font-medium my-2'>2020 - 2022</p>
              </motion.div>              
            </div>          
          </div>
          <motion.div
            variants={fadeIn('up')}
            initial='hidden'
            whileInView={'show'}
          >
            <p className="lg:w-2/3 mx-auto leading-relaxed text-center mt-4 text-lg font-medium">I am an experienced developer. So far I wrote modern, performant, maintainable code for a diverse array of client and internal projects.</p>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-center mt-4 text-lg font-medium">Automating and creating ideas to improve the application standard and stability.</p>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-center mt-4 text-lg font-medium">Communicate with multi-disciplinary teams of engineers, developers and clients on a daily basis.</p>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-center mt-4 text-lg font-medium">Well-organised person, problem solver, independent employee and a team player as well.</p>
          </motion.div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Experience