import { fetchProducts } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import Search from "@/app/ui/dashboard/search/Search";
import Link from "next/link";

const ProductsPage = async ({ searchParams }) => {
  const search = searchParams?.search || "";
  const page = searchParams?.page || 1;
  const { countProduct, products } = await fetchProducts(search, page);

  return (
    <div className="p-4 mt-5 rounded-md bg-bgSoft">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for User..." />

        <Link href="/dashboard/products/add">
          <button className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg">
            Add New +
          </button>
        </Link>
      </div>

      <div className="p-1 mt-4 rounded-md">
        <table className="w-full mb-4">
          <thead className="">
            <tr className="text-center">
              <td>Name</td>
              <td>Description</td>
              <td>Category</td>
              <td>Price</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="text-xs text-center hover:bg-gray-700 sm:text-base"
              >
                <td>
                  <div className="flex items-center gap-2">
                    <img
                      src={product.img || "/noproduct.jpg"}
                      alt="avatar"
                      className="w-6 h-6 rounded-full sm:w-8 sm:h-8"
                    />
                    <span>{product.name}</span>
                  </div>
                </td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>Rp. {product.price.toLocaleString("id-ID")}</td>
                <td>{product.stock}</td>
                <td>
                  <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
                    <Link href={`/dashboard/products/${product.id}`}>
                      <button className="px-2 py-0.5 bg-green-600 font-semibold rounded-md text-xs sm:text-sm hover:bg-green-700">
                        View
                      </button>
                    </Link>
                    <Link href="">
                      <button className="px-2 py-0.5 bg-red-600 font-semibold rounded-md text-xs sm:text-sm hover:bg-red-700">
                        Delete
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination count={countProduct} />
      </div>
    </div>
  );
};
export default ProductsPage;
