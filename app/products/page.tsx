import { getProducts } from "@/sanity/sanity-utils";
import type { IProduct } from "@/types";
import { ProductCard } from "@/components";

export default async function Page() {
  const products: IProduct[] = await getProducts();

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-6 md:px-8">
      <h1 className="my-4 text-center text-3xl font-bold text-secondary md:text-4xl">
        All Products
      </h1>

      <div className="grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
          <ProductCard key={item._id} data={item} />
        ))}
        {products.map((item) => (
          <ProductCard key={item._id} data={item} />
        ))}
      </div>
    </main>
  );
}
