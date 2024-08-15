import { useDispatch } from 'react-redux';
import styles from './habitCard.module.css';
import { Button } from 'react-bootstrap';
import { removeHabit, setCurrentHabit } from '../../redux/reducers/habitReducers';
import { useNavigate } from 'react-router-dom';

export const HabitCard = ({habit}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const setBgWidth = () => {
        let count = 0;

        habit.weekData.map(day => {
            if(day.completed === true) count++;
            return null;
        });
        
        return `${(count / 7) * 100}%`;
    }

    const handleDelete = (e) =>{
        e.preventDefault();
        dispatch(removeHabit(habit));      
    }

    const handleNavigate = (e) => {
        e.preventDefault();
        dispatch(setCurrentHabit(habit));
        navigate('/week-view');
    }

    return (
        <div className={styles.habit_card} style={{borderColor: habit.color}}>
            <div className={styles.body_fill} 
                style={{backgroundColor: habit.color, width:setBgWidth() }}>
            </div>
            <div className={styles.habit_content}>
                <div className={styles.habit_title}>{habit.title}</div>
                <div className="buttons">
                    <Button variant='secondary' onClick={handleNavigate}>Week View</Button>
                    <Button variant='danger' className='ms-2' onClick={handleDelete}>X</Button>
                </div>
            </div>
        </div>
    )
}