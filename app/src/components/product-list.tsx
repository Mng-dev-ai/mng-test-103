import ProductCard from "@/components/product-card";
import { products, Product } from "@/lib/data/products";

interface ProductListProps {
    products: Product[]
}

export default function ProductList({products}: ProductListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}