'use client';

import { Star, Quote } from 'lucide-react';
import Link from 'next/link';

const REVIEWS = [
    {
        id: 1,
        name: 'Sarah Mitchell',
        role: 'Verified Buyer',
        rating: 5,
        text: 'Absolutely in love with the texture and color payoff. It feels so luxurious on the skin and lasts all day!',
        initials: 'SM',
    },
    {
        id: 2,
        name: 'Emma Thompson',
        role: 'Beauty Enthusiast',
        rating: 5,
        text: 'The best clean beauty brand I\'ve discovered. My skin has never looked better, and I love the elegant packaging.',
        initials: 'ET',
    },
    {
        id: 3,
        name: 'Olivia Chen',
        role: 'Skincare Lover',
        rating: 5,
        text: 'Finally found products that work for my sensitive skin. The ingredients are pure and the results are amazing!',
        initials: 'OC',
    },
];

export default function ReviewsCarousel() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                        Loved by Beauty Enthusiasts
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Join thousands of happy customers
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {REVIEWS.map((review) => (
                        <Link href="/reviews" key={review.id} className="block group">
                            <div
                                className="bg-white p-8 rounded-3xl shadow-sm border border-border hover:shadow-xl transition-all duration-300 relative h-full transform group-hover:-translate-y-1"
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-6 opacity-10">
                                    <Quote className="w-16 h-16 text-primary" />
                                </div>

                                {/* Avatar */}
                                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-xl font-serif font-bold text-primary">{review.initials}</span>
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                                    "{review.text}"
                                </p>

                                {/* Reviewer Info */}
                                <div>
                                    <div className="font-serif font-bold text-foreground group-hover:text-primary transition-colors">{review.name}</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                                        {review.role}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
