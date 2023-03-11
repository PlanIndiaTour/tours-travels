import axios from 'axios';

const API_URL = 'http://localhost:8080';


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

import axios from "axios";

const API_URL = "http://localhost:8080";

export const signup = async (data) => {
  try {
    return await axios.post(API_URL, data);
  } catch (error) {
    console.log("Error in Signup", error.message);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log("Error in view user", error.message);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log("Error while deleting user in api", error.message);
  }
};

// _______________________________________________________________

export const getTours = async (data) => {
  try {
    return await axios.get(`${API_URL}/tours`, data);
  } catch (error) {
    console.log("Error in view Tour", error.message);
  }
};

export const deleteTour = async (id, tour) => {
  try {
    return await axios.delete(`${API_URL}/tour/${id}`);
  } catch (error) {
    console.log("Error while deleting tour in api", error.message);
  }
};
