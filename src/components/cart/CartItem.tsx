'use client';

import { Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity?: number;
}

export default function CartItem({ id, name, price, image, quantity = 1 }: CartItemProps) {
    const { updateQuantity, removeFromCart } = useCart();

    return (
        <div className="flex flex-col sm:flex-row items-center gap-6 py-6 border-b border-border last:border-0">
            {/* Image */}
            <div className="w-24 h-24 bg-secondary/20 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center text-muted-foreground/50 font-serif">
                {/* Placeholder */}
                IMG
            </div>

            {/* Details */}
            <div className="flex-1 text-center sm:text-left">
                <h3 className="font-serif text-lg font-bold text-foreground mb-1">{name}</h3>
                <p className="text-sm text-muted-foreground mb-2">Standard Size</p>
                <div className="font-medium text-foreground">${price.toFixed(2)}</div>
            </div>

            {/* Quantity */}
            <div className="flex items-center border border-border rounded-full px-3 py-2 gap-3">
                <button
                    onClick={() => updateQuantity(id, quantity - 1)}
                    className="text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
                    disabled={quantity <= 1}
                >
                    <Minus className="w-3 h-3" />
                </button>
                <span className="text-sm font-medium w-4 text-center">{quantity}</span>
                <button
                    onClick={() => updateQuantity(id, quantity + 1)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                >
                    <Plus className="w-3 h-3" />
                </button>
            </div>

            {/* Remove */}
            <button
                onClick={() => removeFromCart(id)}
                className="p-2 text-muted-foreground hover:text-red-500 transition-colors rounded-full hover:bg-red-50"
                title="Remove item"
            >
                <Trash2 className="w-4 h-4" />
            </button>
        </div>
    );
}
