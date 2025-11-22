'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';

// Mock data for now
const PRODUCTS = [
    {
        id: '1',
        name: 'Velvet Matte Lipstick',
        price: 32.00,
        rating: 4.8,
        reviews: 124,
        image: '/images/products/lipstick.png',
        tag: 'Best Seller'
    },
    {
        id: '2',
        name: 'Radiance Serum',
        price: 58.00,
        rating: 4.9,
        reviews: 89,
        image: '/images/products/serum-bottle.png',
        tag: 'New'
    },
    {
        id: '3',
        name: 'Hydrating Face Cream',
        price: 45.00,
        rating: 4.7,
        reviews: 215,
        image: '/images/products/skincare-jar.png'
    },
    {
        id: '4',
        name: 'Rose Gold Compact',
        price: 65.00,
        rating: 4.9,
        reviews: 342,
        image: '/images/products/powder-compact.png',
        tag: 'Limited'
    }
];

export default function ProductGrid({ title }: { title: string }) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320; // Card width + gap
            const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-20 bg-background relative">
            <div className="container mx-auto px-4">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">{title}</h2>
                        <div className="h-1 w-20 bg-primary rounded-full"></div>
                    </div>

                    {/* Actions: View All + Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="/shop"
                            className="group flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-foreground hover:text-primary transition-colors"
                        >
                            View All
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <div className="flex gap-2 pl-6 border-l border-gray-200">
                            <button
                                onClick={() => scroll('left')}
                                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                                aria-label="Scroll left"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                                aria-label="Scroll right"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Slider */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {PRODUCTS.map((product) => (
                        <div key={product.id} className="min-w-[280px] md:min-w-[300px] snap-start">
                            <ProductCard {...product} />
                        </div>
                    ))}
                    {/* Duplicate products for demo scrolling */}
                    {PRODUCTS.map((product) => (
                        <div key={`${product.id}-dup`} className="min-w-[280px] md:min-w-[300px] snap-start">
                            <ProductCard {...product} id={`${product.id}-dup`} />
                        </div>
                    ))}
                </div>

                {/* Mobile View All */}
                <div className="mt-8 text-center md:hidden">
                    <Link href="/shop" className="inline-flex items-center gap-2 px-8 py-3 border border-border rounded-full font-medium hover:bg-secondary transition-colors">
                        View All Products
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
