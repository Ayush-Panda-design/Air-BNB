"use client";
import { useState } from "react";
import { createBooking } from "../services/bookingService";
import { useRouter } from "next/navigation";

export default function BookingForm({ propertyId }) {
  const [dates, setDates] = useState({});
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    await createBooking({
      property: propertyId,
      startDate: dates.startDate,
      endDate: dates.endDate
    });
    router.push("/dashboard/user");
  };

  return (
    <form className="form" onSubmit={submit}>
      <input type="date" onChange={(e) =>
        setDates({ ...dates, startDate: e.target.value })} />

      <input type="date" onChange={(e) =>
        setDates({ ...dates, endDate: e.target.value })} />

      <button>Book Now</button>
    </form>
  );
}
