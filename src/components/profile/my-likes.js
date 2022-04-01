/**
 * @file Implements my likes component
 */
import Tuits from "../tuits";
import * as service from "../../services/likes-service";
import {useEffect, useState} from "react";

/**
 * Implement dislikes components for my-like screen
 * where displays all liked tuits by the user
 * @returns {JSX.Element} List of liked tuits
 * @constructor
 */
const MyLikes = () => {
    const [likedTuits, setLikedTuis] = useState([]);
    const findTuitsILike = () =>
        service.findAllTuitsLikedByUser("me")
            .then((tuits) => setLikedTuis(tuits));
    useEffect(findTuitsILike, []);

    return(
        <div>
            <Tuits tuits={likedTuits}
                   refreshTuits={findTuitsILike}/>
        </div>
    );
};
export default MyLikes;