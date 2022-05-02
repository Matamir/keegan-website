import axios from 'axios';
const USERS_API = 'https://plartsta.herokuapp.com/api/users'

export const createUser = async (user) => { 
    const res = await axios.post(USERS_API, user);
    return res.data;
}

export const findAllUsers = async () => {
    const res = await axios.get(USERS_API);
    const users = res.data;
    return users;
}

export const deleteUser = async (user) => {
    const res = await axios.delete(`${USERS_API}/${user.id}`);
    return res.data;
}

export const updateUser = async (user) => {
    const res = await axios.put(`${USERS_API}/${user._id}`, user);
    return res.data;
}

export const findUserbyCredentials = async (username, password) => {
    const res = await axios.get(`${USERS_API}/credentials/${username}/${password}/`);
    const user = res.data;
    return user;
}

export const findUserbyUsername = async (username) => {
    const res = await axios.get(`${USERS_API}/username/${username}/`);
    return res.data;
}

export const findUserById = async (uid) => {
    const res = await axios.get(`${USERS_API}/${uid}/`)
    return res.data;
}

