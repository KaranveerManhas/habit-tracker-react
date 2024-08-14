import { useDispatch } from 'react-redux';
import styles from './habitCard.module.css';
import { Button } from 'react-bootstrap';
import { removeHabit } from '../../redux/reducers/habitReducers';
import { useNavigate } from 'react-router-dom';

export const HabitCard = ({habit}) => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (e) =>{
        e.preventDefault();

        dispatch(removeHabit(habit));      

    }

    const handleNavigate = () => {
        navigate('/week-view');
    }

    return (
        <div className={styles.habit_card}>
            <div className={styles.body_fill}></div>
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