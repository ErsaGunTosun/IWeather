const getLocation = async (locationRead) => {
    if (navigator.geolocation) {
        navigator.permissions
            .query({ name: "geolocation" })
            .then(function (result) {
                if (result.state === "granted") {
                    navigator.geolocation.getCurrentPosition(locationRead);
                } else if (result.state === "prompt") {
                    navigator.geolocation.getCurrentPosition(locationRead);
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