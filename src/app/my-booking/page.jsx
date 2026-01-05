
import { getAllBookings } from "@/actions/server/bookings"
import Container from "@/components/shared/Container"
import BookingTable from "./_component/BookingTable"
export const metadata = {
  title: "My Booking",
  description: "professional care at home in Bangladesh. Reliable, 24/7 patient support"
}

const MyBooking = async () => {
  const bookings = await getAllBookings()
  return (
    <Container>
     <BookingTable initialBookings={bookings} />
    </Container>
  )
}

export default MyBooking