import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Homepage from './components/Pages/Homepage';
import Chatpage from './components/Pages/Chatpage';
import './App.css';

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
