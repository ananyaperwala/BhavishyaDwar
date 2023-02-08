import logo from './logo.svg';
import './App.css';
import Index from './components/Index.js';
import Dashboardf from './components/Dashboardf';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Signin from './components/Signin';
// import Signup from './components/Signup';
import Profile from './components/Profile';
import SampleFetch  from './components/SampleFetch';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/dashboard" element={<Dashboardf/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
         <Route path="/signin" element={<Signin/>}/>
        {/* <Route path="/signup" element={<Signun/>}/> */}
        <Route path="/profile" element={<Profile/>}/>
        
      </Routes>
    </Router>
    {/* <SampleFetch/> */}
  </>
  );
}

export default App;
