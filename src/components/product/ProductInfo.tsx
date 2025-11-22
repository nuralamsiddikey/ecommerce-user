'use client';

import { useState } from 'react';
import { Star, Heart, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const SHADES = [
    { name: 'Nude Rose', color: '#E0A899' },
    { name: 'Dusty Pink', color: '#D48C95' },
    { name: 'Deep Berry', color: '#9B4F5F' },
    { name: 'Classic Red', color: '#C43C3C' },
];

export default function ProductInfo() {
    const [selectedShade, setSelectedShade] = useState(SHADES[0]);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase rounded-full">
                        Best Seller
                    </span>
                    <span className="px-3 py-1 bg-secondary text-muted-foreground text-xs font-bold tracking-wider uppercase rounded-full">
                        New
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                    Silk Matte Nude Lipstick
                </h1>

                <p className="text-lg text-muted-foreground font-light">
                    Lightweight velvet formula with long-lasting hydration.
                </p>

                <div className="flex items-center gap-4">
                    <div className="flex items-center text-yellow-400">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 fill-current" />
                        ))}
                    </div>
                    <span className="text-sm text-muted-foreground border-b border-muted-foreground/30 pb-0.5 cursor-pointer hover:text-primary transition-colors">
                        128 Reviews
                    </span>
                </div>
            </div>

            {/* Price */}
            <div className="text-3xl font-medium text-foreground">
                $32.00
            </div>

            <div className="h-px bg-border"></div>

            {/* Shade Selector */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-foreground">Shade</span>
                    <span className="text-sm text-muted-foreground">{selectedShade.name}</span>
                </div>
                <div className="flex gap-3">
                    {SHADES.map((shade) => (
                        <button
                            key={shade.name}
                            onClick={() => setSelectedShade(shade)}
                            className={`w-10 h-10 rounded-full border-2 transition-all ${selectedShade.name === shade.name
                                ? 'border-primary scale-110'
                                : 'border-transparent hover:scale-105'
                                }`}
                            style={{ backgroundColor: shade.color }}
                            title={shade.name}
                        />
                    ))}
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
                {/* Quantity */}
                <div className="flex items-center border border-border rounded-full px-4 py-3 gap-4">
                    <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-lg font-medium w-4 text-center">{quantity}</span>
                    <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                    </button>
                </div>

                {/* Add to Cart */}
                <button
                    onClick={() => addToCart({
                        id: '1', // Mock ID for PDP
                        name: 'Silk Matte Nude Lipstick',
                        price: 32.00,
                        image: '/placeholder'
                    })}
                    className="flex-1 bg-foreground text-white rounded-full font-bold text-lg hover:bg-foreground/90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart
                </button>

                {/* Wishlist */}
                <button className="p-4 border border-border rounded-full hover:bg-secondary hover:border-secondary transition-all text-muted-foreground hover:text-primary">
                    <Heart className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
