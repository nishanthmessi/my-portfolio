import React from 'react'

const Contact = () => {
  return ( 
      <div className='flex flex-col justify-center items-center py-14' id='contact'>
        <div>
          <h1 className='sm:text-3xl lg:text-4xl text-3xl font-bold text-center mb-14'>Contact Me</h1>
        </div>
        <div className='flex flex-col justify-center items-center gap-6 max-w-lg px-4'>
          <h1 className='text-2xl font-medium'>Get in touch</h1>
          <p className='text-center font-medium'>Hello there. My inbox is always open, whether you have any question or just want to say 'hi' reach out to me, I'll try my best to get back to you!</p>
        </div>
        <div className="flex justify-center mt-6">
          <a className="btn btn-primary rounded hover:text-white" href="mailto:nisanthrtts@gmail.com" >Say hola</a>
        </div>
      </div>
  )
}

export default Contact