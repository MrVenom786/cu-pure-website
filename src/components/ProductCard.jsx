import { Link } from "react-router-dom";

export default function ProductCard({ p }) {
  return (
    <div className="shadow-md bg-white rounded-xl p-4 hover:scale-105 transition">
      <img src={p.image} className="h-48 w-full object-cover rounded-md" />
      <h3 className="text-xl font-bold mt-3">{p.name}</h3>
      <p className="text-gray-600">{p.desc}</p>
      <p className="text-blue-600 font-bold text-lg mt-2">₹{p.price}</p>

      <Link
        to={`/product/${p.id}`}
        className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        View Details
      </Link>
    </div>
  );
}
