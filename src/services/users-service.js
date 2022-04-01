/**
 * @file Implement the user service from remote API
 */
import axios from "axios";
const BASE_URL = "https://cs5500-node-xyinghe.herokuapp.com/api";

// const BASE_URL = "http://localhost:4000/api";

const LOGIN_API = `${BASE_URL}/api/login`;
const USERS_API = `${BASE_URL}/api/users`;

/**
 * User POST method to insert a new User
 * @param user User's attributes.
 * @returns {Promise<AxiosResponse<any>>} JSON file of new user
 */
export const createUser = (user) =>
  axios.post(`${USERS_API}`, user)
    .then(response => response.data);

/**
 * Use GET method to retrieve all users in the server
 * @returns {Promise<AxiosResponse<any>>} JSON file of all users
 */
export const findAllUsers = () =>
    axios.get(USERS_API)
        .then(response => response.data);

/**
 * Use GET method to retrieve a user by its primary key
 * @param uid User's primary key
 * @returns {Promise<AxiosResponse<any>>} JSON file of the retrieved user
 */
export const findUserById = (uid) =>
    axios.get(`${USERS_API}/${uid}`)
        .then(response => response.data);

/**
 * Use DELETE method to delete a user in the server
 * @param uid User's primary key
 * @returns {Promise<AxiosResponse<any>>} Status of whether the user is successfully deleted
 */
export const deleteUser = (uid) =>
  axios.delete(`${USERS_API}/${uid}`)
    .then(response => response.data);

/**
 * User DELETE method to delete a user by its username
 * @param username Username of the deleted user
 * @returns {Promise<AxiosResponse<any>>} Status of whether the user is successfully deleted
 */
export const deleteUsersByUsername = (username) =>
  axios.get(`${USERS_API}/username/${username}/delete`)
    .then(response => response.data);

/**
 * Use POST method to retrieve a user by credentials
 * @param credentials Credentials of the user
 * @returns {Promise<AxiosResponse<any>>} JSON file of the retrieved user
 */
export const findUserByCredentials = (credentials) =>
  axios.post(`${LOGIN_API}`, credentials)
    .then(response => response.data);

const service = {
  findAllUsers
}

export default service;