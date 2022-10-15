import NavList from './shared/NavList'
import Socials from './shared/Socials'

const NavSlider = ({ setNavMobile }) => {
  return (
    <>
      <nav className='w-full h-full flex flex-col justify-evenly overflow-hidden'>
        <ul className='flex flex-col justify-center items-center gap-y-6 py-6 mb-8'>
          <NavList setNavMobile={setNavMobile}/>
        </ul>
        <div className='text-2xl'>
          <Socials/>
        </div>
      </nav>
    </> 
  )
}

export default NavSlider