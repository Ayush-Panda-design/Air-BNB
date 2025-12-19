"use client";
import { useEffect, useState } from "react";
import { getPropertyById } from "../../../services/propertyService";
import BookingForm from "../../../components/BookingForm";

export default function PropertyDetails({ params }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPropertyById(params.id).then(setData);
  }, [params.id]);

  if (!data) return <p>Loading...</p>;

  const { property, reviews } = data;

  return (
    <div>
      <h1>{property.title}</h1>
      <p>{property.description}</p>
      <p>₹{property.price} / night</p>

      <BookingForm propertyId={property._id} />

      <h3>Reviews</h3>
      {reviews.map((r) => (
        <p key={r._id}>
          {r.user.name}: ⭐{r.rating}
        </p>
      ))}
    </div>
  );
}
