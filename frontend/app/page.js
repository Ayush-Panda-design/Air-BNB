"use client";
import { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import { getAllProperties } from "../services/propertyService";

export default function HomePage() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getAllProperties().then(setProperties);
  }, []);

  return (
    <div className="grid">
      {properties.map((property) => (
        <PropertyCard key={property._id} property={property} />
      ))}
    </div>
  );
}
