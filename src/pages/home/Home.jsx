import './home.css';
import { easeInOut, motion } from 'framer-motion';
import { Container, Button } from 'react-bootstrap';
import { HabitCard } from './../../components/habit_card/HabitCard';


export const Home = () => {
    return (
        <motion.div className="h-100 d-flex justify-content-center align-items-center bg-black text-white"
            initial={{x:3000}}
            animate={{x:0}}
            exit={{x:-3000, 
                position:'absolute',
            }}
          transition={{ease: easeInOut, duration: 0.8}}
        >
            <Container className='h-100 position-relative'>
                <div className='brand'>
                    <h2 className='fw-bolder pt-4 p-2 text-start'>Habit<span style={{color: "#dc3545"}}>Track</span></h2>
                    <hr />
                </div>
                <div className="habit-body h-100">
                    <h4 className='text-start p-2 heading'>Detail View</h4>
                    <div className="habits-container mt-5 h-100">
                        <HabitCard />
                    </div>
                </div>
                <Button variant='danger' className='add-btn'>+</Button>
            </Container>
        </motion.div>
    )
}