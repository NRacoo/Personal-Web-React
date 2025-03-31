    "use client"

    import { motion } from "framer-motion"

    export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden -z-10">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-400" />

        {/* Animated overlay gradients */}
        <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-700/30 to-blue-500/0"
            animate={{
            opacity: [0.4, 0.6, 0.4],
            x: [0, 20, 0],
            }}
            transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            }}
        />

        <motion.div
            className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-blue-400/0"
            animate={{
            opacity: [0.3, 0.5, 0.3],
            y: [0, 15, 0],
            }}
            transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            delay: 0.5,
            }}
        />

        <motion.div
            className="absolute inset-0 bg-gradient-to-bl from-blue-500/0 to-blue-700/20"
            animate={{
            opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
            duration: 7,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            delay: 1,
            }}
        />
        </div>
    )
    }

