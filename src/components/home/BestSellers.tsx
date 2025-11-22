'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, ShoppingBag } from 'lucide-react';

const BEST_SELLERS = [
    {
        id: '1',
        name: 'Midnight Recovery',
        subtitle: 'The Overnight Miracle',
        description: 'Wake up to visibly restored, younger-looking skin. Our potent botanical blend works while you sleep to repair and rejuvenate.',
        price: 72.00,
        image: '/images/products/serum-bottle.png',
        color: 'bg-indigo-50'
    },
    {
        id: '2',
        name: 'Velvet Matte',
        subtitle: 'Iconic Color, Soft Touch',
        description: 'A lipstick that feels as good as it looks. Infused with orchid extract for a hydrating matte finish that lasts all day.',
        price: 32.00,
        image: '/images/products/lipstick.png',
        color: 'bg-rose-50'
    },
    {
        id: '3',
        name: 'Rose Gold Compact',
        subtitle: 'Radiance in Your Pocket',
        description: 'Achieve a lit-from-within glow with our finely milled, light-reflecting powder. Perfect for touch-ups on the go.',
        price: 65.00,
        image: '/images/products/powder-compact.png',
        color: 'bg-amber-50'
    }
];

export default function BestSellers() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 700);
        setCurrentIndex((prev) => (prev + 1) % BEST_SELLERS.length);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 700);
        setCurrentIndex((prev) => (prev - 1 + BEST_SELLERS.length) % BEST_SELLERS.length);
    };

    const currentProduct = BEST_SELLERS[currentIndex];

    return (
        <section className={`py-24 transition-colors duration-700 ease-in-out ${currentProduct.color} relative overflow-hidden`}>
            {/* Abstract Background Shape */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-white/40 skew-x-12 transform origin-top-right transition-transform duration-1000" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-12 md:mb-20 opacity-60">
                    <div className="h-px w-12 bg-gray-900" />
                    <span className="text-sm font-bold tracking-[0.2em] uppercase">The Edit • Vol. {currentIndex + 1}</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[500px]">

                    {/* Left: Content */}
                    <div className={`space-y-8 transition-all duration-700 transform ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
                        <div className="space-y-4">
                            <div className="text-sm font-medium text-primary tracking-widest uppercase">
                                No. 0{currentIndex + 1} Best Seller
                            </div>
                            <h2 className="text-5xl md:text-7xl font-serif font-medium text-gray-900 leading-tight">
                                {currentProduct.name}
                            </h2>
                            <p className="text-2xl font-serif italic text-gray-500">
                                {currentProduct.subtitle}
                            </p>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed max-w-md font-light">
                            {currentProduct.description}
                        </p>

                        <div className="flex items-center gap-8 pt-4">
                            <div className="text-3xl font-bold text-gray-900">
                                ${currentProduct.price.toFixed(2)}
                            </div>
                            <button className="group flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-primary transition-all duration-300 shadow-xl hover:shadow-primary/25">
                                <ShoppingBag className="w-5 h-5" />
                                <span className="font-medium tracking-wide">Add to Bag</span>
                            </button>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative flex items-center justify-center">
                        {/* Decorative Circle */}
                        <div className={`absolute w-[400px] h-[400px] rounded-full border border-gray-900/5 transition-all duration-1000 ${isAnimating ? 'scale-90 opacity-0' : 'scale-100 opacity-100'}`} />
                        <div className={`absolute w-[350px] h-[350px] rounded-full bg-white/50 backdrop-blur-sm transition-all duration-1000 delay-100 ${isAnimating ? 'scale-90 opacity-0' : 'scale-100 opacity-100'}`} />

                        {/* Product Image */}
                        <div className={`relative z-10 w-full max-w-[400px] aspect-square transition-all duration-700 transform ${isAnimating ? 'opacity-0 scale-95 translate-x-12' : 'opacity-100 scale-100 translate-x-0'}`}>
                            <img
                                src={currentProduct.image}
                                alt={currentProduct.name}
                                className="w-full h-full object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>

                </div>

                {/* Footer / Navigation */}
                <div className="flex items-center justify-between mt-12 md:mt-0 border-t border-gray-900/5 pt-8">
                    <div className="flex gap-2">
                        {BEST_SELLERS.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    if (isAnimating) return;
                                    setIsAnimating(true);
                                    setTimeout(() => setIsAnimating(false), 700);
                                    setCurrentIndex(idx);
                                }}
                                className={`h-1 transition-all duration-500 ${idx === currentIndex ? 'w-12 bg-gray-900' : 'w-4 bg-gray-300 hover:bg-gray-400'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors duration-300"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors duration-300"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
