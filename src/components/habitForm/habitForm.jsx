import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addHabit, habitSelector } from "../../redux/reducers/habitReducers";
import { useState } from "react";

export const HabitForm = ({show, setShow}) => {

    const colors = ["#a28089",
        "#8458B3", 
        "#ff1e00",
        "#c2edda",
        "#68d388",
        "#51d0de",
        "#d9d9d9",
        "#DCC7AA" ]

    const dispatch = useDispatch();
    const [habit, setHabit] = useState({});

    const { currentHabitIndex } = useSelector(habitSelector);

    const getPastWeekDates = () => {
        const dates = [];

        for (let i = 6; i >=0; i--){
            const date = new Date();
            date.setDate(date.getDate() - i);
            dates.push({
                date: date.toISOString().split('T')[0],
                completed: null
            });
        }

        return dates;

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(e.target[0].value === ""){
            alert("Please enter a habit title");
            return;
        }



        const newHabit = {
            ...habit,
            index: currentHabitIndex,
            color: colors[Math.floor(Math.random() * colors.length)],
            weekData: getPastWeekDates()
        }
        
        dispatch(addHabit(newHabit));
        setShow(false);

    }
    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>New Habit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="habitTitle">
                        <Form.Label>Habit Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Habit Title" onChange={e=>setHabit({...habit, title:e.target.value})}/>
                    </Form.Group>
                    <Button variant="danger" type="submit" className="me-2">Create Habit</Button>
                    <Button variant="dark" onClick={() => setShow(false)}>Close</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}