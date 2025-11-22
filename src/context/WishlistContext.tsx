'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    description?: string;
    rating?: number;
    reviews?: number;
    tag?: string;
}

interface WishlistContextType {
    wishlist: Product[];
    addToWishlist: (product: Product) => void;
    removeFromWishlist: (productId: string) => void;
    isInWishlist: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
    const [wishlist, setWishlist] = useState<Product[]>([]);

    const addToWishlist = (product: Product) => {
        if (!isInWishlist(product.id)) {
            setWishlist([...wishlist, product]);
        }
    };

    const removeFromWishlist = (productId: string) => {
        setWishlist(wishlist.filter((item) => item.id !== productId));
    };

    const isInWishlist = (productId: string) => {
        return wishlist.some((item) => item.id === productId);
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);
    if (context === undefined) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
}
