import React from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import axios from 'axios';
import Main from './Main';
import { formatRFC3339WithOptions } from 'date-fns/fp';
import { getWeather } from "./axios";
import { connect } from "react-redux";
import { updateWeatherAction } from "./redux/actions/weatherAction";
import {inputAction,toggleUnitAction} from "./redux/actions/navActions";

class App extends React.Component {
	constructor(props) {
		super(props);

		
	}

  componentDidMount() {
    getWeather("Brisbane").then(this.updateWeather);
  }

  updateWeather = (data) => {
    const weather = {
      cityName: data.city.name,
      current: data.current,
      forecasts: data.forecast.slice(0, 10),
    };
    this.props.updateWeather(weather);
  };

  handleSearch = () => {
    getWeather(this.props.input).then(this.updateWeather);
  };

	handleChangeLimit = limit => {
		this.setState({ limit });
  }
  
  handleInputChange = (event) => {
    const value = event.target.value;
    this.props.changeInput(value);
  };

  // toggleUnit = () => {
	//   this.setState(state => ({ unit: state.unit === "c" ? "f" : "c" }));
  // }

	render() {
		return (
			<div className="weather-channel__container">
				<Header />
        <Nav 
             handleSearch={this.handleSearch}
            />
				<Main/>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state =>({
  input: state.navigation.input,
})
const mapDispatchToProps = dispatch => ({
  updateWeather: weather => dispatch(updateWeatherAction(weather))
});
export default connect(mapStateToProps,mapDispatchToProps)(App);

