const success = (pos) => {
    var crd = pos.coords;

    // console.log("Your current position is:");
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
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