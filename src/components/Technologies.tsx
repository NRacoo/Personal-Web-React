import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiKalilinux } from "react-icons/si"
import { SiTensorflow } from "react-icons/si"
import { SiArduino } from "react-icons/si"
import {motion} from "framer-motion"


const IconAnimasi = (duration: number) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse" as "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-sky-400 pb-24">
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{ease:"easeInOut"}} className="text-white my-20 text-center text-4xl">Technologies</motion.h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={IconAnimasi(2.5)} initial='initial' animate='animate'  className="rounded-2xl border-4 border-white p-4">
                <RiReactjsLine className=" text-7xl text-cyan-400" />
            </motion.div>
            <motion.div variants={IconAnimasi(3)} initial='initial' animate='animate' className="rounded-2xl border-4 border-white p-4">
                <TbBrandNextjs className=" text-7xl " />
            </motion.div>
            <motion.div variants={IconAnimasi(5)} initial='initial' animate='animate' className="rounded-2xl border-4 border-white p-4">
                <SiTensorflow className=" text-7xl text-orange-400" />
            </motion.div>
            <motion.div variants={IconAnimasi(2)} initial='initial' animate='animate' className="rounded-2xl border-4 border-white p-4">
                <SiKalilinux className=" text-7xl" />
            </motion.div>
            <motion.div variants={IconAnimasi(3)} initial='initial' animate='animate' className="rounded-2xl border-4 border-white p-4">
                <SiArduino className=" text-7xl text-teal-500   " />
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies