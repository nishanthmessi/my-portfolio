import ProfileImg from '../assets/img/project-img/profilePic.jpg'
import {Link} from 'react-scroll'

const About = () => {
  return (
    <div>
      <section className='pt-24' id='about'>
        <div className='sm:text-3xl lg:text-4xl text-3xl font-bold text-center mb-20'>
          <h1>About Me</h1>
        </div>
        <div className="container mx-auto flex px-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">I'm an aspiring developer</h1>           
            <p className="mb-8 leading-relaxed font-medium">I enjoy translating designs into responsive, interactive experiences with clean and semantic code. I am passionate about building thoughtful web experiences and care about the details. Other than coding, I watch F1 & play badminton.</p>
            <div className="flex justify-center">
              <Link
                className='btn inline-flex bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary-focus rounded text-md hover:text-white'
                activeClass="active"
                to="works"
                spy={false}
                smooth={true}
                offset={0}
                duration={650}
                delay={100}
                >view works
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src={ProfileImg} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About