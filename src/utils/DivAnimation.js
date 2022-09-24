import { motion } from "framer-motion"

const variants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
}

const DivAnimation = ({ children }) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
        >
            {children}
        </motion.div>
    )
}

export default DivAnimation