import ProductCard from '@/components/ProductCard';

// Mock data reusing the structure from ProductGrid
const RELATED_PRODUCTS = [
    {
        id: '2',
        name: 'Radiance Serum',
        price: 48,
        rating: 4.9,
        reviews: 89,
        image: '/placeholder',
        tag: 'Best Seller',
        description: 'Vitamin C enriched brightening serum.'
    },
    {
        id: '3',
        name: 'Hydrating Mist',
        price: 24,
        rating: 4.7,
        reviews: 45,
        image: '/placeholder',
        tag: 'Limited',
        description: 'Refreshing rose water facial mist.'
    },
    {
        id: '4',
        name: 'Night Recovery Cream',
        price: 56,
        rating: 4.9,
        reviews: 120,
        image: '/placeholder',
        tag: 'New',
        description: 'Intensive repair for overnight renewal.'
    }
];

export default function RelatedProducts() {
    return (
        <div className="py-16 border-t border-border">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {RELATED_PRODUCTS.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}
