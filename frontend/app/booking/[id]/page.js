"use client";
import BookingForm from "../../../components/BookingForm";

export default function BookingPage({ params }) {
  return (
    <div>
      <h2>Confirm Booking</h2>
      <BookingForm propertyId={params.id} />
    </div>
  );
}
