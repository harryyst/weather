export const CHANGE_LIMIT = "CHANGE_LIMIT";
export const UPDATE_WEATHER = "UPDATE_WEATHER";

export const changeLimitAction = limit =>({
    type:CHANGE_LIMIT,
    payload:{limit},
});

export const updateWeatherAction = weather =>({
    type:UPDATE_WEATHER,
    payload:{weather},
});