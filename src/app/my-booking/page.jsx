import { getAllBookings } from "@/actions/server/bookings";
import Container from "@/components/shared/Container";
import BookingTable from "./_component/BookingTable";
export const metadata = {
  title: "My Booking",
  description:
    "professional care at home in Bangladesh. Reliable, 24/7 patient support",
};

const MyBooking = async () => {
  const bookings = await getAllBookings();
  return (
    <Container className="my-8 md:my-12">
      <div  className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Book an Expert Caregiver in Minutes
        </h2>
        <p className="max-w-[80ch] mx-auto">
          Getting the right care shouldn't be complicated. With Care.xyz, you
          can select your required service, choose a preferred schedule, and
          confirm your booking instantly. Our seamless process ensures that help
          arrives at your doorstep exactly when you need it.
        </p>
      </div>
      <BookingTable initialBookings={bookings} />
    </Container>
  );
};

export default MyBooking;
