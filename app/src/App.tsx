import ProductList from "@/components/product-list";
import { products } from "@/lib/data/products";
import { ModeToggle } from "@/components/mode-toggle";
import { CartDrawer } from "@/components/cart-drawer";
import { Routes, Route } from "react-router-dom";
import ProductDetailPage from "./pages/product-detail-page";

function App() {

  return (
    <>
        <div className="container mx-auto p-4 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Product List</h1>
            <div className="flex gap-x-2">
                <ModeToggle />
                <CartDrawer />
            </div>

        </div>
        <Routes>
            <Route path="/" element={<ProductList products={products} />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
    </>

  );
}

export default App;