import React from "react";

// Components
import Header from './components/Header/Header'

import { FaCloudMoon } from "react-icons/fa6";

function App() {
  return (
    <div className="App w-full h-full px-10 bg-gray-900">
      <div class="flex h-screen flex-col">
        <Header />
        <div class="flex-1 grid grid-cols-4 grid-flow-row bg-gray-900 text-center justify-center items-center text-4xl">
          <div className="h-full col-span-3 grid grid-cols-3 grid-flow-row">

            <div className="h-full grid grid-rows-5 grid-flow-col">
              <div></div>
              <div className="grid grid-cols-3 grid-flow-row row-span-3 w-full px-6 py-6 text-start rounded-md bg-gray-600 ">
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


            <div className="h-full col-span-2 grid grid-cols-2 gap-4 p-4 bg-purple-500">
              <div className="h-full flex items-center justify-center bg-green-500">p1</div>
              <div className="h-full flex items-center justify-center bg-green-500">p2</div>
              <div className="h-full flex items-center justify-center bg-green-500">p3</div>
              <div className="h-full flex items-center justify-center bg-green-500">p4</div>
              <div className="h-full flex items-center justify-center bg-green-500">p5</div>
              <div className="h-full flex items-center justify-center bg-green-500">p6</div>
            </div>
          </div>
          <div className="h-full bg-blue-500">
            other days
          </div>
        </div>
      </div>

      <div class="flex h-screen flex-col">
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
  );
}

export default App;
