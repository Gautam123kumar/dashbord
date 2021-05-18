
import './App.css';
import Card1 from './Components/Card1';
import Card2 from './Components/Card2';
import Card3 from './Components/Card3'

import GrantRecommend from './Components/GrantRecommenend';
import Header from './Components/Header';
import HomeRest from './Components/HomeRest';
import InvestmentOptions from './Components/InvestmentOptions';
import Rectanle from './Components/Rectangle';

function App() {
  return (
    <div className="App">
      <div className="Dashbord__Home">
      <div
          style={{
            backgroundImage: `url("/image/malaysia-floods-l.jpg")`,
          }}
          className="Mask-Copy"
        >
        <Header />
        <Rectanle />
        <HomeRest / >
        <InvestmentOptions/>
        <GrantRecommend/>
        <div className="card__container">
          <div className="card__container__1">
            <Card1/>
            <Card2/>
            <Card3/>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
