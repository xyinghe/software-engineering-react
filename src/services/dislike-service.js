/**
 * @file Implement the dislike function service from remote API
 */
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const USERS_API = `${BASE_URL}/api/users`;
const TUITS_API = `${BASE_URL}/api/tuits`;

const api = axios.create({
    withCredentials: true
});

/**
 * Use GET method to find all tuits disliked by a user
 * @param userId User's primary key
 * @returns {Promise<AxiosResponse<any>>} JSON file of all disliked tuits
 */
export const findAllTuitsDislikedByUser = (userId) =>
    api.get(`${USERS_API}/${userId}/dislikes`)
        .then(response => response.data);

/**
 * Use GET method to find all users disliked one tuit
 * @param tid Tuit's primary key
 * @returns {Promise<AxiosResponse<any>>} JSON file of all users disliked the tuit
 */
export const findAllUsersThatDislikedTuit = (tid) =>
    api.get(`${TUITS_API}/${tid}/dislikes`)
        .then(response => response.data);

/**
 * User PUT method for insert a user dislikes a tuit
 * @param uid User's primary key
 * @param tid Tuit's primary key
 * @returns {Promise<AxiosResponse<any>>} JSON file of a user dislikes
 */
export const userDislikesTuit = (uid, tid) =>
    api.put(`${USERS_API}/${uid}/dislikes/${tid}`)
        .then(response => response.data);

/**
 * Use PUT method for user toggling dislikes a tuit
 * @param uid User's primary key
 * @param tid Tuit's primary key
 * @returns {Promise<AxiosResponse<any>>} JSON file of the tuits disliked by a user
 */
export const userTogglesTuitDislikes = (uid, tid) =>
    api.put(`${USERS_API}/${uid}/dislikes/${tid}`)
        .then(response => response.data);