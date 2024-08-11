import './home.css';
import { easeInOut, motion } from 'framer-motion';
import { Container, Button } from 'react-bootstrap';
import { HabitCard } from './../../components/habit_card/HabitCard';
import { useState } from "react";
import { HabitForm } from './../../components/habitForm/habitForm';
import { useSelector } from 'react-redux';
import { habitSelector } from '../../redux/reducers/habitReducers';




export const Home = () => {

    const [show, setShow] = useState(false);

    const {habits} = useSelector(habitSelector);
    console.log(habits);

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
                        {habits.map((habit, index) => <HabitCard habit={habit} key={index} />)}
                    </div>
                </div>
                <Button variant='danger' className='add-btn' onClick={e=>setShow(true)}>+</Button>
                <HabitForm show={show} setShow={setShow} />
            </Container>
        </motion.div>
    )
}