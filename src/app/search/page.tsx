'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchHeader from '@/components/search/SearchHeader';
import NoResults from '@/components/search/NoResults';
import FilterBar from '@/components/FilterBar';
import ProductCard from '@/components/ProductCard';
import type { FilterState } from '@/types/shop';

// Mock search results
const MOCK_PRODUCTS = [
    {
        id: '1',
        name: 'Velvet Matte Lipstick',
        description: 'Long-lasting matte finish',
        price: 32.00,
        rating: 4.8,
        reviews: 245,
        image: '/placeholder.jpg',
        tag: 'Best Seller',
    },
    {
        id: '2',
        name: 'Glossy Lip Tint',
        description: 'Hydrating glossy finish',
        price: 28.00,
        rating: 4.6,
        reviews: 189,
        image: '/placeholder.jpg',
        tag: 'New',
    },
    {
        id: '3',
        name: 'Lip Care Set',
        description: 'Complete lip care routine',
        price: 45.00,
        rating: 4.9,
        reviews: 312,
        image: '/placeholder.jpg',
        tag: 'Bundle',
    },
];

function SearchContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';

    const [filters, setFilters] = useState<FilterState>({
        categories: [],
        priceRange: [0, 500],
        brands: [],
        minRating: null,
        finish: []
    });

    // Simulate search - in real app, this would filter based on query
    const results = query.toLowerCase().includes('lipstick') || query.toLowerCase().includes('lip')
        ? MOCK_PRODUCTS
        : [];

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="container mx-auto px-4 py-12">
                {/* Search Header */}
                <SearchHeader query={query} resultsCount={results.length} />

                {results.length > 0 ? (
                    <>
                        {/* Filters & Sort */}
                        <div className="mb-8">
                            <FilterBar filters={filters} setFilters={setFilters} />
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {results.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    </>
                ) : (
                    <NoResults />
                )}
            </div>

            <Footer />
        </main>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchContent />
        </Suspense>
    );
}
