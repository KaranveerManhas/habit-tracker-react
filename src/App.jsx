import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { AnimatedRoutes } from './components/routes_with_animation/AnimatedRoutes';



function App() {

  return (
    <div className="App overflow-hidden">
      <Router>
        
          <AnimatedRoutes />
        
      </Router>
    </div> 
  );
}

export default App;
