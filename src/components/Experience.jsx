import React from 'react'
import tcsLogo from '../assets/img/project-img/logo-tcs.png'

const Experience = () => {
  return (
    <div>
      <section id='exp'>
      <div className="container px-5 pt-24 mx-auto max-w-5xl">
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-3xl lg:text-4xl text-3xl font-bold title-font mb-20">Where I've Worked</h1>
          <div className="flex flex-wrap items-center justify-center p-2 w-full">
            <div className="flex flex-wrap gap-10 lg:px-90 justify-center">
              <div>
                <img alt="html" className="w-full h-14 flex-shrink-0 mr-4" src={tcsLogo} />
                <p className='badge badge-neutral text-white font-medium my-2'>2020 - Present</p>
              </div>              
            </div>          
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-start mt-4 font-medium">I am an experienced developer. So far I wrote modern, performant, maintainable code for a diverse array of client and internal projects.</p>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-start mt-4 font-medium">Automating and creating ideas to improve the application standard and stability.</p>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-start mt-4 font-medium">Communicate with multi-disciplinary teams of engineers, developers and clients on a daily basis.</p>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-start mt-4 font-medium">Well-organised person, problem solver, independent employee and a team player as well</p>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Experience