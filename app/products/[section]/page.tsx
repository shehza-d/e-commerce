export default function page({
  params,
}:    { params: { section: "males" | "females" | "kids" } }
) {
  return <div>dddddddddd page {params.section}</div>;
}
