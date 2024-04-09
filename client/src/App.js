//import './App.css';
import Header from './components/NavBar/index';
import { Home } from './pages/Home';
// import 'bootstrap/dist/css/bootstrap.min.css';
//import data from './components/DummyList.js';
import { Route, Routes} from "react-router-dom";
import YouthLogin from './pages/YouthLogin';
import Register from './pages/Register';
import { StaffLogin } from './pages/StaffLogin';
import { StaffMenu } from './pages/StaffMenu';
import { AddSites } from './pages/AddSites';
import EditProfile from './pages/EditProfile';
import { Reports } from './pages/Reports';
import { GroupEvent } from './pages/GroupEvent';
import { SiteSelect } from './pages/SiteSelect';
import { ReportsTable } from './pages/ReportsTable';
import {AddPrograms} from './pages/AddPrograms';
import { StaffLoginForMenu } from './pages/StaffLoginForMenu';
import GeneratedReports from './pages/generatedReports';

function App() {

  return (
    <div className="App">
      <Header/>
      {/* <br/> */}
      <Routes>
        <Route path='/' element={<StaffLogin />} />
        <Route path='home' element={<Home/>} />
        <Route path='siteselect' element={<SiteSelect />} />
        <Route path='youthlogin' element={<YouthLogin/>} />
        <Route path='stafflogin' element={<StaffLogin />} />
        <Route path='staffmenu' element={<StaffMenu/>} />
        <Route path='staffloginformenu' element={<StaffLoginForMenu/>} />
        <Route path='addsites' element={<AddSites/>} />
        {/* <Route path='editsites' element={<EditSites/>} />
        <Route path='removesites' element={<RemoveSites/>} /> */}
        <Route path='register' element={<Register/>} />
        <Route path='editprofile' element={<EditProfile/>} />
        <Route path='reports' element={<Reports/>} />
        <Route path='groupevent' element={<GroupEvent/>}/>
        <Route path='reportstable' element={<ReportsTable/>}/>
        <Route path='addprograms' element={<AddPrograms/>}/>
        <Route path='generateReports' element={<GeneratedReports/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
