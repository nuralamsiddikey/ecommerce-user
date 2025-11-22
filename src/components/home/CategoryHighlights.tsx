'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { Sparkles, Flower2, Droplet, Wind, ChevronLeft, ChevronRight } from 'lucide-react';

const CATEGORIES = [
    {
        id: 'skincare',
        name: 'Skincare',
        description: 'Nourish & Glow',
        icon: Droplet,
        href: '/shop?category=skincare',
    },
    {
        id: 'makeup',
        name: 'Makeup',
        description: 'Express Yourself',
        icon: Sparkles,
        href: '/shop?category=makeup',
    },
    {
        id: 'fragrance',
        name: 'Fragrance',
        description: 'Signature Scents',
        icon: Flower2,
        href: '/shop?category=fragrance',
    },
    {
        id: 'hairbody',
        name: 'Hair & Body',
        description: 'Head to Toe Care',
        icon: Wind,
        href: '/shop?category=hairbody',
    },
    {
        id: 'bath',
        name: 'Bath & Body',
        description: 'Relax & Unwind',
        icon: Droplet,
        href: '/shop?category=bath',
    },
    {
        id: 'suncare',
        name: 'Sun Care',
        description: 'Protect & Glow',
        icon: Sparkles,
        href: '/shop?category=suncare',
    },
    {
        id: 'men',
        name: 'Men\'s Grooming',
        description: 'Refined Essentials',
        icon: Wind,
        href: '/shop?category=men',
    },
    {
        id: 'gifts',
        name: 'Gifts & Sets',
        description: 'Perfect Presents',
        icon: Flower2,
        href: '/shop?category=gifts',
    },
];

export default function CategoryHighlights() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 340; // Card width + gap
            const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                            Shop by Category
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Discover our curated collections
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="hidden md:flex gap-3">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Slider Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {CATEGORIES.map((category) => {
                        const Icon = category.icon;
                        return (
                            <Link
                                key={category.id}
                                href={category.href}
                                className="min-w-[280px] md:min-w-[320px] snap-start group relative h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 block"
                            >
                                {/* Background with gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/30 group-hover:scale-105 transition-transform duration-500"></div>

                                {/* Content */}
                                <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                                        {category.name}
                                    </h3>
                                    <p className="text-muted-foreground mb-4">{category.description}</p>
                                    <span className="text-sm font-medium text-primary group-hover:underline">
                                        Explore →
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
