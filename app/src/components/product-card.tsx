import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/data/products";
import { useCartStore } from "@/store/cart-store";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {

    const addProduct = useCartStore((state) => state.addProduct)

    const handleAddToCart = () => {
        addProduct(product)
        toast({
            title: "Product added",
            description: `${product.name} has been added to your cart.`,
          })
    }

  return (
    <Card>
      <CardHeader>
        <CardTitle><Link to={`/product/${product.id}`}>{product.name}</Link></CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md"
        />
      </Link>
        <p className="mt-4 text-lg font-semibold">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleAddToCart}>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}