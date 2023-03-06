import axios from 'axios';

const API_URL = 'http://localhost:3002/users';


export const signup = async (data) =>{
    try{
    return await axios.post(API_URL,data);
}
    catch (error){
        console.log('Error in Signup', error.message);

    }
}

export const getUsers = async ( ) =>{
    try {
        return await axios.get(API_URL)
    }catch(error){
        console.log('Error in view user', error.message);
    }
}

export const deleteUser = async (id) => {
    try{
        return await axios.delete(`${API_URL}/${id}`);
    }catch (error){
        console.log('Error while deleting user in api', error.message);
    }
}