
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';



const HeroSection = () => {
    return (
        <section className="w-full min-h-screen">
            <div className='flex flex-wrap'>
                <div className='grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-12'>
                    <div className='col-span-7 place-self-center text-center sm:text-left'>
                        <motion.h1 initial={{opacity:0, x:-100}} animate ={{opacity:1, x:0}} transition ={{duration: 0.5 , delay:0.5 }}  className='font-extrabold text-4xl mb-4 lg:text-6xl text-white'>
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-stone-400 to-white'> Hello I&apos;m, </span> <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Aria',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'UI/UX Designer',
                                1000,
                                'Front-end Dev',
                                1000,
                                'IoT Enthusiast',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            />
                        </motion.h1>
                        <motion.p initial={{opacity:0, x:-100}} animate= {{opacity:1, x:0}} transition={{duration:0.5 , delay: 0.5}}  className='text-white text-base lg:text-xl mb-6'>
                        I&apos;m proficient in [ list of relevant skills, e.g., AWS, Arduino, Figma ]. Looking for opportunities to collaborate on 
                        projects that involve building scalable cloud-based applications with intuitive user interfaces.
                        </motion.p>
                        <div className='flex flex-col gap-2 mb-6'>
                            <motion.h3 initial={{opacity:0, x:-100}} animate= {{opacity:1, x:0}} transition={{duration:0.5 , delay: 0.5}} className='font-bold text-2xl text-white '>Social</motion.h3>
                                <div className='flex gap-4 justify-center sm:justify-start  md:justify-start'>
                                <motion.a initial={{opacity:0, x:-100}} animate= {{opacity:1, x:0}} transition={{duration:0.5 , delay: 0.5}}  href="https://instagram.com/aariarachman" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="White" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                                </motion.a>
                                <motion.a initial={{opacity:0, x:-100}} animate= {{opacity:1, x:0}} transition={{duration:0.5 , delay: 0.5}} href ="https://linkedin.com/in/ariaaurarachman">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="White" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </motion.a>
                                <motion.a initial={{opacity:0, x:-100}} animate= {{opacity:1, x:0}} transition={{duration:0.5 , delay: 0.5}} href="https://x.com/NRacoooo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
                                    </path></svg>
                                </motion.a>
                        </div>

                            <div className='flex flex-col sm:flex-row gap-2'>
                                <a href="https://youtu.be/dQw4w9WgXcQ?si=eF_533gvYBaorTcy">
                                
                                    <motion.button initial={{opacity:0, x:-100}} animate= {{opacity:1, x:0}} transition={{duration:0.5 , delay: 0.5}}  className='rounded-full w-full sm:w-fit px-6 py-2 bg-white text-blue-800 font-semibold hover:bg-slate-200'> Collabs </motion.button>
                                </a>
                                
                                <a href="./Aria-Cv.pdf">
                                    <motion.button initial={{opacity:0, x:-100}} animate= {{opacity:1, x:0}} transition={{duration:0.5 , delay: 0.5}} className='rounded-full w-full sm:w-fit px-6 py-2 border border-white text-white '>Downloads My CV</motion.button>
                                </a>
                            </div>
                            

                        </div>

                        
                    </div>
                        
                        <div className='col-span-1 lg:col-span-5 md:col-span-5 place-self-center mt-4 lg:mt-0 '>
                            <div className='relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px]'>
                                <motion.img initial ={{opacity:0 , x:100}} animate={{opacity:1 , x:0}} transition={{duration:0.5 , delay:0.5, ease:"easeInOut"}} src="./image.png" alt="" />
                            </div>
                        </div>
                </div>
            </div>

        </section>
    )
}

export default HeroSection