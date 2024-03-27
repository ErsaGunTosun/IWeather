import React from "react";

// Components
import Header from './components/Header/Header'

import { FaCloudMoon, FaTemperatureHalf,FaWind,FaCloudscale } from "react-icons/fa6";
import { IoWaterOutline,IoSunnyOutline,IoRainyOutline   } from "react-icons/io5";
import { LiaCloudscale } from "react-icons/lia";

function App() {
  return (
    <div className="App  h-full w-full  bg-gray-900">
      <div class="flex h-screen  justify-center w-full ">
        <div className="container m-0 p-0 flex h-screen flex-col">
          <Header />
          <div className="h-full grid grid-rows-8 grid-flow-col ">
            <div></div>
            <div class="flex-1 grid row-span-6 grid-cols-4 grid-flow-row gap-2 bg-gray-900 text-center justify-center items-center text-4xl">

              <div className="h-full col-span-1 grid grid-cols-1 grid-flow-row  ">
                <div className="grid grid-cols-3 grid-flow-row  w-full px-6 py-6 text-start rounded-md bg-gray-600 ">
                  <div className="col-span-4 ">
                    <p className="text-xl font-bold text-white">Istanbul, TR</p>
                    <p className="text-sm text-white">Monday,May 15, 2023</p>
                  </div>
                  <div className="flex text-center items-center justify-center">
                    <div className="text-white">
                      <p className="text-md font-bold">28°C</p>
                      <p className="text-sm">26°C / 32°C</p>
                      <p className="text-xs">Few clouds</p>
                    </div>
                  </div>
                  <div className="flex justify-end items-center col-span-3 text-white">
                    <FaCloudMoon size={192} />
                  </div>
                </div>
              </div>


              <div className="h-full col-span-1 grid grid-cols-1 gap-4 place-content-center p-4 bg-gray-600 rounded-md">
                <div className="h-full flex flex-col items-center justify-center ">
                  <div className="  text-white w-full p-2 flex ">
                    <FaTemperatureHalf className="text-md" />
                    <p className="ms-2 p-0  italic text-lg">Thermal sensation: %28</p>

                  </div>
                  <hr class="basis-full w-full bg-transparent border-1 border-gray-300/25"/>
                </div>

                <div className="h-full flex flex-col items-center justify-center ">
                  <div className="  text-white w-full p-2 flex ">
                    <FaWind className="text-md" />
                    <p className="ms-2 p-0  italic text-lg">Wind speed: %28</p>

                  </div>
                  <hr class="basis-full w-full bg-transparent border-1 border-gray-300/25"/>
                </div>
                <div className="h-full flex flex-col items-center justify-center ">
                  <div className="  text-white w-full p-2 flex ">
                    <IoWaterOutline className="text-md" />
                    <p className="ms-2 p-0  italic text-lg">Air humidity: %28</p>

                  </div>
                  <hr class="basis-full w-full bg-transparent border-1 border-gray-300/25"/>
                </div>
                <div className="h-full flex flex-col items-center justify-center ">
                  <div className="  text-white w-full p-2 flex ">
                    <IoSunnyOutline className="text-md" />
                    <p className="ms-2 p-0  italic text-lg">UV Index: %28</p>

                  </div>
                  <hr class="basis-full w-full bg-transparent border-1 border-gray-300/25"/>
                </div>
                <div className="h-full flex flex-col items-center justify-center ">
                  <div className="  text-white w-full p-2 flex ">
                    <IoRainyOutline className="text-md" />
                    <p className="ms-2 p-0  italic text-lg">Probability of rain: %28</p>

                  </div>
                  <hr class="basis-full w-full bg-transparent border-1 border-gray-300/25"/>
                </div>
                <div className="h-full flex flex-col items-center justify-center ">
                  <div className="  text-white w-full p-2 flex ">
                    <LiaCloudscale className="text-md font-normal" />
                    <p className="ms-2 p-0  italic text-lg">Pressure: %28</p>

                  </div>
                </div>
              </div>


              <div className="h-full col-span-2 grid grid-cols-1 gap-4 place-content-center p-4  bg-gray-600 rounded-md">
                <div className="h-full flex flex-col items-center justify-center  ">
                  <div className="  text-white w-full p-3 flex ">
                    <FaCloudMoon className="text-7xl font-normal" />
                    <div className="text-center">
                      <p className="ms-2 p-0  italic text-lg">Monday</p>
                      <p className="ms-2 p-0  italic text-sm">May 16</p>
                    </div>
                    <div className="w-full text-end">
                      <p className="ms-2 p-0  italic text-lg">Clouds</p>
                      <p className="ms-2 p-0  italic text-sm">28°C / 32°C</p>
                    </div>

                  </div>
                  <hr class="basis-full w-full bg-transparent border-1 border-gray-300/25" />
                </div>
                <div className="h-full flex flex-col items-center justify-center  ">
                  <div className="  text-white w-full p-3 flex ">
                    <FaCloudMoon className="text-7xl font-normal" />
                    <div className="text-center">
                      <p className="ms-2 p-0  italic text-lg">Monday</p>
                      <p className="ms-2 p-0  italic text-sm">May 16</p>
                    </div>
                    <div className="w-full text-end">
                      <p className="ms-2 p-0  italic text-lg">Clouds</p>
                      <p className="ms-2 p-0  italic text-sm">28°C / 32°C</p>
                    </div>

                  </div>
                  <hr class="basis-full w-full bg-transparent border-1 border-gray-300/25" />
                </div>
                <div className="h-full flex flex-col items-center justify-center  ">
                  <div className="  text-white w-full p-3 flex ">
                    <FaCloudMoon className="text-7xl font-normal" />
                    <div className="text-center">
                      <p className="ms-2 p-0  italic text-lg">Monday</p>
                      <p className="ms-2 p-0  italic text-sm">May 16</p>
                    </div>
                    <div className="w-full text-end">
                      <p className="ms-2 p-0  italic text-lg">Clouds</p>
                      <p className="ms-2 p-0  italic text-sm">28°C / 32°C</p>
                    </div>

                  </div>
                  <hr class="basis-full w-full bg-transparent border-1 border-gray-300/25" />
                </div>
                <div className="h-full flex flex-col items-center justify-center  ">
                  <div className="  text-white w-full p-3 flex ">
                    <FaCloudMoon className="text-7xl font-normal" />
                    <div className="text-center">
                      <p className="ms-2 p-0  italic text-lg">Monday</p>
                      <p className="ms-2 p-0  italic text-sm">May 16</p>
                    </div>
                    <div className="w-full text-end">
                      <p className="ms-2 p-0  italic text-lg">Clouds</p>
                      <p className="ms-2 p-0  italic text-sm">28°C / 32°C</p>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="flex h-screen  justify-center w-full ">
        <div className="container m-0 p-0 flex h-screen flex-col">
          <div class="flex-1 grid grid-cols-2  grid-flow-row bg-gray-900 text-center justify-center items-center text-4xl pt-2">
            <div className="h-full bg-red-500">
              today chart
            </div>
            <div className="h-full bg-blue-500">
              tomorrow chart
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
