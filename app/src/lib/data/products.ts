export const products = [
  {
    id: "1",
    name: "Product 1",
    description: "Description for Product 1",
    price: 29.99,
    image: "https://picsum.photos/seed/1/200/300",
  },
  {
    id: "2",
    name: "Product 2",
    description: "Description for Product 2",
    price: 49.99,
    image: "https://picsum.photos/seed/2/200/300",
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description for Product 3",
    price: 19.99,
    image: "https://picsum.photos/seed/3/200/300",
  },
  {
    id: "4",
    name: "Product 4",
    description: "Description for Product 4",
    price: 79.99,
    image: "https://picsum.photos/seed/4/200/300",
  },
  {
    id: "5",
    name: "Product 5",
    description: "Description for Product 5",
    price: 9.99,
    image: "https://picsum.photos/seed/5/200/300",
  },
];

export type Product = typeof products[0];