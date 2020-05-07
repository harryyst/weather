import React from "react";
import axios from "axios";

import { format } from "date-fns";

import ForecastRow from "./ForecastRow";

class WeatherForecast extends React.Component {
  state = {
    forecasts: [],
    fiverows:[],
    tenRows:[],
    isFive:true
  };

  async componentDidMount() {
    const res = await axios(
      "https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=brisbane"
    );
    //   console.log(res);
    // const forecasts = res.data.data.forecast.slice(0, 10);
    const fiveRows = res.data.data.forecast.slice(0, 5);
    const tenRows = res.data.data.forecast.slice(0, 10);
    const forecasts = res.data.data.forecast.slice(0, 10);
    this.setState({ fiveRows,tenRows, forecasts});
  }

 isFive=()=>{
    const forecasts = this.state.fiveRows;
    this.setState({ forecasts});
 }

 isTen=()=>{
    const forecasts = this.state.tenRows;
    this.setState({ forecasts});
 }

  render() {
    return (
      <section className="weather-forecast">
        <div className="forecast__switch">
          <button onClick={this.isFive} className="forecast__switch_0 switch-active">5 items</button>
          <button onClick={this.isTen} className={"forecast__switch_1"}>10 items</button>
        </div>
        {
          this.state.forecasts.map((forecast) => {
          const date = new Date(forecast.time * 1000);
          const day = format(date, "EEE");
          const time = format(date, "HH:mm");
          
          return (
            <ForecastRow
              key={forecast.time}
              day={day}
              high={forecast.maxCelsius}
              low={forecast.minCelsius}
              time={time}
            />
          );
        })}
      </section>
    );
  }
}

export default WeatherForecast;