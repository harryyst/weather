export const CHANGE_INPUT = "INPUT";
export const TOGGLE_UNIT = "TOGGLE_UNIT";
export const inputAction = input =>({
    type:CHANGE_INPUT,
    payload:{ input }

});

export const toggleUnitAction =() =>({ type: TOGGLE_UNIT});