import React from "react";

const Card3 = () => {
  return (
    <div className="cards cardA3">
      <div className="cardA3__heading">
        <div style={{ fontSize: 7 }}>
          Grant Cycle
          <div className="everyYear">Every year</div>
        </div>
        <div style={{ marginLeft: 80 }} className="whole__length">
          <div className="length__filled3">
            <div className="oval45" />
          </div>
        </div>
        <div style={{ fontSize: 10 }}>45%</div>
      </div>
      <div
        className="cards__back__image"
        style={{
          backgroundImage: `url("/image/card-2.png")`,
          borderTopLeftRadius: 0,
        }}
      >
        <div
          style={{
            marginTop: 15,
            display: "flex",
            flex: 1,
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: 100,
            }}
          >
            <div style={{ color: "#fed893" }} className="card__info--title">
              Education
            </div>
            <div style={{ color: "#818181", fontSize: 8 }}>$55600</div>
          </div>
          <div style={{ marginLeft: 100 }}>
            <img style={{ height: 8 }} src="/image/three-icons.png" alt="" />
          </div>
        </div>
        <div className="card__info--heading">
          <div className="gold">Gold</div>
          <div style={{ fontSize: 15, color: "#ffffff", marginBottom: 5 }}>
            National Art Education Association
          </div>
          <div
            style={{
              fontSize: 8,
              color: "#4e4e4e",
              marginBottom: 5,
              fontWeight: 600,
            }}
          >
            Rulling Year:{" "}
            <span style={{ color: "#ffffff", marginRight: 30 }}>2010</span>
            Place: <span style={{ color: "#ffffff" }}>
              US, Canada, Africa
            </span>{" "}
          </div>
          <div></div>
        </div>
      </div>

      <div className="card__information" style={{ marginTop: 40 }}>
        <div style={{ fontSize: 10, marginLeft: 17 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="bitmap"></div>
            <strong style={{ marginTop: 7 }}>10:47 am - 30 Nov 2017 </strong>
          </div>
          <p>
            BBC News - Sesame Street to help Syrian refugees.
            <span className="more" style={{ border: "none" }}>
              #innovative #education
            </span>
          </p>
        </div>
        <div style={{ fontSize: 10, marginLeft: 17, marginTop: 30 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="facebook"></div>
            <strong style={{ marginTop: 7 }}>06:43 am - 30 Nov 2017</strong>
          </div>
          <p>
            "Mrs. Wong taught me how to speak English, how to think, how to
            question. This teacher was caring, and went above and beyond to make
            me feel confident.
            <span className="more">
              <a style={{ color: "#6ec9d9" }} href="#top">
                " http://ow.ly/9PlR30hyMOj”
              </a>
            </span>
          </p>
        </div>
        <div style={{ fontSize: 10, marginLeft: 17, marginTop: 30 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="facebook"></div>
            <strong style={{ marginTop: 7 }}>03:43 am - 30 Nov 2017</strong>
          </div>
          <p>
            "Mrs. Wong taught me how to speak English, how to think, how to
            question. This teacher was caring, and went above and beyond to make
            me feel confident.
            <span className="more">
              <a style={{ color: "#6ec9d9" }} href="#top">
                " http://ow.ly/9PlR30hyMOj”
              </a>
            </span>
          </p>
        </div>
        <div>
          <p className="more">
            <a style={{ color: "#6ec9d9" }} href="#top">
              More +
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card3;
