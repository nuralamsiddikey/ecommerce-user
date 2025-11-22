'use client';

import Link from 'next/link';
import { Sparkles, ArrowRight, Star } from 'lucide-react';

const SLIDER_IMAGES = [
    '/images/products/serum-bottle.png',
    '/images/products/lipstick.png',
    '/images/products/skincare-jar.png',
    '/images/products/powder-compact.png',
];

const COLLECTIONS = [
    {
        id: 1,
        name: 'Summer Glow',
        description: 'Radiant skin essentials for the season',
        image: '/images/products/serum-bottle.png',
        products: 12,
        color: 'from-yellow-400 to-orange-500',
        bgColor: 'from-yellow-50 to-orange-50'
    },
    {
        id: 2,
        name: 'Rose Romance',
        description: 'Delicate pink-toned makeup collection',
        image: '/images/products/lipstick.png',
        products: 8,
        color: 'from-pink-400 to-rose-500',
        bgColor: 'from-pink-50 to-rose-50'
    },
    {
        id: 3,
        name: 'Night Ritual',
        description: 'Premium nighttime skincare routine',
        image: '/images/products/skincare-jar.png',
        products: 10,
        color: 'from-purple-400 to-indigo-500',
        bgColor: 'from-purple-50 to-indigo-50'
    }
];

export default function FeaturedCollections() {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            {/* Geometric Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Creative Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg mb-6">
                        <Star className="w-4 h-4 text-purple-600 fill-purple-600" />
                        <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Curated for You</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
                        Featured Collections
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover our handpicked selections designed for every occasion
                    </p>
                </div>

                {/* Bold Card Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {COLLECTIONS.map((collection, index) => (
                        <div
                            key={collection.id}
                            className="group animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <Link href={`/collection/${collection.id}`}>
                                {/* Premium Card Container */}
                                <div className="relative h-[220px] rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100">

                                    {/* Subtle Gradient Background (Low Opacity) */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${collection.bgColor} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />

                                    {/* Glassmorphism Overlay on Hover */}
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative h-full flex flex-col p-6">
                                        {/* Header: Title & Badge */}
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                                                    {collection.name}
                                                </h3>
                                                <p className="text-sm text-gray-500 mt-1 font-medium tracking-wide">
                                                    {collection.products} Curated Items
                                                </p>
                                            </div>
                                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${collection.color} flex items-center justify-center text-white shadow-lg transform group-hover:rotate-12 transition-transform duration-500`}>
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>

                                        {/* Image Slider - Elegant & Clean */}
                                        <div className="flex-1 relative overflow-hidden rounded-xl bg-white/40 border border-white/50 backdrop-blur-sm">
                                            <div className="absolute inset-0 flex items-center">
                                                <div className="flex animate-slider gap-4 px-4">
                                                    {/* First Set */}
                                                    {SLIDER_IMAGES.map((src, i) => (
                                                        <div key={i} className="w-16 h-16 flex-shrink-0 bg-white rounded-lg p-2 shadow-sm border border-gray-50">
                                                            <img
                                                                src={src}
                                                                alt="Product"
                                                                className="w-full h-full object-contain"
                                                            />
                                                        </div>
                                                    ))}
                                                    {/* Duplicate Set for Loop */}
                                                    {SLIDER_IMAGES.map((src, i) => (
                                                        <div key={`dup-${i}`} className="w-16 h-16 flex-shrink-0 bg-white rounded-lg p-2 shadow-sm border border-gray-50">
                                                            <img
                                                                src={src}
                                                                alt="Product"
                                                                className="w-full h-full object-contain"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <Link
                        href="/collections"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
                    >
                        <span>Browse All Collections</span>
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
