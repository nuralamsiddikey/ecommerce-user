'use client';

import { Star, ShoppingCart, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

interface ProductCardProps {
    id: string;
    name: string;
    description?: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
    tag?: string;
}

export default function ProductCard({ id, name, description, price, rating, reviews, image, tag }: ProductCardProps) {
    const { addToCart } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const isWishlisted = isInWishlist(id);
    return (
        <div className="group relative bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            {/* Image Container */}
            <div className="aspect-[4/5] relative overflow-hidden bg-secondary/20">
                {tag && (
                    <span className="absolute top-3 left-3 z-10 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold tracking-wider uppercase rounded-full text-foreground shadow-sm">
                        {tag}
                    </span>
                )}

                {/* Wishlist Button */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        if (isWishlisted) {
                            removeFromWishlist(id);
                        } else {
                            addToWishlist({ id, name, price, image, description, rating, reviews, tag });
                        }
                    }}
                    className={`absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full transition-colors shadow-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300 ${isWishlisted ? 'text-red-500 bg-white' : 'text-muted-foreground hover:text-primary hover:bg-white'
                        }`}
                >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>

                {/* Product Image */}
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Quick Add Button - Centered on hover */}
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
            <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-primary text-primary" />
                        <span className="text-xs font-medium text-muted-foreground">{rating} ({reviews})</span>
                    </div>
                    <span className="text-sm font-bold text-foreground">${price.toFixed(2)}</span>
                </div>

                <h3 className="font-serif text-lg font-medium text-foreground mb-1 group-hover:text-primary transition-colors truncate">
                    {name}
                </h3>

                {description && (
                    <p className="text-sm text-muted-foreground line-clamp-1 mb-2">
                        {description}
                    </p>
                )}
            </div>

            {/* Link Overlay */}
            <Link href={`/product/${id}`} className="absolute inset-0 z-0" aria-label={`View details for ${name}`} />
        </div>
    );
}
