import Projects from './shared/Projects'
import myLinks from '../data/myLinks'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const MyWork = ({ projectData }) => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])

  const links = myLinks

  return (
    <>
    <section className='mb-10 pt-14' id='works'>
      <div className='flex flex-col items-center justify-center py-8'>
        <h1 className='sm:text-3xl lg:text-4xl text-3xl font-bold title-font mb-8' data-aos='fade-up'>My Works</h1>
        <p className='text-2xl mt-10 font-medium'  data-aos='fade-up'>Here's few things I've build</p>
      </div>
      <div className='flex flex-wrap items-center gap-8 justify-center px-10' data-aos='fade-up'>
        {projectData.map((project) => (
          <Projects key={project.id} item={project}/>
        ))}
      </div>
      <div className='flex justify-center mt-10' data-aos='fade-up'>
        <a href={links.repos} target='_blank' className='btn btn-neutral btn-sm hover:text-primary rounded' rel="noreferrer">view all</a>
      </div>   
    </section>
    </>
  )
}

export default MyWork