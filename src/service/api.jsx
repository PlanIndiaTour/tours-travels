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