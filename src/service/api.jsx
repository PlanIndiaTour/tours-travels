import axios from 'axios';

const API_URL = 'http://localhost:8080';
export default API_URL;

export const getUser = async (id) => {
    id = id || '';
    try {
        return await axios.get(`${API_URL}/users/${id}`);
    } catch (error) {
        console.log('Error in view user api', error.message);
    }
}

export const getUsers = async (data) => {
    // id = id || '';
    try {
        return await axios.get(`${API_URL}/users`,data)
    } catch (error) {
        console.log('Error in view user', error.message);
    }
}

export const signup = async (user) => {
    try {
        // console.log(API_URL);
        return await axios.post(`${API_URL}/user`, user);
    }
    catch (error) {
        console.log('Error in Signup', error.message);
    }
}




export const deleteUser = async (id,user) => {
    try {
        return await axios.delete(`${API_URL}/user/${id}` );
    } catch (error) {
        console.log('Error while deleting user in api', error.message);
    }
}


export const editUser = async (id, user) => {
    try {
        return await axios.put(`${API_URL}/user`, user);
    } catch (error) {
        console.log('Error while editing user in api', error.message);
    }
}

// export const getUser = async (data) => {
//     try {
//         return await axios.get(`${API_URL}/users`,data);
//     } catch (error) {
//         console.log('Error while editing single user in api', error.message);
//     }
// }


//--------------------------------------DESTINATIONS---------------------------------------

export const getDestis = async (data) => {
    try {
      return await axios.get(`${API_URL}/destinations`, data);
    } catch (error) {
      console.log("Error in view Destinations", error.message);
    }
  }

  export const addDestination = async (desti) => {
    try {
      return await axios.post(`${API_URL}/destination`, desti);
    } catch (error) {
      console.log("Error in adding Destinations", error.message);
    }
  }
  
  export const deleteDesti = async (id, desti) => {
    try {
      return await axios.delete(`${API_URL}/destination/${id}`);
    } catch (error) {
      console.log("Error while deleting Destination in api", error.message);
    }
  }

  export const getDestination = async (id) => {
    id = id || '';
    try {
        return await axios.get(`${API_URL}/destinations/${id}`);
    } catch (error) {
        console.log('Error in view destination api', error.message);
    }
}


export const editDestination = async (id, desti) => {
  try {
      return await axios.put(`${API_URL}/destination`, desti);
  } catch (error) {
      console.log('Error while editing user in api', error.message);
  }
}


//--------------------------------------TOURS---------------------------------------

export const getTours = async (data) => {
    try {
      return await axios.get(`${API_URL}/tours`, data);
    } catch (error) {
      console.log("Error in view Tours", error.message);
    }
  }



  export const addTour = async (tour) => {
    try {
      return await axios.post(`${API_URL}/tour`, tour);
    } catch (error) {
      console.log("Error in adding tours", error.message);
    }
  }
  
  export const deleteTour = async (id, tour) => {
    try {
      return await axios.delete(`${API_URL}/tour/${id}`);
    } catch (error) {
      console.log("Error while deleting Destination in api", error.message);
    }
  }

  export const getTour = async (id) => {
    id = id || '';
    try {
        return await axios.get(`${API_URL}/tours/${id}`);
    } catch (error) {
        console.log('Error in view tour api', error.message);
    }
}


// export const getUser = async (id) => {
//   id = id || '';
//   try {
//       return await axios.get(`${API_URL}/users/${id}`);
//   } catch (error) {
//       console.log('Error in view user api', error.message);
//   }
// }

//--------------------------------------REVIEWS---------------------------------------


export const getReview = async (id) => {
  id = id || '';
  try {
      return await axios.get(`${API_URL}/reviews/${id}`);
  } catch (error) {
      console.log('Error in view Review api', error.message);
  }
}

export const getReviews = async (data) => {
  // id = id || '';
  try {
      return await axios.get(`${API_URL}/reviews`,data)
  } catch (error) {
      console.log('Error in view Review', error.message);
  }
}

export const addReview = async (review) => {
  try {
      // console.log(API_URL);
      return await axios.post(`${API_URL}/review`, review);
  }
  catch (error) {
      console.log('Error in review', error.message);
  }
}


export const deleteReview = async (id,review) => {
  try {
      return await axios.delete(`${API_URL}/review/${id}` );
  } catch (error) {
      console.log('Error while deleting review in api', error.message);
  }
}

//----------------------------BOOKING---------------------------------------------------------------------

export const getBookings = async (data) => {
  try {
    return await axios.get(`${API_URL}/bookings`, data);
  } catch (error) {
    console.log("Error in view Bookings", error.message);
  }
};

export const bookTour = async (booking) => {
  try {
    return await axios.post(`${API_URL}/booktour`, booking);
  } catch (error) {
    console.log("Error in booking", error.message);
  }
};

export const deleteBooking = async (id, booking) => {
  try {
    return await axios.delete(`${API_URL}/booking/${id}`);
  } catch (error) {
    console.log("Error while cancelling booking in api", error.message);
  }
};

export const getSingleBooking = async (id) => {
  id = id || "";
  try {
    return await axios.get(`${API_URL}/bookings/${id}`);
  } catch (error) {
    console.log("Error in view booking api", error.message);
  }
};