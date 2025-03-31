import {motion} from 'framer-motion';

const About = () => {
  return (
    <div id ="about"className='border-b border-sky-400 pb-4 '>
        <motion.h2 whileInView={{opacity:1, y:0 }} initial={{opacity:0, y:50}} transition={{duration:0.3, ease:"easeInOut"}} 
        className='my-18 text-center text-white text-4xl'>About <span className="text-blue-950">Me</span>
        </motion.h2>
        <div className="flex flex-wrap ">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <motion.img whileInView={{opacity:1, y:0}} initial={{opacity:0, y:50
                    }} transition={{duration:0.3, ease:"easeInOut"}} src="/imageDiri.jpg" alt="about" className="rounded-2xl" />
                </div>
            </div>
                <div className="w-full lg:w-1/2 ">
                    <div className="flex justify-center lg:justify-start">
                        <motion.p whileInView={{opacity:1, y:0}} initial={{opacity:0 , y:100}} transition={{duration:0.3 , ease:"easeInOut"}} className="text-white lg:my-10 max-w-xl py-6 ">Hola! I am a Telecommunications Engineering student at Telkom University with a strong passion for Cybersecurity, IoT, and Machine Learning.
                        Currently, I am gaining hands-on experience as a research intern at Cyber Physical System Labs, where I explore innovative solutions and cutting-edge technologies in these fields.
                        My academic journey and internship experience have equipped me with strong analytical and problem-solving skills, allowing me to approach challenges with a structured and logical mindset.<br/>
                        Beyond technical expertise, I am a dedicated and hardworking individual who is highly focused on achieving goals and delivering quality results. I thrive in collaborative environments and excel in teamwork, as I believe that effective communication and cooperation are essential for success in any project. 
                        My ability to stay focused and committed to a task ensures that I can efficiently manage responsibilities and work towards innovative solutions. With a strong eagerness to learn and adapt, I am always looking for opportunities to enhance my skills and contribute to advancements in technology. </motion.p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About