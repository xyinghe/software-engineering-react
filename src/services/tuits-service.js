/**
 * @file Implement the tuits service from remote API
 */
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
// const TUITS_API = "https://cs5500-node-xyinghe.herokuapp.com/api/tuits";
// const USERS_API = "https://cs5500-node-xyinghe.herokuapp.com/api/users";
// const TUITS_API = "http://localhost:4000/api/tuits";
// const USERS_API = "http://localhost:4000/api/users";
const TUITS_API = `${BASE_URL}/api/tuits`;
const USERS_API = `${BASE_URL}/api/users`;

const api = axios.create({
    withCredentials: true
});

/**
 * Use Get method to retrieve all tuits in the server
 * @returns {Promise<AxiosResponse<any>>} JSON file of all tuits
 */
export const findAllTuits = () =>
    api.get(TUITS_API)
        .then(response => response.data);

/**
 * Use GET method to retrieve a tuit by its primary key
 * @param tid Tuit's primary key
 * @returns {Promise<AxiosResponse<any>>} JSON file of the retrieved tuit
 */
export const findTuitById = (tid) =>
    api.get(`${TUITS_API}/${tid}`)
        .then(response => response.data);

/**
 * Use GET method to retrieve all tuits from one user
 * @param uid User's primary key
 * @returns {Promise<AxiosResponse<any>>} JSON file of all tuits from one user
 */
export const findTuitByUser = (uid) =>
    api.get(`${USERS_API}/${uid}/tuits`)
        .then(response => response.data);

/**
 * User POST method to insert a new tuit
 * @param uid  User's primary key
 * @param tuit Content of the tuit
 * @returns {Promise<AxiosResponse<any>>} JSON file of the new tuit
 */
export const createTuit = (uid, tuit) =>
    api.post(`${USERS_API}/${uid}/tuits`, tuit)
        .then(response => response.data);

/**
 * User POST method to insert a new tuit for a user
 * @param uid  User's primary key
 * @param tuit Content of the tuit
 * @returns {Promise<AxiosResponse<any>>} JSON file of the new tuit
 */
export const createTuitByUser = (uid, tuit) =>
    api.post(`${USERS_API}/${uid}/tuits`, tuit)
        .then(response => response.data);

/**
 * Use POST method to update a tuit
 * @param tid Tuit's primary key
 * @param tuit Updated content of the tuit
 * @returns {Promise<AxiosResponse<any>>} JSON file of the updated tuit
 */
export const updateTuit = (tid, tuit) =>
    api.post(`${TUITS_API}/${tid}`, tuit)
        .then(response => response.data);

/**
 * Use DELETE method to delete a tuit
 * @param tid Tuit's primary key
 * @returns {Promise<AxiosResponse<any>>} Status of whether the tuit is successfully deleted
 */
export const deleteTuit = (tid) =>
    api.delete(`${TUITS_API}/${tid}`)
        .then(response => response.data);

/**
 * Use DELETE method to delete a tuit by its content
 * @param content Content of the deleted tuit
 * @returns {Promise<AxiosResponse<any>>} Status of whether the tuit is successfully deleted
 */
export const deleteTuitByContent = (content) =>
    api.get(`${TUITS_API}/deleteByContent/${content}`)
        .then(response => response.data)
