import ProductCard from "@/components/product-card";
    import { products, Product } from "@/lib/data/products";
    import { useState } from "react";
    import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

    interface ProductListProps {
        products: Product[]
    }

    export default function ProductList({ products }: ProductListProps) {
    const [activeCategory, setActiveCategory] = useState("all");

    const availableCategories = ["all", ...new Set(products.map((product) => product.category))];

    const filteredProducts = activeCategory === "all"
        ? products
        : products.filter((product) => product.category === activeCategory);

    return (
        <div>
            <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setActiveCategory(value)}>
                <TabsList className="grid w-full grid-cols-4">
                    {availableCategories.map((category) => (
                        <TabsTrigger key={category} value={category}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {availableCategories.map(category => (
                    <TabsContent key={category} value={category}>
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {
                                (category === "all" ? products : products.filter(product => product.category === category)).map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))
                            }
                        </div>
                    </TabsContent>
                ))}
            </Tabs>


        </div>
    );
    }