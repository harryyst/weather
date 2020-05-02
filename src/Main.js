import React from "react";
import Img1 from "./icon/icon-umberella.png";
import Img2 from "./icon/icon-wind.png";
import Img3 from "./icon/icon-compass.png";


class Main extends React.Component {
  render() {
    return (
        <main>
        <section className="weather-condition">
          <div className="weather-condition__location">Brisbane</div>
          <div style={{textAlign: "center", fontSize: "14px"}}>Clear</div>
          <div className="weather-condition__temp">19 c</div>
          <div className="weather-condition__desc">
            <div>
              <img src={Img1} />
              <span className="citem">20%</span>
            </div>
            <div>
              <img src={Img2} /> <span className="citem">3 km/h</span>
            </div>
            <div>
              <img src={Img3} /> <span className="citem">NE</span>
            </div>
          </div>
        </section>

        <section className="weather-forecast">
          <div className="forecast__switch">
            <button className="forecast__switch_0 switch-active">5 items</button>
            <button className="forecast__switch_1">10 items</button>
          </div>

          <div className="weather-forecast__row">
            <span className="weather-forecast__day">Fri</span>
            <span className="weather-forecast__icon">
              <i className="fa fa-clock-o"></i> 10:00
            </span>
            <span className="weather-forecast__high">19 c</span>
            <span className="weather-forecast__low">8 c</span>
          </div>
          <div className="weather-forecast__row">
            <span className="weather-forecast__day">Fri</span>
            <span className="weather-forecast__icon">
              <i className="fa fa-clock-o"></i> 13:00
            </span>
            <span className="weather-forecast__high">19 c</span>
            <span className="weather-forecast__low">8 c</span>
          </div>

          <div className="weather-forecast__row">
            <span className="weather-forecast__day">Fri</span>
            <span className="weather-forecast__icon">
              <i className="fa fa-clock-o"></i> 16:00
            </span>
            <span className="weather-forecast__high">19 c</span>
            <span className="weather-forecast__low">8 c</span>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;