import React from 'react'


function Property({icon,name,value,isLast=false}) {
    return (
        <div className="h-full flex flex-col items-center justify-center ">
            <div className="  text-white w-full p-2 flex ">
                {/* <FaTemperatureHalf className="text-md" /> */}
                {icon}
                <p className="ms-2 p-0  italic text-lg">{name}: {value}</p>

            </div>
            {isLast ? "" : <hr class="basis-full w-full bg-transparent border-1 border-gray-300/25" />}
        </div>
    )
}

export default Property