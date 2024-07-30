
import { easeInOut, motion } from 'framer-motion';


export const Home = () => {
    return (
        <motion.div className="h-100 d-flex flex-column justify-content-center bg-black"
            initial={{x:3000}}
            animate={{x:0}}
            exit={{x:-3000, 
                position:'absolute',
            }}
          transition={{ease: easeInOut, duration: 0.6}}

        >
            <h1>Home Page</h1>
            <p>Welcome to the Home Page</p>
        </motion.div>
    )
}