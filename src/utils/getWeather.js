import axios from 'axios';
import { updateWeather, updateCurrentWeather } from '../stores/weather';
import { updateLocation } from '../stores/location';

const getCurrentLocation = (dispatch, isCoords = false, coords = [0, 0], name = "istanbul") => {
    if (isCoords) {
        axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${coords[0]}&lon=${coords[1]}&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
            .then(rslt => {
                dispatch(updateLocation(rslt.data[0]));
            })
    }
    else {
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${"istanbul"}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(rslt => {
                dispatch(updateLocation(rslt.data[0]));
            })
    }
}

const getWeathers = (loc, dispatch) => {
    if (loc.length == 0) return false;
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${loc[0]}&lon=${loc[1]}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(rslt => {
            if (rslt.status == 200) {
                let dates = {};
                rslt.data.list.forEach((item) => {
                    if(item.dt_txt.split(" ")[0].split("-")[2] != rslt.data.list[0].dt_txt.split(" ")[0].split("-")[2])
                    {
                        dates[item.dt_txt.split(" ")[0].split("-")[2]] = [...dates[item.dt_txt.split(" ")[0].split("-")[2]] || [], item];
                    }
                       
                })
                getCurrentLocation(dispatch,true,loc);
                dispatch(updateWeather({ dates: dates, data: rslt.data }));

            }
        })
}


const getCurrentWeather = (loc, dispatch) => {
    if (loc.length == 0) return false;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${loc[0]}&lon=${loc[1]}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(rslt => {
            if (rslt.status == 200) {
                getWeathers(loc, dispatch);
                dispatch(updateCurrentWeather(rslt.data));
            }
        })
}

export default getCurrentWeather;