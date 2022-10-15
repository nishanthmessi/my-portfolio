import { Link } from 'react-scroll'

const NavItems = () => {
  return (
    <>
        <Link
          activeClass="active"
          to="about"
          spy={false}
          smooth={true}
          offset={0}
          duration={500}
          delay={100}
          className='hover:text-primary cursor-pointer'
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="exp"
          spy={false}
          smooth={true}
          offset={0}
          duration={550}
          delay={100}
          className='hover:text-primary cursor-pointer'
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={false}
          smooth={true}
          offset={0}
          duration={600}
          delay={100}
          className='hover:text-primary cursor-pointer'
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={false}
          smooth={true}
          offset={0}
          duration={650}
          delay={100}
          className='hover:text-primary cursor-pointer'
        >
          Works
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={false}
          smooth={true}
          offset={0}
          duration={700}
          delay={100}
          className='hover:text-primary cursor-pointer'
        >
          Contact
        </Link>
    </>
  )
}

export default NavItems