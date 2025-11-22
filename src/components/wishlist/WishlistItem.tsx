'use client';

import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

interface WishlistItemProps {
    id: string;
    name: string;
    price: number;
    image: string;
    description?: string;
}

export default function WishlistItem({ id, name, price, image, description }: WishlistItemProps) {
    const { addToCart } = useCart();
    const { removeFromWishlist } = useWishlist();

    return (
        <div className="group relative bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col">
            {/* Image Container */}
            <div className="aspect-[4/5] relative overflow-hidden bg-secondary/20">
                {/* Remove Button */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        removeFromWishlist(id);
                    }}
                    className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-red-500 hover:bg-red-50 transition-colors shadow-sm"
                    title="Remove from Wishlist"
                >
                    <Heart className="w-4 h-4 fill-current" />
                </button>

                {/* Placeholder Image */}
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform duration-700 ease-out">
                    <div className="text-4xl font-serif opacity-20">IMG</div>
                </div>

                {/* Quick Add Button */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 flex justify-center pb-6 bg-gradient-to-t from-black/10 to-transparent z-10">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart({ id, name, price, image });
                        }}
                        className="px-6 py-3 bg-white text-foreground rounded-full shadow-lg font-medium hover:bg-primary hover:text-white transition-colors flex items-center gap-2 text-sm"
                    >
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors truncate flex-1 pr-2">
                        {name}
                    </h3>
                    <span className="text-sm font-bold text-foreground">${price.toFixed(2)}</span>
                </div>

                {description && (
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                        {description}
                    </p>
                )}
            </div>

            {/* Link Overlay */}
            <Link href={`/product/${id}`} className="absolute inset-0 z-0" aria-label={`View details for ${name}`} />
        </div>
    );
}
