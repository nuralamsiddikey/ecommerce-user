import Navbar from '@/components/Navbar';
import EtherealHeroBanner from '@/components/home/EtherealHeroBanner';
import ProductGrid from '@/components/ProductGrid';
import CategoryHighlights from '@/components/home/CategoryHighlights';
import BrandStoryTeaser from '@/components/home/BrandStoryTeaser';
import ReviewsCarousel from '@/components/home/ReviewsCarousel';
import Newsletter from '@/components/home/Newsletter';
import Footer from '@/components/Footer';

export default function EtherealDemo() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* New Ethereal Hero Banner */}
            <EtherealHeroBanner />

            {/* Featured Collection */}
            <section className="py-20 bg-background">
                <ProductGrid title="Featured Collection" />
            </section>

            {/* Category Highlights */}
            <CategoryHighlights />

            {/* Best Sellers */}
            <section className="py-20 bg-primary/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                            Best Sellers
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Our most-loved products
                        </p>
                    </div>
                    <ProductGrid title="" />
                </div>
            </section>

            {/* Brand Story Teaser */}
            <BrandStoryTeaser />

            {/* Customer Reviews */}
            <ReviewsCarousel />

            {/* Newsletter */}
            <Newsletter />

            <Footer />
        </main>
    );
}
