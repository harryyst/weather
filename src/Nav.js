import React from "react";
import { connect } from "react-redux";
import {inputAction,toggleUnitAction} from "./redux/actions/navActions";


function Nav(props) {
  return (
    <nav>
      <div>
        <input
          className="search-input"
          value={props.input}
          onChange={event=>props.changeInput(event.target.value)}
        />
        <button className="search-btn" onClick={props.handleSearch}>
          <i className="fa fa-search" />
        </button>
        <button className="temp-switch" onClick={props.toggleUnit}>
          <i
            className="fa fa-thermometer-empty temp-switch__icon"
            aria-hidden="true"
          />
          <sup>&deg;</sup>
          {props.unit.toUpperCase()}

        </button>
      </div>
    </nav>
  );
}

const mapStateToProps = state => ({
  input: state.navigation.input,
  unit: state.navigation.unit,
});

const mapDispatchToProps = dispatch => ({
  changeInput: input => dispatch(inputAction(input)),
  toggleUnit: () => dispatch(toggleUnitAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
