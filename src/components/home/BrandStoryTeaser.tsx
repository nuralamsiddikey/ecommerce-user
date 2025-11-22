'use client';

import Link from 'next/link';
import { ArrowRight, Leaf, Heart, Sparkles } from 'lucide-react';

export default function BrandStoryTeaser() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-50/50 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Image Composition */}
                    <div className="relative">
                        <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                            {/* Main Image */}
                            <div className="absolute inset-0 bg-gray-200">
                                <img
                                    src="/images/products/skincare-jar.png"
                                    alt="Our Philosophy"
                                    className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-black/10" />
                            </div>

                            {/* Floating Glass Card */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-white">
                                <div className="flex gap-6">
                                    <div className="flex-1">
                                        <div className="text-3xl font-serif font-bold mb-1">100%</div>
                                        <div className="text-sm font-medium opacity-80 tracking-wide uppercase">Clean Ingredients</div>
                                    </div>
                                    <div className="w-px bg-white/20" />
                                    <div className="flex-1">
                                        <div className="text-3xl font-serif font-bold mb-1">0%</div>
                                        <div className="text-sm font-medium opacity-80 tracking-wide uppercase">Cruelty Free</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative "Stamp" */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl animate-spin-slow">
                            <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                                <path
                                    id="curve"
                                    d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0"
                                    fill="transparent"
                                />
                                <text className="text-[10px] font-bold uppercase tracking-[0.2em]">
                                    <textPath href="#curve" className="fill-gray-900">
                                        • Est. 2024 • Premium Quality •
                                    </textPath>
                                </text>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <span className="inline-block text-sm font-bold tracking-[0.2em] text-primary uppercase">
                                Our Philosophy
                            </span>

                            <h2 className="text-5xl md:text-6xl font-serif font-medium text-gray-900 leading-tight">
                                Beauty rooted in <br />
                                <span className="italic text-gray-400">nature & science.</span>
                            </h2>

                            <div className="w-20 h-1 bg-gray-900" />
                        </div>

                        <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                            <p>
                                We believe that true luxury lies in simplicity and purity. Our journey began with a singular mission: to create skincare that honors your natural beauty while respecting the planet we call home.
                            </p>
                            <p>
                                Every formulation is a delicate balance of potent botanicals and clinical innovation, designed not just to treat, but to transform. We don't just sell products; we curate rituals of self-care.
                            </p>
                        </div>

                        <div className="flex items-center gap-8 pt-4">
                            <Link
                                href="/about"
                                className="group inline-flex items-center gap-3 px-10 py-4 bg-gray-900 text-white rounded-full font-medium transition-all hover:bg-primary hover:shadow-lg hover:shadow-primary/25"
                            >
                                Read Our Story
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <div className="hidden sm:block">
                                <span className="font-serif italic text-3xl text-gray-400 tracking-wide">Isabella R.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
