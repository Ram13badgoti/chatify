
import './App.css';
import { Button } from '@chakra-ui/react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Homepage from './Pages/Homepage';
import Chatpage from './Pages/Chatpage';
function App() {
  return (
    <div className="App">
<Router>
  <Routes>
  <Route path='/' element={<Homepage></Homepage>}></Route>
  <Route path='/chat' element={<Chatpage></Chatpage>}></Route>
  </Routes>
  
</Router>
 
  
    </div>
  );
}

export default App;
