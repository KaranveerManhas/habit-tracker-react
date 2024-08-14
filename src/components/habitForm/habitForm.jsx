import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addHabit } from "../../redux/reducers/habitReducers";
import { useState } from "react";

export const HabitForm = ({show, setShow}) => {

    const dispatch = useDispatch();
    const [habit, setHabit] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(addHabit(habit));
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
                        <Form.Control type="text" placeholder="Enter Habit Title"  onChange={e=>setHabit({title:e.target.value})}/>
                    </Form.Group>
                    <Button variant="danger" type="submit" className="me-2">Create Habit</Button>
                    <Button variant="dark" onClick={() => setShow(false)}>Close</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}