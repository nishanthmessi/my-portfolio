import { motion } from "framer-motion";
import { fadeIn } from '../animation/variants'

const Skills = () => {
  const skillsList = ['react', 'js', 'html-5', 'css-3', 'nodejs', 'express', 'mongodb', 'mysql', 'tailwind', 'sass', 'bootstrap', 'c-sharp', 'git', 'npm', 'vscode', 'netlify', 'figma']

  const icons = skillsList.map((icon, index) => {
    return <img alt="html" className="w-16 h-16  object-center flex-shrink-0 mr-4" src={require(`../assets/img/skills-img/${icon}.png`)} key={index} />
  })

  return (
    <>
      <section id='skills'>
        <div className="container px-5 pt-24 mx-auto max-w-3xl mb-14">
          <div className="flex flex-col text-center w-full mb-20">
            <motion.h1 
              variants={fadeIn('up')}
              initial='hidden'
              whileInView={'show'}
              className="sm:text-3xl lg:text-4xl text-3xl font-bold title-font mb-16">Skills</motion.h1>
            <motion.p 
              variants={fadeIn('up')}
              initial='hidden'
              whileInView={'show'}
              className="px-4 mx-auto leading-relaxed text-base font-medium">I have passion for self-learning and strive to improve and challenge my skills to become better at what I do. Below are my skills and technologies I've been learning / working with recently.</motion.p>
          </div>
            <div className="flex flex-wrap items-center justify-center w-full">
              <motion.div 
                variants={fadeIn('up')}
                initial='hidden'
                whileInView={'show'}
                className="flex flex-wrap gap-10 lg:px-90 justify-center">                
                {icons}
              </motion.div>             
            </div>
          </div>
      </section>
    </>
  )
}

export default Skills