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
<div>
    {
    bookings?.length < 1  ? <EmtyContent /> : 
  (<div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 my-12">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>District</th>
        <th>Division</th>
        <th>Area</th>
        <th>City</th>
        <th>TotalCost</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
         {
        bookings.map((booking, i) => (<tr key={booking._id}>
        <th>{i + 1}</th>
        <td className="text-nowrap">{booking.service_name}</td>
        <td className="text-nowrap">{booking.district}</td>
        <td className="text-nowrap">{booking.division}</td>
        <td className="text-nowrap">{booking.area}</td>
        <td className="text-nowrap">{booking.city}</td>
        <td className="text-nowrap">{booking.totalCost}</td>
        <td className="text-nowrap">{booking.status}</td>
        <td className="text-nowrap flex gap-4">
          <Tooltip content="View Details" showArrow={true}>
          <MyModal booking={booking} />
          </Tooltip> 
           <Tooltip content="Cancel Booking" showArrow={true}>
            <RiDeleteBin6Line onClick={() => handleRemoveBooking(booking._id)} size={20} className="cursor-pointer" />
          </Tooltip>  
        </td>
      </tr>))
         }
    </tbody>
  </table>
  </div>
  
  )}
    </div>
   
  )
}

export default BookingTable