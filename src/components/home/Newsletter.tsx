'use client';

import { useState } from 'react';
import { Mail, Sparkles } from 'lucide-react';

export default function Newsletter() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter signup
        console.log('Newsletter signup:', email);
        setEmail('');
    };

    return (
        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl border border-white/50">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full mb-6">
                                <Sparkles className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-foreground">Exclusive Benefits</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                                Join the Glow Club
                            </h2>

                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Be the first to know about new launches, exclusive offers, and beauty tips curated just for you.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                            <div className="flex-1 relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-white/50 bg-white/80 backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-8 py-4 bg-foreground text-white rounded-full font-medium hover:bg-foreground/90 transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>

                        <p className="text-center text-sm text-muted-foreground mt-6">
                            We respect your privacy. Unsubscribe anytime.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
