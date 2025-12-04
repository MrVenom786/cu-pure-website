import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div>
      <section className="bg-blue-50 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-700">
            CU Pure — Stay Hydrated. Stay Healthy.
          </h1>
          <p className="text-gray-600 text-lg mt-3">
            Premium eco-friendly bottles designed specially for CU students & staff.
          </p>

          <Link
            to="/products"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg"
          >
            Browse Products
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-14">
        <h2 className="text-3xl font-bold mb-6">Best Sellers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
