"use client";
import { useEffect, useState } from "react";
import { getHostDashboard } from "../../../services/propertyService";

export default function HostDashboard() {
  const [data, setData] = useState({ properties: [], bookings: [] });

  useEffect(() => {
    getHostDashboard().then(setData);
  }, []);

  return (
    <div>
      <h2>My Properties</h2>
      {data.properties.map((p) => (
        <p key={p._id}>{p.title}</p>
      ))}

      <h2>Bookings</h2>
      {data.bookings.map((b) => (
        <p key={b._id}>{b.property.title}</p>
      ))}
    </div>
  );
}
