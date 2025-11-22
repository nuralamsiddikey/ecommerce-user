'use client';

import { SearchX, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function NoResults() {
    const suggestedCategories = [
        { name: 'Skincare', href: '/shop?category=skincare' },
        { name: 'Makeup', href: '/shop?category=makeup' },
        { name: 'Fragrance', href: '/shop?category=fragrance' },
        { name: 'Best Sellers', href: '/shop?sort=popular' },
    ];

    return (
        <div className="flex flex-col items-center justify-center py-16 px-4">
            {/* Icon */}
            <div className="w-24 h-24 bg-secondary/30 rounded-full flex items-center justify-center mb-6">
                <SearchX className="w-12 h-12 text-muted-foreground/50" />
            </div>

            {/* Message */}
            <h2 className="text-2xl font-serif font-bold text-foreground mb-3">No products found</h2>
            <p className="text-muted-foreground text-center max-w-md mb-8">
                We couldn't find any products matching your search. Try adjusting your filters or explore our popular categories.
            </p>

            {/* Suggested Categories */}
            <div className="w-full max-w-2xl">
                <div className="flex items-center gap-2 mb-4 justify-center">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <h3 className="font-medium text-foreground">Explore Categories</h3>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                    {suggestedCategories.map((category) => (
                        <Link
                            key={category.name}
                            href={category.href}
                            className="px-6 py-3 bg-white border border-border rounded-full hover:border-primary hover:bg-primary/5 transition-all shadow-sm hover:shadow-md"
                        >
                            {category.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
