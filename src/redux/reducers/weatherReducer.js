import { CHANGE_LIMIT, UPDATE_WEATHER } from "../actions/weatherAction";


const initialState = {
    cityName: '',
	current: {},
	forecasts: [],
    limit: 5,
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case CHANGE_LIMIT:
            return {
                ...state,
                limit:action.payload.limit,
            };
        case UPDATE_WEATHER:
            return {
                ...state,
                cityName: action.payload.weather.cityName,
                current: action.payload.weather.current,
                forecasts: action.payload.weather.forecasts,
            };

        default:
            return state;
    }
}

export default reducer;