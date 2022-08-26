import Projects from './shared/Projects'
import myLinks from '../data/myLinks'

const MyWork = ({ projectData }) => {
  const links = myLinks

  return (
    <>
    <section className='mb-10 pt-14' id='works'>
      <div className='flex flex-col items-center justify-center py-8'>
        <h1 className='sm:text-3xl lg:text-4xl text-3xl font-bold title-font mb-8'>My Works</h1>
        <p className='text-2xl mt-10 font-medium'>Here's few things I've build</p>
      </div>
      <div className='flex flex-wrap items-center gap-8 justify-center px-10'>
        {projectData.map((project) => (
          <Projects key={project.id} item={project}/>
        ))}
      </div>
      <div className='flex justify-center mt-10'>
        <a href={links.repos} target='_blank' className='btn btn-neutral btn-sm hover:text-primary rounded' rel="noreferrer">view all</a>
      </div>   
    </section>
    </>
  )
}

export default MyWork