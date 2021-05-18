import React from "react";

const Card1 = () => {
  return (
    <div className="cards cardA1">
      <div className="cardA1__heading">
        <div style={{ fontSize: 7 }}>
          Grant Cycle
          <div className="everyYear">Every year</div>
        </div>
        <div style={{ marginLeft: 80 }} className="whole__length">
          <div className="length__filled">
            <div className="oval30" />
          </div>
        </div>
        <div style={{ fontSize: 10 }}>30%</div>
      </div>
      <div
        className="cards__back__image"
        style={{
          backgroundImage: `url("/image/card-1.png")`,
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
            <div style={{ color: "#818181", fontSize: 8 }}>$41700</div>
          </div>
          <div style={{ marginLeft: 100 }}>
            <img style={{ height: 8 }} src="/image/three-icons.png" alt="" />
          </div>
        </div>
        <div className="card__info--heading">
          <div className="gold">Gold</div>
          <div style={{ fontSize: 15, color: "#ffffff", marginBottom: 5 }}>
            Association for childhood edu.
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
            <span style={{ color: "#ffffff", marginRight: 30 }}>1952</span>
            Place: <span style={{ color: "#ffffff" }}>Africa, India</span>{" "}
          </div>
          <div></div>
        </div>
      </div>

      <div className="card__information" style={{ marginTop: 40 }}>
        <div style={{ fontSize: 10, marginLeft: 17 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="bitmap"></div>
            <strong style={{ marginTop: 7 }}>10:47 am - 4 Jan 2018 </strong>
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
            <strong style={{ marginTop: 7 }}>13:43 am - 3 Jan 2018</strong>
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

export default Card1;
