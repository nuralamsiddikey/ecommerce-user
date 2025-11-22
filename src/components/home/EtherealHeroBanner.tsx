'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function EtherealHeroBanner() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 20,
                y: (e.clientY / window.innerHeight) * 20
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-pink-50/30">
            {/* Animated Background Gradients */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div
                    className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/40 via-pink-200/30 to-transparent rounded-full blur-3xl animate-pulse"
                    style={{
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                        transition: 'transform 0.5s ease-out'
                    }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/30 via-cyan-200/20 to-transparent rounded-full blur-3xl animate-pulse"
                    style={{
                        transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)`,
                        transition: 'transform 0.5s ease-out',
                        animationDelay: '1s'
                    }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-yellow-100/20 via-amber-100/15 to-transparent rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: '2s' }}
                />
            </div>

            {/* Floating Geometric Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Crystalline Forms */}
                <div className="absolute top-20 left-[10%] w-32 h-32 bg-white/10 backdrop-blur-md rounded-3xl rotate-12 animate-float border border-white/20 shadow-xl" />
                <div className="absolute top-40 right-[15%] w-24 h-24 bg-gradient-to-br from-purple-200/20 to-pink-200/20 backdrop-blur-md rounded-2xl -rotate-12 animate-float-delayed border border-white/30 shadow-lg" />
                <div className="absolute bottom-32 left-[20%] w-20 h-20 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 backdrop-blur-md rounded-xl rotate-45 animate-float border border-white/20 shadow-md"
                    style={{ animationDelay: '1.5s' }}
                />
                <div className="absolute bottom-48 right-[25%] w-28 h-28 bg-white/5 backdrop-blur-sm rounded-3xl -rotate-6 animate-float-delayed border border-white/10 shadow-lg" />

                {/* Soft Circles */}
                <div className="absolute top-1/3 right-[8%] w-16 h-16 bg-gradient-to-br from-yellow-100/30 to-amber-100/20 rounded-full blur-sm animate-pulse" />
                <div className="absolute bottom-1/4 left-[12%] w-12 h-12 bg-gradient-to-br from-pink-100/30 to-purple-100/20 rounded-full blur-sm animate-pulse"
                    style={{ animationDelay: '1s' }}
                />
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
                    {/* Left Content */}
                    <div className="space-y-8 animate-fade-in-up">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-md rounded-full border border-white/40 shadow-lg">
                            <Sparkles className="w-4 h-4 text-purple-500" />
                            <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Revolutionary Collection
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                            <span className="bg-gradient-to-r from-purple-900 via-pink-800 to-purple-900 bg-clip-text text-transparent">
                                Unveil Your
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                                Future Glow
                            </span>
                        </h1>

                        {/* Subtext */}
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
                            Harnessing nature's essence with cutting-edge science.
                            Discover Lumière's revolutionary collection.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/shop"
                                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 inline-flex items-center justify-center gap-2 transform hover:scale-105"
                            >
                                Explore Radiance
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/about"
                                className="px-8 py-4 bg-white/70 backdrop-blur-md border-2 border-purple-200 text-purple-900 rounded-full font-medium hover:bg-white hover:border-purple-400 transition-all inline-flex items-center justify-center shadow-lg"
                            >
                                Our Story
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center gap-8 pt-8 border-t border-white/40">
                            <div>
                                <div className="text-2xl font-serif font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    100%
                                </div>
                                <div className="text-xs text-gray-600">Clean Formula</div>
                            </div>
                            <div>
                                <div className="text-2xl font-serif font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    50K+
                                </div>
                                <div className="text-xs text-gray-600">Happy Customers</div>
                            </div>
                            <div>
                                <div className="text-2xl font-serif font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    0
                                </div>
                                <div className="text-xs text-gray-600">Animal Testing</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Product Display - Premium Glass Stage */}
                    <div className="relative h-[600px] w-full flex items-center justify-center perspective-[1000px] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>

                        {/* 1. Dynamic Light Source */}
                        <div
                            className="absolute w-[600px] h-[600px] bg-gradient-to-r from-purple-100/40 via-pink-100/30 to-amber-100/40 rounded-full blur-3xl opacity-60"
                            style={{
                                transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)`,
                                transition: 'transform 0.3s ease-out'
                            }}
                        />

                        {/* 2. The Glass Monolith (Backdrop) */}
                        <div
                            className="relative z-10 w-[380px] h-[500px] bg-white/30 backdrop-blur-2xl rounded-[40px] border border-white/50 shadow-2xl shadow-purple-500/10 overflow-hidden"
                            style={{
                                transform: `rotateY(${mousePosition.x * 2}deg) rotateX(${mousePosition.y * -2}deg)`,
                                transition: 'transform 0.3s ease-out'
                            }}
                        >
                            {/* Internal Shine */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/10 opacity-80" />

                            {/* Decorative Line */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-white/50 via-transparent to-white/50" />

                            {/* Circle Graphic */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-white/20 rounded-full" />
                        </div>

                        {/* 3. The Hero Product (Floating in front) */}
                        <div
                            className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{
                                transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px) translate(-50%, -50%)`,
                                transition: 'transform 0.2s ease-out'
                            }}
                        >
                            <img
                                src="/images/products/serum-bottle.png"
                                alt="Lumière Serum"
                                className="h-[480px] w-auto object-contain drop-shadow-2xl animate-float"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-12 -right-12 px-6 py-3 bg-white/80 backdrop-blur-xl border border-white/60 rounded-full shadow-xl flex items-center gap-3 animate-float-delayed">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-sm font-semibold text-gray-800">Best Seller</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
}
