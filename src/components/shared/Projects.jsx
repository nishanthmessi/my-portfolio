import {ExternalLink, GitHub} from 'react-feather'

const Projects = ({item}) => {
  return (
    <>
      <div className="card card-compact max-w-xs bg-base-100 shadow-xl border-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-104 duration-300">
        <figure><img src={item.imgUrl} alt="img" /></figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p className='font-medium text-gray-500'>{item.desc}</p>
          <div className="card-actions justify-end">
            { 
              item.projectUrl === ''  ? '' : 
              <a href={item.projectUrl} target='_blank' rel='noreferrer'>
                {<ExternalLink className='socialIcons'/>}
              </a>
            }
            <a href={item.githubUrl} target='_blank' rel='noreferrer'>
              <GitHub className='socialIcons'/>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects