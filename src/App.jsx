import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import GetStarted from './pages/get_started/GetStarted';
import { Home } from './pages/home/Home';


function App() {


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>        
    </Router>
  );
}

export default App;
