import React from "react";

import compass from "./icon/icon-compass.png";
import umberella from "./icon/icon-umberella.png";
import wind from "./icon/icon-wind.png";
import { connect } from "react-redux";

function WeatherCondition(props) {
  return (
    <section className="weather-condition">
      <div className="weather-condition__location">{props.cityName}</div>
      <div className="weather-condition__temp">
        {props.current.maxCelsius} {props.unit.toUpperCase()}
      </div>
      <div className="weather-condition__desc">
        <div>
          <img src={umberella} />
          <span className="citem">{props.current.humidity}%</span>
        </div>
        <div>
          <img src={wind} />
          <span className="citem">{props.current.windSpeed} km/h</span>
        </div>
        <div>
          <img src={compass} />
          <span className="citem">{props.current.windDirection}</span>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  input: state.navigation.input,
  cityName: state.weather.cityName,
  current: state.weather.current,

});

export default connect(mapStateToProps)(WeatherCondition);

