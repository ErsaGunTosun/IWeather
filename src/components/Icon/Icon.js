import React from 'react'

import { MdSunny } from "react-icons/md";
import {
    BsCloudSunFill, BsCloudFill, BsCloudsFill, BsCloudDrizzleFill,
    BsCloudRainHeavyFill, BsCloudLightningRainFill, BsCloudSnowFill, BsCloudFog2Fill
} from "react-icons/bs";

function Icon({ type,className,size  }) {
    const description = {
        "clear sky": <MdSunny size={size} />,
        "overcast clouds": <BsCloudSunFill size={size} />,
        "light rain":<BsCloudDrizzleFill size={size}/>,
        "few clouds": <BsCloudSunFill size={size}/>,
        "scattered clouds": <BsCloudFill size={size}/>,
        "broken clouds": <BsCloudsFill size={size}/>,
        "shower rain": <BsCloudDrizzleFill  size={size}/>,
        "rain": <BsCloudRainHeavyFill size={size}/>,
        "thunderstorm": <BsCloudLightningRainFill size={size}/>,
        "snow": <BsCloudSnowFill size={size}/>,
        "mist": <BsCloudFog2Fill size={size}/>,
    }

    return (
        <div className={className}>{
            Object.keys(description).map((key) => {
                if (key == type) {
                    return (
                        description[key]
                    );
                }
            })}
        </div>
    )
}

export default Icon