import Image from 'next/image';

export default function BrandStory() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-secondary/30 order-2 lg:order-1">
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-serif text-6xl">
                            STORY IMG
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                            Where Beauty Meets <span className="text-primary">Craftsmanship</span>
                        </h2>

                        <div className="w-16 h-0.5 bg-primary/30"></div>

                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
                            <p>
                                Founded in 2024, Lumière was born from a simple yet powerful belief: that beauty should be a harmonious blend of nature's finest ingredients and scientific innovation. We started in a small Parisian atelier, driven by a passion to create skincare that not only enhances your outer glow but also nourishes your skin from within.
                            </p>
                            <p>
                                Our philosophy is rooted in transparency and purity. We meticulously source our botanicals from sustainable farms around the world, ensuring that every drop of essence in our bottles is as potent as it is ethical. We believe in "slow beauty"—taking the time to craft formulas that truly work, respecting both your skin and the planet.
                            </p>
                            <p>
                                Every product tells a story of dedication. From the hand-picked rose petals to the cold-pressed oils, we oversee every step of the process. Lumière isn't just a brand; it's a commitment to authentic, timeless beauty.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
