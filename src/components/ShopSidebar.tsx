import { Star, Check, Minus } from 'lucide-react';
import type { FilterState } from '@/types/shop';

interface ShopSidebarProps {
    filters: FilterState;
    setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

const CATEGORIES = ['Skincare', 'Makeup', 'Fragrance', 'Sets', 'Body', 'Accessories'];
const BRANDS = ['LuxeBeauty', 'GlowLab', 'PureSkin', 'Essence', 'Radiance'];

export default function ShopSidebar({ filters, setFilters }: ShopSidebarProps) {

    const toggleCategory = (category: string) => {
        setFilters(prev => {
            const newCategories = prev.categories.includes(category)
                ? prev.categories.filter(c => c !== category)
                : [...prev.categories, category];
            return { ...prev, categories: newCategories };
        });
    };

    const toggleBrand = (brand: string) => {
        setFilters(prev => {
            const newBrands = prev.brands.includes(brand)
                ? prev.brands.filter(b => b !== brand)
                : [...prev.brands, brand];
            return { ...prev, brands: newBrands };
        });
    };

    const handlePriceChange = (type: 'min' | 'max', value: string) => {
        const val = parseInt(value) || 0;
        setFilters(prev => ({
            ...prev,
            priceRange: type === 'min'
                ? [val, prev.priceRange[1]]
                : [prev.priceRange[0], val]
        }));
    };

    return (
        <aside className="w-64 hidden lg:block space-y-10">
            {/* Categories */}
            <div>
                <h3 className="font-serif font-bold text-lg mb-6">Categories</h3>
                <div className="space-y-3">
                    {CATEGORIES.map((category) => (
                        <label key={category} className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${filters.categories.includes(category) ? 'bg-primary border-primary text-white' : 'border-gray-300 group-hover:border-primary'}`}>
                                {filters.categories.includes(category) && <Check className="w-3 h-3" />}
                            </div>
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={filters.categories.includes(category)}
                                onChange={() => toggleCategory(category)}
                            />
                            <span className={`text-sm transition-colors ${filters.categories.includes(category) ? 'text-foreground font-medium' : 'text-muted-foreground group-hover:text-primary'}`}>
                                {category}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div>
                <h3 className="font-serif font-bold text-lg mb-6">Price Range</h3>
                <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">$</span>
                        <input
                            type="number"
                            value={filters.priceRange[0]}
                            onChange={(e) => handlePriceChange('min', e.target.value)}
                            className="w-full pl-6 pr-2 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                            placeholder="Min"
                        />
                    </div>
                    <Minus className="w-4 h-4 text-muted-foreground" />
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">$</span>
                        <input
                            type="number"
                            value={filters.priceRange[1]}
                            onChange={(e) => handlePriceChange('max', e.target.value)}
                            className="w-full pl-6 pr-2 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                            placeholder="Max"
                        />
                    </div>
                </div>
                <input
                    type="range"
                    min="0"
                    max="500"
                    value={filters.priceRange[1]}
                    onChange={(e) => handlePriceChange('max', e.target.value)}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
            </div>

            {/* Brands */}
            <div>
                <h3 className="font-serif font-bold text-lg mb-6">Brands</h3>
                <div className="space-y-3">
                    {BRANDS.map((brand) => (
                        <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${filters.brands.includes(brand) ? 'bg-primary border-primary text-white' : 'border-gray-300 group-hover:border-primary'}`}>
                                {filters.brands.includes(brand) && <Check className="w-3 h-3" />}
                            </div>
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={filters.brands.includes(brand)}
                                onChange={() => toggleBrand(brand)}
                            />
                            <span className={`text-sm transition-colors ${filters.brands.includes(brand) ? 'text-foreground font-medium' : 'text-muted-foreground group-hover:text-primary'}`}>
                                {brand}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Rating */}
            <div>
                <h3 className="font-serif font-bold text-lg mb-6">Rating</h3>
                <div className="space-y-2">
                    {[4, 3, 2, 1].map((rating) => (
                        <button
                            key={rating}
                            onClick={() => setFilters(prev => ({ ...prev, minRating: prev.minRating === rating ? null : rating }))}
                            className="flex items-center gap-2 group w-full"
                        >
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${filters.minRating === rating ? 'border-primary bg-primary/10' : 'border-gray-300 group-hover:border-primary'}`}>
                                {filters.minRating === rating && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                            </div>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-muted-foreground">& Up</span>
                        </button>
                    ))}
                </div>
            </div>
        </aside>
    );
}
