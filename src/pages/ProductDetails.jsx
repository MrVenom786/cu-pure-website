import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  return (
    <div className="max-w-5xl mx-auto mt-12 flex flex-col md:flex-row gap-10">
      <img src={product.image} className="w-full md:w-1/2 rounded-xl shadow" />

      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600 text-lg mt-2">{product.desc}</p>
        <p className="text-blue-600 text-2xl font-bold mt-4">₹{product.price}</p>

        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
          Order via WhatsApp
        </button>
      </div>
    </div>
  );
}
