import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiDocker, SiExpress, SiFirebase, SiGit, SiKalilinux, SiPostgresql, SiPostman, SiSocketdotio } from "react-icons/si"
import { SiTensorflow } from "react-icons/si"
import { SiArduino } from "react-icons/si"
import { RiGithubFill } from "react-icons/ri"
import { SiNodedotjs } from "react-icons/si"
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

const techIcons = [
    { icon: RiReactjsLine, color: "text-cyan-400", duration: 2.5 },
    { icon: TbBrandNextjs, color: "", duration: 3 },
    { icon: SiTensorflow, color: "text-orange-400", duration: 5 },
    { icon: SiKalilinux, color: "", duration: 2 },
    { icon: SiArduino, color: "text-teal-500", duration: 3 },
    { icon: RiGithubFill, color: "text-primary", duration: 3 },
    { icon: SiNodedotjs, color: "text-[#339933]", duration: 3 },
    { icon: SiExpress, color: "", duration: 3 },
    { icon: SiDocker, color: "", duration: 3 },
    { icon: SiSocketdotio, color: "text-white", duration: 3 },
    { icon: SiPostgresql, color: "text-cyan-400", duration: 3 },
    { icon: SiPostman, color: "text-orange-400", duration: 3 },
    { icon: SiGit, color: "text-orange-600", duration: 3 },
    { icon: SiFirebase, color: "text-orange-400", duration: 3 },
  ] as const;
  

const Technologies = () => {
  return (
    <div className="border-b border-sky-400 pb-24">
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{ease:"easeInOut"}} className="text-white my-20 text-center text-4xl">Technologies</motion.h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
                {techIcons.map(({ icon: Icon, color, duration }, idx) => (
                <motion.div
                key={idx}
                variants={IconAnimasi(duration)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-white p-4"
                >
                <Icon className={`text-7xl ${color}`} />
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Technologies