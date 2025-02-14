import ProductList from "@/components/product-list";
import { products } from "@/lib/data/products";
import { ModeToggle } from "@/components/mode-toggle";

function App() {
  return (
    <div className="container mx-auto p-4">
        <div className="flex justify-end mb-4">
            <ModeToggle />
        </div>
      <h1 className="text-3xl font-bold mb-6">Product List</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;