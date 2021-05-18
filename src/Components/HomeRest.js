import React from "react";

const HomeRest = () => {
  return (
    <div className="home__rest">
      <div className="balance">
        <div style={{ marginTop: 24.5 }} className="available__balance">
          Available Balance
          <div style={{ fontSize: 20, color: "lightblue" }}>$500,000</div>
          <button>Add</button>
        </div>
        <div className="current__balance">
          Current Balance
          <div style={{ fontSize: 20, color: "lightblue" }}>$536,000</div>
        </div>
        <div className="grant__made">
          Grant Made
          <div style={{ fontSize: 20, color: "lightblue" }}>$139,000</div>
        </div>
      </div>
      <div className="Path-6" />
      <div className="Legacy__Activity">
        <div className="legacy__journey">
          Legacy Journey
          <div className="legacy__journey__img">
            <img
              className="legacy__graph"
              src="/image/Legacy__graph.png"
              alt=""
            />
          </div>
        </div>
        <div className="activity">
          Activity
          <div>
            <img className="activity__graph" src="/image/Activity.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRest;
