
import { Container, Button } from 'react-bootstrap';


 const Home = () => {
    return (
        <Container className='h-100'>
        <div className="wrapper d-flex h-100 justify-content-between align-items-center">
          <div className="heading-button-container mt-5">
            <h1>Welcome to <span className='fw-bolder'>HabitTrack</span></h1>
            <Button variant='success' className='mt-5 fw-bold'>Get Started</Button>
          </div>
            <img src="/images/calender.jpg" width={800} alt="Calender" />
        </div>
      </Container>
    )
}


export default Home;