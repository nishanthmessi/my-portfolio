import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Skills = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])

  const skillsList = ['react', 'js', 'html-5', 'css-3', 'nodejs', 'express', 'mongodb', 'mysql', 'tailwind', 'sass', 'bootstrap', 'c-sharp', 'git', 'npm', 'vscode', 'netlify', 'figma']

  const icons = skillsList.map((icon, index) => {
    return <img alt="html" className="w-16 h-16  object-center flex-shrink-0 mr-4" src={require(`../assets/img/skills-img/${icon}.png`)} key={index} />
  })

  return (
    <>
      <section id='skills'>
        <div className="container px-5 pt-24 mx-auto max-w-3xl mb-14">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl lg:text-4xl text-3xl font-bold title-font mb-16" data-aos='fade-up'>Skills</h1>
            <p className="px-4 mx-auto leading-relaxed text-base font-medium" data-aos='fade-up'>I have passion for self-learning and strive to improve and challenge my skills to become better at what I do. Below are my skills and technologies I've been learning / working with recently.</p>
          </div>
            <div className="flex flex-wrap items-center justify-center w-full">
              <div className="flex flex-wrap gap-10 lg:px-90 justify-center" data-aos='fade-up'>                
                {icons}
              </div>             
            </div>
          </div>
      </section>
    </>
  )
}

export default Skills