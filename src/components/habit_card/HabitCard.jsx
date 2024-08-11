import styles from './habitCard.module.css';
import { Button } from 'react-bootstrap';

export const HabitCard = ({habit}) => {


    return (
        <div className={styles.habit_card}>
            <div className={styles.body_fill}></div>
            <div className={styles.habit_content}>
                <div className={styles.habit_title}>sdghaksj</div>
                <div className="buttons">
                    <Button variant='danger'>Week View</Button>
                </div>
            </div>
        </div>
    )
}