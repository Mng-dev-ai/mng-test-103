import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCartStore } from "@/store/cart-store";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { useEffect, useState } from "react";
import { Minus, Plus, Trash2, XCircle } from "lucide-react";

export function CartDrawer() {

    const [open, setOpen] = useState(false);
    const { products, removeProduct, addProduct, clearCart } = useCartStore();

    const totalPrice = products.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    // Close drawer when cart is emptied
    useEffect(() => {
        if (products.length === 0) {
            setOpen(false)
        }
    }, [products.length])

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline">
                    Cart <Badge className="ml-2">{products.reduce((acc, item) => acc + item.quantity, 0)}</Badge>
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Your Cart</DrawerTitle>
                    <DrawerDescription>Manage your items</DrawerDescription>
                </DrawerHeader>
                <ScrollArea className="h-[300px] px-4">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div key={product.id} className="flex items-center justify-between py-4 border-b">
                                <div className="flex items-center gap-4">
                                    <img src={product.image} alt={product.name} className="w-16 h-16 rounded object-cover" />
                                    <div>
                                        <h3 className="text-base font-semibold">{product.name}</h3>
                                        <p className="text-sm text-gray-500">{product.description}</p>
                                        <div className="flex items-center gap-x-2 mt-1">
                                            <Button variant={"outline"} size={"icon"} onClick={() => {
                                                if(product.quantity > 1) {
                                                    addProduct({...product, quantity: -1}) // Decrease quantity
                                                } else {
                                                    removeProduct(product.id)
                                                }
                                            }}>
                                                <Minus className="h-3 w-3"/>
                                            </Button>
                                            <p className="text-sm">{product.quantity}</p>
                                            <Button variant={"outline"} size={"icon"} onClick={() => addProduct({...product, quantity: 1})}>
                                                <Plus className="h-3 w-3"/>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-base font-semibold">${(product.price * product.quantity).toFixed(2)}</p>
                                    <Button variant={"ghost"} size={"icon"} className="text-red-500" onClick={() => removeProduct(product.id)}>
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-8">
                            <XCircle className="mx-auto h-12 w-12 text-gray-400" />
                            <p className="mt-2 text-gray-600">Your cart is empty.</p>
                        </div>
                    )}
                </ScrollArea>
                <Separator />
                <DrawerFooter>
                    <div className="flex justify-between w-full">
                        <p className="text-lg font-semibold">Total:</p>
                        <p className="text-lg font-semibold">${totalPrice.toFixed(2)}</p>
                    </div>
                    <Button className="w-full mt-2" disabled={products.length === 0} onClick={() => {
                        clearCart()
                        toast({
                            title: "Order placed",
                            description: "Your order has been placed successfully.",
                          })
                        }}>Checkout</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}