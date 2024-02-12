import './App.css';
import Navbar from './components/NavBar';
import { Home } from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
//import data from './components/DummyList.js';
import { Route, Routes} from "react-router-dom";
import YouthLogin from './pages/YouthLogin';
import Register from './pages/Register';
import { StaffLogin } from './pages/StaffLogin';


function App() {
  

  return (
    <div className="App">
      <Navbar/><br/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='youthlogin' element={<YouthLogin/>} />
      <Route path='stafflogin' element={<StaffLogin />} />
      <Route path='register' element={<Register/>} />
      </Routes>
    </div>
    
  );
}

export default App;
