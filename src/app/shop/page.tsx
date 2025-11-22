'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import ShopHeader from '@/components/ShopHeader';
import FilterBar from '@/components/FilterBar';
import ShopSidebar from '@/components/ShopSidebar';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Product, FilterState } from '@/types/shop';

// Mock data extended for shop page
const SHOP_PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Velvet Matte Lipstick',
        description: 'Long-lasting velvet formula with intense color payoff.',
        price: 32.00,
        rating: 4.8,
        reviews: 124,
        image: '/images/products/lipstick.png',
        tag: 'Best Seller',
        category: 'Makeup',
        brand: 'LuxeBeauty',
        finish: 'Matte'
    },
    {
        id: '2',
        name: 'Radiance Serum',
        description: 'Vitamin C enriched serum for a natural glow.',
        price: 58.00,
        rating: 4.9,
        reviews: 89,
        image: '/images/products/serum-bottle.png',
        tag: 'New',
        category: 'Skincare',
        brand: 'GlowLab',
        finish: 'Radiant'
    },
    {
        id: '3',
        name: 'Hydrating Face Cream',
        description: 'Deep hydration for dry and sensitive skin.',
        price: 45.00,
        rating: 4.7,
        reviews: 215,
        image: '/images/products/skincare-jar.png',
        category: 'Skincare',
        brand: 'PureSkin',
        finish: 'Natural'
    },
    {
        id: '4',
        name: 'Rose Gold Compact',
        description: '12 shimmer and matte shades for every occasion.',
        price: 65.00,
        rating: 4.9,
        reviews: 342,
        image: '/images/products/powder-compact.png',
        tag: 'Limited',
        category: 'Makeup',
        brand: 'LuxeBeauty',
        finish: 'Shimmer'
    },
    {
        id: '5',
        name: 'Nourishing Face Oil',
        description: 'Botanical blend for radiant, healthy skin.',
        price: 42.00,
        rating: 4.6,
        reviews: 156,
        image: '/images/products/face-oil.png',
        category: 'Skincare',
        brand: 'PureSkin',
        finish: 'Radiant'
    },
    {
        id: '6',
        name: 'Luxury Product Set',
        description: 'Complete skincare collection in one elegant set.',
        price: 128.00,
        rating: 4.8,
        reviews: 420,
        image: '/images/products/product-set.png',
        tag: 'New',
        category: 'Sets',
        brand: 'GlowLab',
        finish: 'Natural'
    }
];

export default function ShopPage() {
    const [filters, setFilters] = useState<FilterState>({
        categories: [],
        priceRange: [0, 200],
        brands: [],
        minRating: null,
        finish: []
    });

    const filteredProducts = useMemo(() => {
        return SHOP_PRODUCTS.filter(product => {
            // Category Filter
            if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
                return false;
            }

            // Price Filter
            if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
                return false;
            }

            // Brand Filter
            if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
                return false;
            }

            // Finish Filter
            if (filters.finish.length > 0 && product.finish && !filters.finish.includes(product.finish)) {
                return false;
            }

            // Rating Filter
            if (filters.minRating !== null && product.rating < filters.minRating) {
                return false;
            }

            return true;
        });
    }, [filters]);

    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <ShopHeader />
            <FilterBar filters={filters} setFilters={setFilters} />

            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <ShopSidebar filters={filters} setFilters={setFilters} />

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Results Count */}
                        <div className="mb-6 text-sm text-muted-foreground">
                            Showing <span className="font-bold text-foreground">{filteredProducts.length}</span> results
                        </div>

                        {/* Product Grid */}
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} {...product} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-secondary/20 rounded-2xl">
                                <h3 className="text-xl font-serif font-medium text-gray-900 mb-2">No products found</h3>
                                <p className="text-muted-foreground">Try adjusting your filters to see more results.</p>
                            </div>
                        )}

                        {/* Pagination (Mock) */}
                        {filteredProducts.length > 0 && (
                            <div className="flex justify-center items-center gap-4">
                                <button className="p-2 rounded-full border border-border hover:bg-secondary hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                                    <ChevronLeft className="w-5 h-5" />
                                </button>

                                <div className="flex items-center gap-2">
                                    <button className="w-10 h-10 rounded-full bg-primary text-white font-medium flex items-center justify-center shadow-md">1</button>
                                    <button className="w-10 h-10 rounded-full hover:bg-secondary text-foreground font-medium flex items-center justify-center transition-colors">2</button>
                                    <span className="text-muted-foreground">...</span>
                                </div>

                                <button className="p-2 rounded-full border border-border hover:bg-secondary hover:text-primary transition-colors">
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
