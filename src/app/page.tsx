import Navbar from '@/components/Navbar';
import EtherealHeroBanner from '@/components/home/EtherealHeroBanner';
import ProductGrid from '@/components/ProductGrid';
import CategoryHighlights from '@/components/home/CategoryHighlights';
import TopSellingProducts from '@/components/home/TopSellingProducts';
import DiscountedProducts from '@/components/home/DiscountedProducts';
import FeaturedCollections from '@/components/home/FeaturedCollections';
import BrandStoryTeaser from '@/components/home/BrandStoryTeaser';
import ReviewsCarousel from '@/components/home/ReviewsCarousel';
import Newsletter from '@/components/home/Newsletter';
import BestSellers from '@/components/home/BestSellers';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Ethereal Hero Banner */}
      <EtherealHeroBanner />

      {/* Top Selling Products */}
      <div className="pt-24 pb-12">
        <TopSellingProducts />
      </div>

      {/* Discounted Products */}
      <div className="py-12">
        <DiscountedProducts />
      </div>

      {/* Featured Collections */}
      <FeaturedCollections />

      {/* Featured Collection */}
      <section className="py-24 bg-background">
        <ProductGrid title="Featured Collection" />
      </section>

      {/* New Arrivals */}
      <section className="py-24 bg-background">
        <ProductGrid title="New Arrivals" />
      </section>

      {/* Category Highlights */}
      <div className="py-12">
        <CategoryHighlights />
      </div>

      {/* Best Sellers */}
      <BestSellers />

      {/* Brand Story Teaser */}
      <BrandStoryTeaser />

      {/* Customer Reviews */}
      <div className="py-24">
        <ReviewsCarousel />
      </div>

      {/* Newsletter */}
      <Newsletter />

      <Footer />
    </main>
  );
}
