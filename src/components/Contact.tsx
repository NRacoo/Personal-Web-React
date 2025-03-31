import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";
import { Send } from "lucide-react";
import {motion} from 'framer-motion';


const Contact = () => {
    const [message, setMessage] = useState("");


  return (
    <div className="border-b border-sky-400 pb-20">
        <motion.h2 whileInView ={{opacity:1, y:0}} initial={{opacity:0, y:100 }} transition={{ease:'easeInOut'}} className="my-10 text-center text-4xl text-white">Get in Touch</motion.h2>
        <div className="bg-white rounded-xl p-6 backdrop-blur-sm">

            

            <div className="border rounded-lg border-gray-500 py-10 relative">
                <div className='flex items-center '>
                <input type='text' placeholder='' className='w-full text-black placeholder-gray-400  p-3 pr-12  focus:outline-none'
                value = {message}
                onChange={(e) => setMessage(e.target.value)}/>
                <button className="absolute right-2 bottom-2 bg-blue-600 p-3 rounded-md hover:bg-gray-600 transition flex items-center">
                                <Send className="text-white" size={20} />
                </button>

                </div>

                {!message && (
                        <div className="absolute left-8 top-10 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                            <TypeAnimation
                            sequence={[
                                "Ask me anything",
                                1000,
                                "Apa kebiasaan Aria?",
                                1000,
                                "Apa yang disukai Aria?",
                                1000,
                                "Hobi Aria apa?",
                                1000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                            />
                        </div>
                        )}
            </div>
        </div>
    </div>
  )
}

export default Contact