import * as service from '../services/users-service.js';

export const CREATE_USER = 'CREATE_USERS';
export const FIND_ALL_USERS = 'FIND_ALL_USERS';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

export const FIND_USER_CREDENTIALS = 'FIND_USER_CREDENTIALS';
export const FIND_USER_USERNAME = 'FIND_USER_USERNAME';


export const findUserbyCredentials = async (dispatch, username, password) => {
    const user = await service.findUserbyCredentials(username, password);
    dispatch({
        type: FIND_USER_CREDENTIALS,
        user
    });
}

export const findUserbyUsername = async (dispatch, username) => {
    const user = await service.findUserbyUsername(username);
    dispatch({
        type: FIND_USER_USERNAME,
        user
    });
}




export const createUser = async (dispatch, user) => {
    const newUser = await service.createUser(user);
    dispatch({
        type: CREATE_USER,
        newUser
    });
}

export const findAllUsers = async (dispatch) => {
    const users = await service.findAllUsers();
    dispatch({
        type: FIND_ALL_USERS,
        users
    });
}

export const updateUser = async (dispatch, user) => {
    const status = await service.updateUser(user);
    dispatch({
        type: UPDATE_USER,
        user
    });
}

export const deleteUser = async (dispatch, user) => {
    const res = await service.deleteUser(user);
    dispatch({
        type: DELETE_USER,
        user
    });
}
