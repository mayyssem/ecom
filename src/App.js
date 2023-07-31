
import {Route, Routes} from 'react-router-dom';
import Profile from './pages/Profile/profile';
import './App.css';


function App() {
  return (
    <Routes> 

    <Route path="/profile" element={<Profile/>}/>
    
  </Routes>
  );
}

export default App;
