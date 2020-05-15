import { combineReducers} from "redux";
import navReducer from "./navReducer";
import weatherReducer from "./weatherReducer";

const reducer = combineReducers({
    navigation:navReducer,
    weather:weatherReducer
});

export default reducer;