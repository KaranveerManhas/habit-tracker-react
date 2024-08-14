
import { easeInOut, motion } from 'framer-motion';
import { Container } from 'react-bootstrap';


export const WeekView = () => {

    return (
        <motion.div className="h-100 d-flex justify-content-center align-items-center bg-black text-white"
            initial={{x:3000}}
            animate={{x:0}}
            exit={{x:-3000, 
                position:'absolute',
            }}
          transition={{ease: easeInOut, duration: 0.8}}
        >
            <Container>
                <h1>Week View</h1>
            </Container>
        </motion.div>
    )

}