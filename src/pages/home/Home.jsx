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
    const { habits } = useSelector(habitSelector);

    return (
        <motion.div className="h-100 d-flex justify-content-center align-items-center bg-black text-white"
            initial={{ x: window.innerWidth }}
            animate={{ x: 0 }}
            exit={{ x: -window.innerWidth, 
                transition:{ease: easeInOut, duration: 0.5} 
            }}
        >
            <Container className='h-100 position-relative'>
                <div className='brand'>
                    <h2 className='fw-bolder pt-4 p-2 text-start'>Habit<span style={{ color: "#dc3545" }}>Track</span></h2>
                    <hr />
                </div>
                <div className="habit-body h-100">
                    <h4 className='text-start p-2 heading'>Detail View</h4>
                    <div className="habits-container mt-5 h-75 overflow-auto">
                        {habits.length > 0 ? habits.map((habit, index) => (
                            <HabitCard habit={habit} key={index} />
                        )) : (
                            <div className="text-center mt-5">
                                <p>No habits found. Add a new habit to get started!</p>
                            </div>
                        )}
                    </div>
                </div>
                <Button
                    variant='danger'
                    className='add-btn'
                    onClick={e => setShow(true)}
                    aria-label="Add New Habit"
                >
                    +
                </Button>
                <HabitForm show={show} setShow={setShow} />
            </Container>
        </motion.div>
    );
}
