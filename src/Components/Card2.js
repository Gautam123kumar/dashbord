import React from "react";

const Card2 = () => {
  return (
    <div className="cards cardA2">
      <div className="cardA2__heading">
        <div style={{ fontSize: 7 }}>
          Grant Cycle
          <div className="everyYear">Every year</div>
        </div>
        <div style={{ marginLeft: 80 }} className="whole__length">
          <div className="length__filled">
            <div className="oval30"></div>
          </div>
        </div>
        <div style={{ fontSize: 10 }}>30%</div>
      </div>
      <div
        className="cards__back__image"
        style={{
          backgroundImage: `url("/image/card-3.png")`,
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
            <div style={{ color: "#ff998f" }} className="card__info--title">
              Refugee
            </div>
            <div style={{ color: "#818181", fontSize: 8 }}>$41700</div>
          </div>
          <div style={{ marginLeft: 100 }}>
            <img style={{ height: 8 }} src="/image/three-icons.png" alt="" />
          </div>
        </div>
        <div className="card__info--heading">
          <div className="silver">Silver</div>
          <div style={{ fontSize: 15, color: "#ffffff", marginBottom: 5 }}>
            American Refugee Committee
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
            <span style={{ color: "#ffffff", marginRight: 30 }}>1979</span>
            Place: <span style={{ color: "#ffffff" }}>Asia, Africa</span>{" "}
          </div>
          <div></div>
        </div>
      </div>

      <div className="card__information" style={{ marginTop: 40 }}>
        <div style={{ fontSize: 10, marginLeft: 17 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="bitmap"></div>
            <strong style={{ marginTop: 7 }}>02:47 pm - 1 Jan 2018</strong>
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
            <strong style={{ marginTop: 7 }}>011:43 am - 1 Jan 2018</strong>
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
            <strong style={{ marginTop: 7 }}>08:43 am - 1 Jan 2018</strong>
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
        <div style={{ fontSize: 10, marginLeft: 17 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="bitmap"></div>
            <strong style={{ marginTop: 7 }}>06:47 am - 1 Jan 2018</strong>
          </div>
          <p>
            BBC News - Sesame Street to help Syrian refugees.
            <span className="more" style={{ border: "none" }}>
              #innovative #education
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

export default Card2;
