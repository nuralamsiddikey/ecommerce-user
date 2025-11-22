'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity?: number;
}

interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    toastProduct: Product | null;
    showToast: boolean;
    closeToast: () => void;
    subtotal: number;
    tax: number;
    total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<Product[]>([]);
    const [toastProduct, setToastProduct] = useState<Product | null>(null);
    const [showToast, setShowToast] = useState(false);
    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (error) {
                console.error('Failed to parse cart from localStorage', error);
            }
        }
    }, []);

    // Save cart to localStorage and calculate totals
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));

        const newSubtotal = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
        const newTax = newSubtotal * 0.08; // 8% tax
        setSubtotal(newSubtotal);
        setTax(newTax);
        setTotal(newSubtotal + newTax);
    }, [cart]);

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
        setToastProduct(product);
        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    const removeFromCart = (productId: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity < 1) return;
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const closeToast = () => {
        setShowToast(false);
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            toastProduct,
            showToast,
            closeToast,
            subtotal,
            tax,
            total
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
