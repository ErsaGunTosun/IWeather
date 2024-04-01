import React from 'react'

function Day({ icon, day, date, weather, temp, isLast = false }) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-full flex p-2 text-white">
                {icon}
                {/* <FaCloudMoon className="text-7xl font-normal" /> */}
                <div className="text-center">
                    <p className="text-lg italic ms-2 p-0  ">{day}</p>
                    <p className="text-lg italic ms-2 p-0">{date}</p>
                </div>
                <div className="w-full text-end">
                    <p className="text-lg italic ms-2 p-0">{weather}</p>
                    <p className="text-lg italic ms-2 p-0">{temp}</p>
                </div>

            </div>
            {isLast ? "" : <hr className="w-full basis-full bg-transparent border-1 border-gray-300/25" />}
        </div>
    )
}

export default Day