import axios from 'axios'
const success = (pos) => {
    var crd = pos.coords;

    // location reverse geocoding
    // axios.get(`http://api.openweathermap.org/geo/1.0/reverse?units=metrics&lat=${crd.latitude}&lon=${crd.longitude}&appid=`)
    // .then(rslt=>{
    //     console.log(rslt);
    // });

    // location get weather data
    // axios.get(`http://api.openweathermap.org/data/2.5/forecast?units=metrics&lat=${crd.latitude}&lon=${crd.longitude}&appid=`)
    //     .then(rslt => {
    //         rslt.data.list.map((item) => { console.log(item) });
    //     });

}
const errors = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

const getLocation = () => {
    if (navigator.geolocation) {
        navigator.permissions
            .query({ name: "geolocation" })
            .then(function (result) {
                if (result.state === "granted") {
                    navigator.geolocation.getCurrentPosition(success);
                } else if (result.state === "prompt") {
                    navigator.geolocation.getCurrentPosition(success, errors);
                } else if (result.state === "denied") {
                    return false;
                }
                result.onchange = function () {
                    console.log(result.state);
                };

            });
    } else {
        alert("Sorry Not available!");
        return false;
    }

    return true;
}

export default getLocation;