import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

// Components
import Search from '../Search/Search';

// Utils 
import getLocation from '../../utils/getLocation';

// Icons
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";
import { FaCloud } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { changeUnits } from '../../stores/units';


function Header({ setCoords }) {
    const units = useSelector((state) => state.units.value);
    const dispatch = useDispatch()

    const setUnits = ()=>{
        dispatch(changeUnits(!units))
        localStorage.setItem("units", !units)
    }

    const locationRead = async (pos) => {
        setCoords([pos.coords.latitude, pos.coords.longitude])
    }
    return (
        <nav className="bg-transparent">
            <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 md:flex-nowrap ">
                <div className="basis-3/5 order-first flex items-center md:justify-start  md:me-2  md:basis-2/6">
                    <a href="#" className='flex'>
                        <FaCloud className='text-blue-light text-2xl me-1 mb-2' />
                        <span className="self-center text-2xl font-bold whitespace-nowrap text-white ">IWeather</span>
                    </a>
                </div>

                <Search setCoords={setCoords} />

                <div className='flex items-center justify-end  basis-2/5 order-2 mb-2 md:mb-0 md:justify-end lg:justify-start md:basis-1/6  md:order-last lg:basis-1/4 '>
                    <button onClick={() => getLocation(locationRead)} type="button" className="bg-gray-600 px-4 py-3.5 ms-2 rounded-md transition ease-in-out delay-50 hover:scale-95">
                        <IoLocationSharp size={20} className='text-gray-200' />
                    </button>
                    <button type="button" onClick={()=>setUnits()} className=" bg-gray-600 px-4 py-3.5 ms-2 rounded-md transition ease-in-out delay-50 hover:scale-95">
                        {
                            units ?
                                <TbTemperatureCelsius size={20} className='text-gray-200 ' />
                                :
                                <TbTemperatureFahrenheit size={20} className='text-gray-200 ' />
                        }
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header