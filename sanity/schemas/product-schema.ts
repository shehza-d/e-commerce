const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "productName",
      title: "Product Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "productName", maxLength: 90 },
    },
	{
		name: "productQuantity",
		title: "Product Quantity",
		type: "number",
	  },
    {
      name: "productImage",
      title: "Product Image",
      type: "image",
      of: [{ type: "image" }],
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Men", value: "men" },
          { title: "Women", value: "women" },
          { title: "Kids", value: "kids" },
          { title: "other", value: "other" },
        ],
      },
    },
    {
      name: "size",
      title: "Size",
      type: "string",
      options: {
        list: [
          { title: "XS", value: "XS" },
          { title: "S", value: "S" },
          { title: "M", value: "M" },
          { title: "L", value: "L" },
          { title: "XL", value: "XL" },
        ],
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "string",
      options: {
        list: [
          { title: "Sweater", value: "sweater" },
          { title: "Dress", value: "dress" },
          { title: "T Shirts", value: "t shirts" },
          { title: "Pants", value: "pants" },
          { title: "Jackets", value: "jackets" },
          { title: "Coat", value: "coat" },
          { title: "Tracksuit", value: "tracksuit" },
          { title: "Jeans", value: "jeans" },
          { title: "Coat", value: "coat" },
          { title: "Glasses", value: "glasses" },
          { title: "Cap", value: "cap" },
          { title: "Watch", value: "watch" },
        ],
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "care",
      title: "Care",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
export default product;
