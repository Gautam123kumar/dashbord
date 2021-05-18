import React from "react";

const InvestmentOptions = () => {
  return (
    <div className="investment__options">
      <div className="investment__title">
        Investment Options{"  "}
        <span className="span__title">( Invested in 6 Options )</span>
      </div>
      <div className="market">
        <div style={{ fontSize: 10 }}>
          <img className="stock__image" src="/image/graph-a.png" alt="1" />
          <br />
          Short Term Bond{" "}
          <div className="stock__value">
            <div className="bluestock">$13.56</div>
            <div className="greenstock">+1.50(+12.44%)</div>
          </div>
        </div>
        <div style={{ fontSize: 10 }}>
          <img className="stock__image" src="/image/graph-b.png" alt="2" />
          <br />
          Total Bond{" "}
          <div className="stock__value">
            <div className="bluestock">$16.23</div>
            <div className="greenstock">-1.45 (-8.20%)</div>
          </div>
        </div>
        <div style={{ fontSize: 10 }}>
          <img className="stock__image" src="/image/graph-c.png" alt="3" />
          <br />
          Moderate Growth{" "}
          <div className="stock__value">
            <div className="bluestock">$39.21</div>
            <div className="greenstock"> +2.78 (+7.63%)</div>
          </div>
        </div>
        <div style={{ fontSize: 10 }}>
          <img className="stock__image" src="/image/graph-a.png" alt="1" />
          <br />
          Total Equity{" "}
          <div className="stock__value">
            <div className="bluestock">$23.54</div>
            <div className="greenstock">+0.28(+2.11%)</div>
          </div>
        </div>
        <div style={{ fontSize: 10 }}>
          <img className="stock__image" src="/image/graph-b.png" alt="2" />
          <br />
          European Stock{" "}
          <div className="stock__value">
            <div className="bluestock">$16.32 </div>
            <div className="greenstock"> -1.67(+9.28%)</div>
          </div>
        </div>
        <div style={{ fontSize: 10 }}>
          <img className="stock__image" src="/image/graph-c.png" alt="3" />
          <br />
          Money Market{" "}
          <div className="stock__value">
            <div className="bluestock">$11.20 </div>
            <div className="greenstock">-0.38(-3.28%)</div>
          </div>
        </div>
      </div>
      <div className="recommend">
        <a href="#top"> + Recommend an exchange</a>
      </div>
    </div>
  );
};

export default InvestmentOptions;
