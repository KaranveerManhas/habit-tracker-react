
import { easeInOut, motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { habitSelector } from '../../redux/reducers/habitReducers';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const WeekView = () => {

    const { currentHabit } = useSelector(habitSelector);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!currentHabit){
            navigate('/home');
        }
        // eslint-disable-next-line
    },[]);
   
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
                <div className="h-100">
                    <h4 className='text-start p-2 heading'>Week View</h4>
                    <div className="border mt-5 h-100 pt-5">
                        <h2>{currentHabit.title}</h2>
                    </div>
                </div>
            </Container>
        </motion.div>
    )

}