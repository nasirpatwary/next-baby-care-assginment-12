import { cancelBooking } from "@/actions/server/bookings"
import toast from "react-hot-toast"

export const removeBooking = async (id, setBookings) => {
  toast((t) =>  (
    <div className="space-y-4">
      <p>Are you sure you want to delete?</p>
      <div className="flex justify-end gap-4">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="border duration-500 border-green-600
        text-green-600 cursor-pointer px-4 py-1 rounded font-semibold "
        >
          No
        </button>
        <button
          className="border duration-500 border-red-600 cursor-pointer px-4 py-1 rounded font-semibold text-red-600"
          onClick={async () => {
            toast.dismiss(t.id);
            const res = await cancelBooking(id);
            if (res.deletedCount > 0) {
              toast.success("removed booking!")
              setBookings((prev) => prev.filter(item => item._id !== id))
            }
          }}
        >
          Yes
        </button>
      </div>
    </div>
  ));
}