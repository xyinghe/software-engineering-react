/**
 * @file Implement the like function service from remote API
 */
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const USERS_API = `${BASE_URL}/api/users`;
const TUITS_API = `${BASE_URL}/api/tuits`;

const api = axios.create({
    withCredentials: true
});

/**
 * Use GET method to find all tuits liked by a user
 * @param userId User's primary key
 * @returns {Promise<AxiosResponse<any>>} JSON file of all disliked tuits
 */
export const findAllTuitsLikedByUser = (userId) =>
    api.get(`${USERS_API}/${userId}/likes`)
        .then(response => response.data);

/**
 * Use GET method to find all users liked one tuit
 * @param tid Tuit's primary key
 * @returns {Promise<AxiosResponse<any>>} JSON file of all users liked the tuit
 */
export const findAllUsersThatLikedTuit = (tid) =>
    api.get(`${TUITS_API}/${tid}/likes`)
        .then(response => response.data);

/**
 * User PUT method for insert a user likes a tuit
 * @param uid User's primary key
 * @param tid Tuit's primary key
 * @returns {Promise<AxiosResponse<any>>} JSON file of a user likes
 */
export const userLikesTuit = (uid, tid) =>
    api.put(`${USERS_API}/${uid}/likes/${tid}`)
        .then(response => response.data);

/**
 * Use PUT method for user toggling likes a tuit
 * @param uid User's primary key
 * @param tid Tuit's primary key
 * @returns {Promise<AxiosResponse<any>>} JSON file of the tuits liked by a user
 */
export const userTogglesTuitLikes = (uid, tid) =>
    api.put(`${USERS_API}/${uid}/likes/${tid}`)
        .then(response => response.data);