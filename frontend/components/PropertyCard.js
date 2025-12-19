import Link from "next/link";

export default function PropertyCard({ property }) {
  return (
    <Link href={`/property/${property._id}`}>
      <div className="card">
        <h3>{property.title}</h3>
        <p>{property.location}</p>
        <strong>₹{property.price}/night</strong>
      </div>
    </Link>
  );
}
