'use client';

import { useRef } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { Tag, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const DISCOUNTED_PRODUCTS = [
    {
        id: '5',
        name: 'Nourishing Face Oil',
        description: 'Botanical blend for radiant skin',
        price: 29.40,
        rating: 4.6,
        reviews: 156,
        image: '/images/products/face-oil.png',
        tag: '30% OFF'
    },
    {
        id: '6',
        name: 'Luxury Product Set',
        description: 'Complete skincare collection',
        price: 89.60,
        rating: 4.8,
        reviews: 420,
        image: '/images/products/product-set.png',
        tag: 'Sale'
    },
    {
        id: '3',
        name: 'Hydrating Face Cream',
        description: 'Deep hydration formula',
        price: 36.00,
        rating: 4.7,
        reviews: 215,
        image: '/images/products/skincare-jar.png',
        tag: '20% OFF'
    },
    {
        id: '4',
        name: 'Rose Gold Compact',
        description: 'Shimmer and matte shades',
        price: 52.00,
        rating: 4.9,
        reviews: 342,
        image: '/images/products/powder-compact.png',
        tag: 'Deal'
    }
];

export default function DiscountedProducts() {
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
        <section className="py-20 bg-primary/5 relative">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Tag className="w-5 h-5 text-primary" />
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Limited Time</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                            Special Offers
                        </h2>
                        <div className="h-1 w-20 bg-primary rounded-full"></div>
                    </div>

                    {/* Actions: View All + Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="/shop?filter=sale"
                            className="group flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-foreground hover:text-primary transition-colors"
                        >
                            View All Deals
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <div className="flex gap-2 pl-6 border-l border-gray-200">
                            <button
                                onClick={() => scroll('left')}
                                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
                                aria-label="Scroll left"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
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
                    {DISCOUNTED_PRODUCTS.map((product) => (
                        <div key={product.id} className="min-w-[280px] md:min-w-[300px] snap-start">
                            <ProductCard {...product} />
                        </div>
                    ))}
                    {/* Duplicate products for demo scrolling */}
                    {DISCOUNTED_PRODUCTS.map((product) => (
                        <div key={`${product.id}-dup`} className="min-w-[280px] md:min-w-[300px] snap-start">
                            <ProductCard {...product} id={`${product.id}-dup`} />
                        </div>
                    ))}
                </div>

                {/* Mobile View All */}
                <div className="mt-8 text-center md:hidden">
                    <Link href="/shop?filter=sale" className="inline-flex items-center gap-2 px-8 py-3 border border-border rounded-full font-medium hover:bg-secondary transition-colors bg-white">
                        View All Deals
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
