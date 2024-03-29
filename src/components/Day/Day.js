import React from 'react'

function Day({icon,day,date,weather,temp}) {
    return (
        <div className="h-full flex flex-col items-center justify-center  ">
            <div className="  text-white w-full p-3 flex ">
                {icon}
                {/* <FaCloudMoon className="text-7xl font-normal" /> */}
                <div className="text-center">
                    <p className="ms-2 p-0  italic text-lg">{day}</p>
                    <p className="ms-2 p-0  italic text-sm">{date}</p>
                </div>
                <div className="w-full text-end">
                    <p className="ms-2 p-0  italic text-lg">{weather}</p>
                    <p className="ms-2 p-0  italic text-sm">{temp}</p>
                </div>

            </div>
            <hr class="basis-full w-full bg-transparent border-1 border-gray-300/25" />
        </div>
    )
}

export default Day