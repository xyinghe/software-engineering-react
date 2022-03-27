

import React from "react";

const TuitStats = ({tuit, likeTuit, dislikeTuit= () => {}}) => {
    return (
        <div className="row mt-2">
            <div className="col">
                <i className="far fa-message me-1"></i>
                {tuit.stats && tuit.stats.replies}
            </div>
            <div className="col">
                <i className="far fa-retweet me-1"></i>
                {tuit.stats && tuit.stats.retuits}
            </div>
            <div className="col">
              <span onClick={() => likeTuit(tuit)}>
                  {
                      tuit.stats && tuit.stats.likes !== undefined &&
                      <i className={"fa-regular fa-thumbs-up me-1"}
                         style={tuit.likedByMe === true ? {color: "blue"} : {}}/>
                  }
                  {tuit.stats && <span>{tuit.stats.likes}</span>}
              </span>
            </div>
            <div className="col">
                <span onClick={()=>dislikeTuit(tuit)}>
                  {
                      tuit.stats && tuit.stats.dislikes !== undefined &&
                      <i className={"fa-regular fa-thumbs-down me-1"}
                         style={tuit.dislikedByMe === true ? {color: "red"} : {}}/>
                  }
                    {tuit.stats && <span>{tuit.stats.dislikes}</span>}
              </span>
            </div>
            <div className="col">
                <i className="far fa-inbox-out"></i>
            </div>
        </div>
    );
}
export default TuitStats;