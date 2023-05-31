import { getCategory } from "@/sanity/sanity-utils";
import type { TCategory } from "@/types";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components";

export default async function Page({
  params,
}: {
  params: { section: TCategory };
}) {
  const data = await getCategory(params.section);
  if (!data.length) notFound();

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-6 md:px-8">
      <h1 className="my-4 capitalize text-center text-3xl font-bold text-secondary md:text-4xl">
        {params.section} Section
      </h1>
      <div className="grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <ProductCard key={item._id} data={item} />
        ))}
      </div>
    </main>
  );
}
