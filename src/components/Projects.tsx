
import {PROJECTS} from '../type';
import {motion} from 'framer-motion';

const Projects = () => {
  return (
    <div id="projects" className="border-b border-sky-400 pb-4">
        <motion.h2 whileInView={{opacity:1 , y:0}} initial= {{opacity:0 , y:100}} transition={{ease:"easeInOut"}} className="text-white text-center my-18 text-4xl">Projects</motion.h2>
        <div className=''>
          {PROJECTS.map((project, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
              <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{ease:"easeInOut"}} className=' md:w-1/4 lg:w-1/4'>
                <img src={project.image} alt={project.title} width={200} height={250} 
                className='mb-6 rounded'/>
              </motion.div>
              <div className='w-full max-w-xl lg:w-3/4'>
                <motion.h6 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{ease:"easeInOut"}} className='mb-2 text-white font-semibold'>{project.title}</motion.h6>
                <motion.p whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{ease:"easeInOut"}} className='mb-4 text-neutral-100'>{project.description}</motion.p>
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map((tech, index) => (
                      <motion.span whileHover={{scale:1.1 , y:-5 }}  whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{ease:"easeInOut"}} key={index} className='mr-2 bg-white rounded px-2 py-1 text-sm font-medium text-blue-900 '>{tech}</motion.span>
                    ))}
                  </div>
              </div>
            </div>
          )) }
        </div>
    </div>
  )
}

export default Projects