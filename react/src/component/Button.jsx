import React from 'react';
import { GoPlus } from "react-icons/go";
import { PiExportBold } from "react-icons/pi";
import { RiLayoutGridLine } from "react-icons/ri";

function Button() {
  return (
    <>
      <div className='button flex gap-3'>
        <button className='flex items-center gap-1 px-2 py-2 rounded-md bg-red-500 text-white font-bold '>
          <GoPlus className="text-lg font-bold" /> Register
        </button>
        <button className='flex items-center gap-1 px-2 py-2 rounded-md bg-white text-black font-bold border-2 border-bg-gray ml-28'>
          <PiExportBold className="text-lg font-bold" /> Export
        </button>
        <button className='flex items-center gap-1 px-2 py-2 rounded-md bg-white text-black font-bold border-2 border-bg-gray'>
          <RiLayoutGridLine className="text-lg font-bold" /> Layout
        </button>
      </div>
    </>
  );
}

export default Button;