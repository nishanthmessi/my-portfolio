import {GitHub, Instagram, Linkedin, Twitter} from 'react-feather'
import myLinks from '../../data/myLinks'

const Socials = () => {
  const links = myLinks

  return (
    <>
    <div className='flex justify-center items-center my-10 gap-4 '>
      <a href={links.github} target='_blank' rel="noreferrer" className='transition ease-in-out delay-150 hover:text-primary hover:-translate-y-2 hover:scale-104 duration-300'>
        <GitHub className='h-8 w-10'/>
      </a>
      <a href={links.linkedin} target='_blank' rel="noreferrer" className='transition ease-in-out delay-150 hover:text-primary hover:-translate-y-2 hover:scale-104 duration-300'>
        <Linkedin className='h-8 w-10'/>
      </a>
      <a href={links.twitter} target='_blank' rel="noreferrer" className='transition ease-in-out delay-150 hover:text-primary hover:-translate-y-2 hover:scale-104 duration-300'>
        <Twitter className='h-8 w-10'/>
      </a>
      <a href={links.insta} target='_blank' rel="noreferrer" className='transition ease-in-out delay-150 hover:text-primary hover:-translate-y-2 hover:scale-104 duration-300'>
        <Instagram className='h-8 w-10'/>
      </a>    
    </div>
    </>
  )
}

export default Socials