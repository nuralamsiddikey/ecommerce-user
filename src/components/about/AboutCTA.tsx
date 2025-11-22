import Link from 'next/link';

export default function AboutCTA() {
    return (
        <section className="py-32 bg-foreground text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder-pattern.png')] opacity-5"></div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8">
                    Experience Beauty, Naturally
                </h2>
                <p className="text-white/70 text-xl max-w-2xl mx-auto mb-12 font-light">
                    Join us on a journey to radiant, healthy skin. Discover our collection of thoughtfully crafted essentials.
                </p>
                <Link
                    href="/shop"
                    className="inline-block px-10 py-4 bg-white text-foreground rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 shadow-lg"
                >
                    Shop Collection
                </Link>
            </div>
        </section>
    );
}
