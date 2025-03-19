import React from "react";
import { FaUser } from "react-icons/fa";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { FaFileInvoice } from "react-icons/fa";

function Customer() {
  return (
    <>
      <div className="flex gap-3">
        <p className="text-gray-500 flex mt-4 text-center gap-1">
          <FaUser className="text-lg mt-1" /> Customer
          <HiMiniChevronUpDown className="text-lg mt-1" />
        </p>
         <p className="text-gray-500 flex mt-4 text-center gap-1 ml-28 ">
          <FaFileInvoice className="text-lg mt-1" /> Last Invoice
          
        </p>
        <p className="text-gray-500 flex mt-4 text-center gap-1 ">
          Action
          
        </p>
      </div>
    </>
  );
}

export default Customer;