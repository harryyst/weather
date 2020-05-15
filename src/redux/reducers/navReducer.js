import {CHANGE_INPUT} from "../actions/navActions";
import {TOGGLE_UNIT} from "../actions/navActions";

const initialState = {
    input:"",
    unit:"c",
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case CHANGE_INPUT:
            const input = action.payload.input;
            return {
                ...state,
                input,
            };
        case TOGGLE_UNIT:
            return {
                ...state,
                unit:state.unit==="c"?"f":"c"
            };

        default:
            return state;
    }
}

export default reducer;