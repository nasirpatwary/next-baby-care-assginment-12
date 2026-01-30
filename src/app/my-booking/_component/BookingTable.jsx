"use client"
import { RiDeleteBin6Line } from "react-icons/ri";

import {Tooltip} from "@heroui/react";
import { removeBooking } from "@/utils/removeBooking";
import { useState } from "react";
import EmtyContent from "@/components/shared/EmtyContent";
import MyModal from "@/components/modals/MyModal";
const BookingTable = ({initialBookings}) => {
  const [bookings, setBookings] = useState(initialBookings)

  const handleRemoveBooking = async id =>{
   await removeBooking(id, setBookings)
  }
  return (
<div className="transition-colors duration-300">
  {bookings?.length < 1 ? (
    <EmtyContent />
  ) : (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-12 shadow-sm">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead className="bg-gray-50 dark:bg-slate-800/50">
          <tr className="text-gray-700 dark:text-slate-300 border-b border-gray-200 dark:border-slate-800">
            <th>#</th>
            <th>Name</th>
            <th>District</th>
            <th>Division</th>
            <th>Area</th>
            <th>City</th>
            <th>Total Cost</th>
            <th>Status</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {bookings.map((booking, i) => (
            <tr 
              key={booking._id} 
              className="border-b border-gray-100 dark:border-slate-800/50 transition-colors"
            >
              <th className="font-medium">{i + 1}</th>
              <td className="text-nowrap font-medium">
                {booking.service_name}
              </td>
              <td className="text-nowrap">{booking.district}</td>
              <td className="text-nowrap">{booking.division}</td>
              <td className="text-nowrap">{booking.area}</td>
              <td className="text-nowrap">{booking.city}</td>
              <td className="text-nowrap font-bold ">
                ${booking.totalCost}
              </td>
              <td className="text-nowrap">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  booking.status === 'pending' 
                  ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-500' 
                  : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-500'
                }`}>
                  {booking.status}
                </span>
              </td>
              <td className="text-nowrap">
                <div className="flex items-center justify-center gap-4">
                  <Tooltip content="View Details" showArrow={true} className="dark:bg-slate-800 dark:text-white">
                    <div className="p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                       <MyModal booking={booking} />
                    </div>
                  </Tooltip>
                  
                  <Tooltip content="Cancel Booking" showArrow={true} color="danger">
                    <button 
                      onClick={() => handleRemoveBooking(booking._id)} 
                      className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all active:scale-90"
                    >
                      <RiDeleteBin6Line size={20} />
                    </button>
                  </Tooltip>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>
   
  )
}

export default BookingTable