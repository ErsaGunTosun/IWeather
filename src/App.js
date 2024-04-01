import React, { useEffect } from "react";

// Components
import Header from './components/Header/Header'
import Property from './components/Property/Property'
import Day from "./components/Day/Day";

// Utils
import getLocation from "./utils/getLocation";


import { FaCloudMoon, FaTemperatureHalf, FaWind, FaCloudscale } from "react-icons/fa6";
import { IoWaterOutline, IoSunnyOutline, IoRainyOutline } from "react-icons/io5";
import { LiaCloudscale } from "react-icons/lia";

function App() {

  useEffect(() => {
    let isGetLocatin = getLocation();
    if (isGetLocatin)
      console.log("sa")
    else
      console.log("as")
  }, [])


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
                    <p className="text-xl font-bold text-white">Istanbul, TR</p>
                    <p className="text-sm text-white">Monday,May 15, 2023</p>
                  </div>
                  <div className="flex flex-row basis-3/5">
                    <div className="flex basis-2/3 xl:basis-1/2 justify-end items-end  text-center">
                      <div className="xl:w-full h-full flex flex-col">
                        <div className="basis-1/4 xl:basis-2/3 "></div>
                        <div className="flex flex-col basis-3/4 xl:basis-1/3 justify-center text-white ">
                          <p className="text-md font-bold">28°C</p>
                          <p className="text-sm">26°C / 32°C</p>
                          <p className="text-xs">Few clouds</p>
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
                <Property icon={<FaTemperatureHalf className="text-md" />} name={"Thermal sensation"} value={"%28"} />
                <Property icon={<FaWind className="text-md" />} name={"Wind speed"} value={"%28"} />
                <Property icon={<IoWaterOutline className="text-md" />} name={"Air humandity"} value={"%28"} />
                <Property icon={<IoSunnyOutline className="text-md" />} name={"UV index"} value={"%28"} />
                <Property icon={<IoRainyOutline className="text-md" />} name={"Probaility of rain"} value={"%28"} />
                <Property icon={<LiaCloudscale className="text-md" />} name={"Pressure"} value={"%28"} isLast={true} />
              </div>


              <div className="h-full flex flex-col grow md:basis-2/4 px-4 justify-evenly  bg-gray-600 rounded-md">
                <Day icon={<FaCloudMoon className="text-7xl font-normal" />}
                  day={"Monday"} date={"May 16"} weather={"Clouds"} temp={"28°C / 32°C"} />
                <Day icon={<FaCloudMoon className="text-7xl font-normal" />}
                  day={"Monday"} date={"May 16"} weather={"Clouds"} temp={"28°C / 32°C"} />
                <Day icon={<FaCloudMoon className="text-7xl font-normal" />}
                  day={"Monday"} date={"May 16"} weather={"Clouds"} temp={"28°C / 32°C"} />
                <Day icon={<FaCloudMoon className="text-7xl font-normal" />}
                  day={"Monday"} date={"May 16"} weather={"Clouds"} temp={"28°C / 32°C"} />
                <Day icon={<FaCloudMoon className="text-7xl font-normal" />}
                  day={"Monday"} date={"May 16"} weather={"Clouds"} temp={"28°C / 32°C"} isLast={true} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

