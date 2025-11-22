import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductHighlights from '@/components/product/ProductHighlights';
import ProductDetails from '@/components/product/ProductDetails';
import ProductReviews from '@/components/product/ProductReviews';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="container mx-auto px-4 py-12">
                {/* Top Section: Gallery + Info */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
                    <ProductGallery />
                    <div className="flex flex-col justify-center">
                        <ProductInfo />
                        <div className="mt-8 pt-8 border-t border-border">
                            <ProductHighlights />
                        </div>
                    </div>
                </div>

                {/* Details Tabs */}
                <ProductDetails />

                {/* Reviews */}
                <ProductReviews />

                {/* Related Products */}
                <RelatedProducts />
            </div>

            <Footer />
        </main>
    );
}
