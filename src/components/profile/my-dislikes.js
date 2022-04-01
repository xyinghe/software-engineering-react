/**
 * @file Implements my dislikes component
 */

import Tuits from "../tuits";
import * as service from "../../services/dislike-service";
import {useEffect, useState} from "react";

/**
 * Implement dislikes components for my-dislike screen
 * where displays all disliked tuits by the user
 * @returns {JSX.Element} List of disliked tuits
 * @constructor
 */
const MyDislikes = () => {
    const [dislikedTuits, setDislikedTuis] = useState([]);
    const findTuitsIDislike = () =>
        service.findAllTuitsDislikedByUser("me")
            .then((tuits) => setDislikedTuis(tuits));
    useEffect(findTuitsIDislike, []);

    return(
        <div>
            <Tuits tuits={dislikedTuits}
                   refreshTuits={findTuitsIDislike}/>
        </div>
    );
};
export default MyDislikes;