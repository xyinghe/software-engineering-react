import React from "react";


const TuitStats = ({tuit, likeTuit, dislikeTuit = () => {}}) => {

    return (
        <div className="row mt-2">
            <div className="col">
                <i className="far fa-message me-1"/>
                {tuit.stats && tuit.stats.replies}
            </div>
            <div className="col">
                <i className="far fa-retweet me-1"/>
                {tuit.stats && tuit.stats.retuits}
            </div>
            <div className="col">
          <span className = "ttr-like-tuit-click" onClick={() => likeTuit(tuit)}>

              {
                  tuit.stats  && tuit.stats.likes > 0 &&
                  <i className="fa-regular fa-thumbs-up me-1" style={{color: 'red'}}/>
              }
              {
                  tuit.stats  && tuit.stats.likes <= 0 &&
                  <i className="fa-regular fa-thumbs-up me-1"/>
              }
              <span className="ttr-stats-likes-count">
              {tuit.stats && tuit.stats.likes}
            </span>
          </span>
            </div>
            <div className="col">
                <span className = "ttr-dislike-tuit-click" onClick={()=>dislikeTuit(tuit)}>

                    {
                        tuit.stats  && tuit.stats.dislikes > 0 &&
                        <i className="fa-regular fa-thumbs-down me-1" style={{color: 'blue'}}/>
                    }
                    {
                        tuit.stats  && tuit.stats.dislikes <= 0 &&
                        <i className="fa-regular fa-thumbs-down me-1"/>
                    }
                    <span className="ttr-stats-dislikes-count">
                    {tuit.stats && tuit.stats.dislikes}
                    </span>
              </span>
            </div>
            <div className="col">
                <i className="far fa-inbox-out"/>
            </div>
        </div>
    );
}
export default TuitStats;