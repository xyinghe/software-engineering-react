/**
 * @file Implement the authentication service from remote API
 */
import axios from "axios";
// const BASE_URL = "https://cs5500-01-sp22.herokuapp.com/api";
// const BASE_URL = "http://localhost:4000/api";
const BASE_URL = process.env.REACT_APP_BASE_URL;
// const BASE_URL =  "http://localhost:4000";

const AUTH_API = `${BASE_URL}/api/auth`;

const api = axios.create({
    withCredentials: true
});

/**
 * User POST method to register a new user
 * @param user a new User with all required credentials
 * @returns {Promise<AxiosResponse<any>>} JSON file of the user data
 */

export const register = (user) =>
    api.post(`${AUTH_API}/signup`, user)
        .then(response => response.data);


/**
 * Use POST method to let the user log in
 * @param user User's credentials (username, password) for login
 * @returns {Promise<AxiosResponse<any>>} JSON file of the user data
 */
export const login = (user) =>
    api.post(`${AUTH_API}/login`, user)
        .then(response => response.data);

/**
 * Use POST method to let the user log out
 * @param user User's credentials (username, password) for logout
 * @returns {Promise<AxiosResponse<any>>} JSON file of the user data
 */
export const logout = (user) =>
    api.post(`${AUTH_API}/logout`, user)
        .then(response => response.data);

/**
 * Use POST method to get the use profile
 * @returns {Promise<AxiosResponse<any>>} JSON file of the user data
 */
export const profile = () =>
    api.post(`${AUTH_API}/profile`)
        .then(response => response.data);