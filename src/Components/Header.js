import React from "react";

const Header = () => {
  return (
    <div className="home__header">
      <img
        src="/image/vanguard-logo-white_2.png"
        alt=""
        className="vangaurd__logo"
        style={{ marginBottom: 50 }}
      />
      <div className="bar">
        <div className="welcome">
          Welcome
          <span style={{ marginLeft: 5, color: "white", fontSize: 15 }}>
            Elizabeth Stanton
          </span>
        </div>
        <div className="bar__first">
          <div className="bar__first--select">
            {/* //*********************************  */}
            <button>Account</button>
          </div>
          <div className="bar__first--select">
            <button>Grant</button>
          </div>
          <div className="bar__first--select">
            <button>Contribution</button>
          </div>
          <div className="bar__first--select">
            <button>Reports</button>
          </div>
          <div className="bar__second">
            <button style={{marginTop:"5px"}}>Log out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
