import './App.css';

import {BrowserRouter,Routes,Route,} from "react-router-dom";


// import Place from './pages/place/Place';
// import ViewPlace from './pages/place/ViewPlace';
import Home from './pages/home/Home';
import Dashboard from './components/adminDashboard/Dashboard/Dashboard';
import AllUser from './components/adminDashboard/Dashboard/AllUser';
// import Destinations from './components/adminDashboard/Dashboard/Destination/Destinations';
import Feedback from './components/adminDashboard/Dashboard/Feedback';
import Bookings from './components/adminDashboard/Dashboard/Bookings';
import Profile from './pages/profile/Profile';
import EditProfile from './pages/profile/EditProfile';
import AddDestination from './components/adminDashboard/Dashboard/AddDestination';
import AllDestinations from './components/adminDashboard/Dashboard/AllDestinations';
import AllTours from './components/adminDashboard/Dashboard/AllTours';
import AddTour from './components/adminDashboard/Dashboard/AddTour';
import Tourlist from './pages/tourlist/Tourlist';
import Tour from './pages/tourlist/Tour';
import Destination from './pages/destinationlist/Destination';
import Destinationlist from './pages/destinationlist/Destinationlist';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            {/* <Route path='/place' element={<Place/>}/> */}
            {/* <Route path='/viewPlace' element={<ViewPlace/>}/> */}
            <Route path='/Dashboard' element={<Dashboard/>}/>
            <Route path='/allUser' element={<AllUser/>}/>
            {/* <Route path='/destinations' element={<Destinations/>}/> */}
            <Route path='/feedback' element={<Feedback/>}/>
            <Route path='/bookings' element={<Bookings/>}/>
            <Route path='/profile/:id' element={<Profile/>}/>
            <Route path="/editprofile/:id" element={<EditProfile/>}/>
            <Route path='/addDestination' element={<AddDestination/>}/>
            <Route path='/allDestinations' element={<AllDestinations/>}/>
            <Route path='/allTours' element={<AllTours/>}/>
            <Route path='/addTour' element={<AddTour/>}/>
            <Route path='/tourlist' element={<Tourlist/>}/>
            <Route path='/tour/:id' element={<Tour/>}/>
            <Route path='/destinationlist' element={<Destinationlist/>}/>
            <Route path='/destination/:id' element={<Destination/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
