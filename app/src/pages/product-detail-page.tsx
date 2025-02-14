import { useParams } from "react-router-dom";
import { products, Product } from "@/lib/data/products";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate()
  const product = products.find((p) => p.id === id);
  const addProduct = useCartStore((state) => state.addProduct);

  const handleAddToCart = () => {
    if (product) {
      addProduct(product);
      toast({
        title: "Product added",
        description: `${product.name} has been added to your cart.`,
      });
    }
  };

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Button variant="link" onClick={() => navigate(-1)}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-auto object-cover rounded-md"
        />
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-500 mt-2">{product.description}</p>
          <p className="text-2xl font-semibold mt-4">
            ${product.price.toFixed(2)}
          </p>
          <Button className="mt-6 w-full" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}