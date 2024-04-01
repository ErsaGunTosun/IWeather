import React from 'react'


function Property({icon,name,value,isLast=false}) {
    return (
        <div className="flex flex-col mb-2 justify-center items-center">
            <div className="w-full flex p-2 text-white">
                {/* <FaTemperatureHalf className="text-md" /> */}
                {icon}
                <p className="text-lg italic ms-2 p-0 ">{name}: {value}</p>

            </div>
            {isLast ? "" : <hr className="w-full basis-full bg-transparent border-1 border-gray-300/25" />}
        </div>
    )
}

export default Property