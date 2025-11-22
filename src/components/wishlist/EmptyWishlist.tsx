'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function EmptyWishlist() {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 bg-secondary/30 rounded-full flex items-center justify-center mb-6 text-muted-foreground/50">
                <Heart className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
                You haven't saved any beauty favorites yet. Browse our collection and find your new essentials.
            </p>
            <Link
                href="/shop"
                className="px-8 py-3 bg-foreground text-white rounded-full font-bold hover:bg-foreground/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
                Browse Products
            </Link>
        </div>
    );
}
