import './App.css';

import {BrowserRouter,Routes,Route,} from "react-router-dom";

import Home from './pages/home/Home';
<<<<<<< HEAD
import Profile from './pages/profile/Profile'
import Place from './pages/place/Place';
import ViewPlace from './pages/place/ViewPlace';
=======
import Dashboard from './components/adminDashboard/Dashboard/Dashboard';
import AllUser from './components/adminDashboard/Dashboard/AllUser';
import Destinations from './components/adminDashboard/Dashboard/Destinations';
import Feedback from './components/adminDashboard/Dashboard/Feedback';
import Bookings from './components/adminDashboard/Dashboard/Bookings';
import Profile from './pages/profile/Profile';
import EditProfile from './pages/profile/EditProfile';
>>>>>>> 27be0452191814610767ecd3f2763c706786d759

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
<<<<<<< HEAD
            <Route path='/profile' element={<Profile/>}/>
            {/* <Route path='/place' element={<Place/>}/> */}
            {/* <Route path='/viewPlace' element={<ViewPlace/>}/> */}
=======
            <Route path='/Dashboard' element={<Dashboard/>}/>
            <Route path='/allUser' element={<AllUser/>}/>
            <Route path='/destinations' element={<Destinations/>}/>
            <Route path='/feedback' element={<Feedback/>}/>
            <Route path='/bookings' element={<Bookings/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/editprofile/:id' element={<EditProfile/>}/>

>>>>>>> 27be0452191814610767ecd3f2763c706786d759
        </Routes>
    </BrowserRouter>
  );
}

export default App;
