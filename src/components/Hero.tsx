'use client';

import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/20">
            {/* Floating Decorative Elements */}
            <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-8 z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">New Collection Available</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
                            Beauty Crafted with Care
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            Clean, elegant formulas for modern skincare & makeup lovers. Experience luxury that's kind to your skin.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/shop"
                                className="px-8 py-4 bg-foreground text-white rounded-full font-medium hover:bg-foreground/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
                            >
                                Shop Now
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/about"
                                className="px-8 py-4 bg-white border-2 border-border text-foreground rounded-full font-medium hover:border-primary hover:bg-primary/5 transition-all inline-flex items-center justify-center"
                            >
                                Explore Collections
                            </Link>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative h-[500px] md:h-[600px]">
                        <div className="absolute inset-0 rounded-3xl shadow-lg overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/10">
                            <img
                                src="/images/products/complete-collection.png"
                                alt="Luxury Cosmetics Collection"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
