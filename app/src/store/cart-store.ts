import { create } from 'zustand';
import { Product } from '@/lib/data/products';
import { persist } from 'zustand/middleware'

type CartState = {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  clearCart: () => void
};

export const useCartStore = create<CartState>()(
    persist(
      (set) => ({
        products: [],
        addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
        removeProduct: (productId) => set((state) => ({ products: state.products.filter((p) => p.id !== productId) })),
        clearCart: () => set({ products: [] }),
      }),
      {
        name: 'cart-storage',
      }
    )
  )