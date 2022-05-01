import axios from 'axios';
const USERS_API = 'http://localhost:4000/api/users'

export const createUser = async (user) => {}

export const findAllUsers = async () => {
    const res = await axios.get(USERS_API);
    const users = res.data;
    return users;
}

export const deleteUser = async (user) => {}
export const updateUser = async (user) => {}