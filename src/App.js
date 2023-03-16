import './App.css';

import {BrowserRouter,Routes,Route,} from "react-router-dom";

import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Aboutus from './pages/aboutus/Aboutus';
import ReviewList from './pages/Reviewslist/ReviewList';





import Dashboard from './components/adminDashboard/Dashboard/Dashboard';
import AllUser from './components/adminDashboard/Dashboard/AllUser';

import Bookings from './components/adminDashboard/Dashboard/Bookings';
import EditProfile from './pages/profile/EditProfile';
import AddDestination from './components/adminDashboard/Dashboard/AddDestination';
import AllDestinations from './components/adminDashboard/Dashboard/AllDestinations';
import AllTours from './components/adminDashboard/Dashboard/AllTours';
import AddTour from './components/adminDashboard/Dashboard/AddTour';
import Tourlist from './pages/tourlist/Tourlist';
import Tour from './pages/tourlist/Tour';
import Destinationlist from './pages/destinationlist/Destinationlist';
import Destination from './pages/destinationlist/Destination';
import Reviews from './components/adminDashboard/Dashboard/Reviews';
import EditDestination from './components/adminDashboard/Dashboard/EditDestination';
import BookTour from './pages/BookTour/BookTour';




function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/tour/:id' element={<Tour/>}/>
            <Route path='/tourlist' element={<Tourlist/>}/>
            <Route path='/aboutus' element={<Aboutus/>}/>
            <Route path='/reviews' element={<ReviewList/>}/>


            <Route path='/Dashboard' element={<Dashboard/>}/>
            <Route path='/allUser' element={<AllUser/>}/>
            <Route path='/adReview' element={<Reviews/>}/>
            <Route path='/booktour' element={<BookTour/>}/>
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
            <Route path="/editdestination/:id" element={<EditDestination/>}/>
            
        </Routes>
    </BrowserRouter>
  );
}

export default App;
