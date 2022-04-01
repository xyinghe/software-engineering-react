/**
 * @file Implements my tuits component
 */

import {useEffect, useState} from "react";
import * as service from "../../services/tuits-service";
import Tuits from "../tuits"
/**
 * Implement tuits components for my-tuits screen
 * where displays all tuits posted by the user
 * @returns {JSX.Element} List of posted tuits
 * @constructor
 */
const MyTuits = () => {
    const [tuits, setTuits] = useState([]);
    const findMyTuits = () => {
        service.findTuitByUser("me")
            .then(tuits => {
                setTuits(tuits);
            })
    }

    useEffect(() => {
        findMyTuits()
    }, []);

    return (
        <Tuits tuits={tuits} refreshTuits={findMyTuits}/>
    )
}

export default MyTuits