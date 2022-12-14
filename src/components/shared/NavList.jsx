import { Link } from 'react-scroll'

const NavList = ({ setNavMobile }) => {
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
          className='hover:text-primary cursor-pointer font-bold'
          onClick={() => setNavMobile(false)}
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
          className='hover:text-primary cursor-pointer font-bold'
          onClick={() => setNavMobile(false)}
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
          className='hover:text-primary cursor-pointer font-bold'
          onClick={() => setNavMobile(false)}
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
          className='hover:text-primary cursor-pointer font-bold'
          onClick={() => setNavMobile(false)}
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
          className='hover:text-primary cursor-pointer font-bold'
          onClick={() => setNavMobile(false)}
        >
          Contact
        </Link>
    </>
  )
}

export default NavList