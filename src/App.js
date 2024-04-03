import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";


// Components
import Header from './components/Header/Header'
import Property from './components/Property/Property'
import Day from "./components/Day/Day";

// Utils
import getLocation from "./utils/getLocation";
import getCurrentWeather from "./utils/getWeather";


import { FaCloudMoon, FaTemperatureHalf, FaWind, FaMountain } from "react-icons/fa6";
import { IoWaterOutline, IoSunnyOutline } from "react-icons/io5";
import { LiaCloudscale } from "react-icons/lia";



function App() {
  const [coords, setCoords] = useState([0,0])
  const weather = useSelector((state) => state.weather)
  const location = useSelector((state) => state.location.value)
  const dispatch = useDispatch()

  const locationRead = async (pos) => {
    setCoords([pos.coords.latitude, pos.coords.longitude])
  }

  const getDate = (ts) => {
    if (ts != undefined) {
      let date = new Date(ts * 1000);
      const dayS = date.toLocaleDateString("en-UK", { weekday: 'short' });
      const dayL = date.toLocaleDateString("en-UK", { weekday: 'long' });
      const month = date.toLocaleString("en-UK", { month: 'long' });
      return {
        text: `${dayS}, ${month} ${date.getDate()}, ${date.getFullYear()}`,
        day: dayL, month: month,
        date: date.getDate(), year: date.getFullYear()
      };
    }
  }

  const getTime = (ts) => {
    let date = new Date(ts * 1000);
    return `${date.getHours()}:${date.getMinutes()}`;
  }


  useEffect(() => {
    getLocation(locationRead);
  }, [])

  useEffect(() => {
    getCurrentWeather(coords, dispatch);
  }, [coords])


  return (
    <div className="App w-full h-full bg-gray-900">
      <div className="w-full h-screen flex justify-center  ">
        <div className="container h-screen flex-col m-0 p-0 flex ">
          <Header />
          <div className="h-full flex flex-col">

            <div className="flex items-end p-2 text-white">
              <p className="text-3xl font-semibold ">Today Overview</p>
            </div>

            <div className="w-full h-full flex flex-col gap-2 xl:flex-row py-6 px-6 ">

              <div className="h-full basis-full xl:basis-1/4 bg-gray-600 rounded-md">
                <div className="w-full h-full flex flex-col sm:flex-row xl:flex-col p-4 text-start rounded-md">
                  <div className="w-full basis-2/5 pt-6">
                    <p className="text-xl font-bold text-white">{location.name}, {location.country}</p>
                    <p className="text-sm text-white">{getDate(weather.current?.dt)?.text}</p>
                  </div>
                  <div className="flex flex-row basis-3/5">
                    <div className="flex basis-2/3 xl:basis-1/2 justify-end items-end  text-center">
                      <div className="xl:w-full h-full flex flex-col">
                        <div className="basis-1/4 xl:basis-2/3 "></div>
                        <div className="flex flex-col basis-3/4 xl:basis-1/3 justify-center text-white ">
                          <p className="text-md font-bold">{Math.round(weather.current.main?.temp)}</p>
                          <p className="text-sm">{Math.round(weather.current.main?.temp_min)}°C / {Math.round(weather.current.main?.temp_max)}°C</p>
                          <p className="text-xs">{weather.current.weather ? weather.current.weather[0].main : ""}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex basis-1/3 xl:basis-1/2 justify-start items-end text-white">
                      <FaCloudMoon size={192} className="" />
                    </div>
                  </div>
                </div>
              </div>


              <div className="h-full flex flex-col xl:basis-1/4 p-4 justify-evenly bg-gray-600 rounded-md">
                <Property icon={<FaTemperatureHalf className="text-md" />} name={"Thermal sensation"}
                  value={weather.current?.main?.feels_like} />
                <Property icon={<FaWind className="text-md" />} name={"Wind speed"}
                  value={weather.current?.wind?.speed} />
                <Property icon={<IoWaterOutline className="text-md" />} name={"Air Humidity"}
                  value={weather.data?.list ? weather.data?.list[0]?.main?.humidity : ""} />
                <Property icon={<IoSunnyOutline className="text-md" />} name={"Sunset"}
                  value={getTime(weather.current?.sys?.sunset)} />
                <Property icon={<FaMountain className="text-md" />} name={"Sea Level"}
                  value={weather.data?.list ? weather.data?.list[0]?.main?.sea_level : ""} />
                <Property icon={<LiaCloudscale className="text-md" />} name={"Pressure"}
                  value={weather.current?.main?.pressure} isLast={true} />
              </div>


              <div className="h-full flex flex-col grow md:basis-2/4 px-4 justify-evenly  bg-gray-600 rounded-md">
                {
                  Object.keys(weather?.dates).map((key, index) => {
                    let cardIndex = Math.round(weather.dates[key].length / 2);
                    let item = weather.dates[key][cardIndex];
                    let date = getDate(item.dt);
                    return (<Day icon={<FaCloudMoon className="text-7xl font-normal" />}
                      day={date.day} date={`${date.month} ${date.date}`} weather={item.weather[0].main}
                      temp={`${Math.floor(item.main.temp_min)}°C / ${Math.round(item.main.temp_max)}°C`}
                      isLast={index = Object.keys(weather.dates).length - 1 ? true : false} />)
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

