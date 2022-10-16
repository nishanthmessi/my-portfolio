import { motion } from "framer-motion";
import { fadeIn } from '../animation/variants'
import Projects from './shared/Projects'
import myLinks from '../data/myLinks'

const MyWork = ({ projectData }) => {
  const links = myLinks

  return (
    <>
    <section className='mb-10 pt-14' id='works'>
      <div className='flex flex-col items-center justify-center py-8'>
        <motion.h1 
          variants={fadeIn('up')}
          initial='hidden'
          whileInView={'show'}
          className='sm:text-3xl lg:text-4xl text-3xl font-bold title-font mb-8'
        >
          My Works
        </motion.h1>
        <motion.p 
          variants={fadeIn('up')}
          initial='hidden'
          whileInView={'show'}
          className='text-2xl mt-10 font-medium'
        >
          Here's few things I've build
        </motion.p>
      </div>
      <motion.div 
        variants={fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        className='flex flex-wrap items-center gap-8 justify-center px-10 2xl:mx-96'
      >
        {projectData.map((project) => (
          <Projects key={project.id} item={project}/>
        ))}
      </motion.div>
      <motion.div 
        variants={fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        className='flex justify-center mt-10'
      >
        <a href={links.repos} target='_blank' className='btn btn-neutral btn-sm hover:text-primary rounded' rel="noreferrer">view all</a>
      </motion.div>   
    </section>
    </>
  )
}

export default MyWork