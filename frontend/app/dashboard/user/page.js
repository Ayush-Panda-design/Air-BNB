"use client";
import { useEffect, useState } from "react";
import { getMyBookings } from "../../../services/bookingService";

export default function UserDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getMyBookings().then(setBookings);
  }, []);

  return (
    <div>
      <h2>My Bookings</h2>
      {bookings.map((b) => (
        <p key={b._id}>
          {b.property.title} | ₹{b.totalPrice}
        </p>
      ))}
    </div>
  );
}
