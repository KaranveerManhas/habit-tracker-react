
import { easeInOut, motion } from 'framer-motion';
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { habitSelector } from '../../redux/reducers/habitReducers';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { updateHabitWeekData } from '../../redux/reducers/habitReducers';

import './week_view.css';

export const WeekView = () => {

    const { currentHabit } = useSelector(habitSelector);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(!currentHabit){
            navigate('/home');
        }
        // eslint-disable-next-line
    },[]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: "numeric",
            day: 'numeric'
        });
    }
    
    const setCompletionColor = (completionStatus) => {
        switch (completionStatus) {
            case true:
                return 'green';
            case false:
                return 'red';
            case null:
                return 'grey';
            default:
                return 'grey';
        }
    }

    const updateCompletionStatus = (e, index) => {
        e.preventDefault();
        
        const newWeekData = currentHabit.weekData.map((day, i) => {
            // Create a copy of the day object
            return { ...day };
        });

        if(newWeekData[index].completed === null){
            newWeekData[index].completed = true;
        }else if(newWeekData[index].completed === true){
            newWeekData[index].completed = false;
        }else{
            newWeekData[index].completed = null;
        }

        dispatch(updateHabitWeekData(newWeekData));
    }

    if(!currentHabit){
        return;
    }

    return (
        <motion.div className="h-100 d-flex justify-content-center align-items-center bg-black text-white"
            initial={{x:window.innerWidth}}
            animate={{x:0 }}
            exit={{x:-window.innerWidth, 
                transition:{ease: easeInOut, duration: 0.5} 
            }}
        >
            <Container className="h-100">
                <div className='brand'>
                    <h2 className='fw-bolder pt-4 p-2 text-start'>
                        Habit
                        <span style={{ color: "#dc3545" }}>Track</span>
                    </h2>
                    <hr />
                </div>
                <div className="h-100 position-relative">
                    <h4 className='text-start p-2 heading'>Week View</h4>
                    <div className="mt-5 h-100 pt-5">
                        <h2>{currentHabit.title}</h2>
                        <div className="week-data mt-5 pt-5 d-flex justify-content-evenly">
                            {currentHabit.weekData.map((day, index) => 
                                <div className='days' key={index} onClick={e=>updateCompletionStatus(e, index)}>
                                    <p className='date'>{formatDate(day.date)}</p>
                                    <div className="bg-fill" style={{background:setCompletionColor(day.completed)}}></div>
                                </div>
                            )}
                        </div>
                    </div>
                    <Button className="position-absolute custom-button" onClick={e=>navigate('/home')}>
                        <img src="/images/back-button.png" alt="Back Button" />
                    </Button>
                </div>
            </Container>
        </motion.div>
    )
}