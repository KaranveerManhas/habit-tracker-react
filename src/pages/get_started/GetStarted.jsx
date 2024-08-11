
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { easeInOut, motion } from 'framer-motion';


 const GetStarted = () => {

  const navigate = useNavigate();

    return (
      <motion.div 
      initial={{x:3000}} 
      animate={{x: 0}}
      exit={{x:-3000, 
        position:'absolute'
      }}
      transition={{ease: easeInOut, duration: 0.8}}
      >
        <Container className='h-100'>
          <div className="wrapper d-flex h-100 justify-content-center gap-2 align-items-center">
            <div className="heading-button-container mt-5">
              <h1>Welcome to <span className='fw-bolder'>HabitTrack</span></h1>
              <Button variant='success' className='mt-5 fw-bold rounded-5' onClick={()=>navigate('/home')}>Get Started</Button>
            </div>
            <img src="/images/calender.jpg" alt="Calender" className='w-75' />
          </div>
        </Container>
      </motion.div>
        
    )
}


export default GetStarted;