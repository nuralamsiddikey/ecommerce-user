import { useState, useRef, useEffect } from 'react';
import { ChevronDown, SlidersHorizontal, Check, X } from 'lucide-react';
import type { FilterState } from '@/types/shop';

interface FilterBarProps {
    filters: FilterState;
    setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

const CATEGORIES = ['Skincare', 'Makeup', 'Fragrance', 'Sets', 'Body', 'Accessories'];
const BRANDS = ['LuxeBeauty', 'GlowLab', 'PureSkin', 'Essence', 'Radiance'];
const FINISHES = ['Matte', 'Radiant', 'Natural', 'Shimmer', 'Satin', 'Glossy'];

export default function FilterBar({ filters, setFilters }: FilterBarProps) {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleFilter = (type: 'categories' | 'brands' | 'finish', value: string) => {
        setFilters(prev => {
            const current = prev[type];
            const updated = current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value];
            return { ...prev, [type]: updated };
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

    const clearFilters = () => {
        setFilters({
            categories: [],
            priceRange: [0, 500],
            brands: [],
            minRating: null,
            finish: []
        });
        setActiveDropdown(null);
    };

    const renderDropdownContent = (filter: string) => {
        switch (filter) {
            case 'Category':
                return (
                    <div className="p-4 w-64 space-y-2">
                        {CATEGORIES.map(category => (
                            <label key={category} className="flex items-center gap-3 cursor-pointer hover:bg-secondary/30 p-2 rounded-lg transition-colors">
                                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${filters.categories.includes(category) ? 'bg-primary border-primary text-white' : 'border-gray-300'}`}>
                                    {filters.categories.includes(category) && <Check className="w-3 h-3" />}
                                </div>
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    checked={filters.categories.includes(category)}
                                    onChange={() => toggleFilter('categories', category)}
                                />
                                <span className="text-sm font-medium">{category}</span>
                            </label>
                        ))}
                    </div>
                );
            case 'Price':
                return (
                    <div className="p-4 w-72">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="relative flex-1">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">$</span>
                                <input
                                    type="number"
                                    value={filters.priceRange[0]}
                                    onChange={(e) => handlePriceChange('min', e.target.value)}
                                    className="w-full pl-6 pr-2 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                                    placeholder="Min"
                                />
                            </div>
                            <span className="text-muted-foreground">-</span>
                            <div className="relative flex-1">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">$</span>
                                <input
                                    type="number"
                                    value={filters.priceRange[1]}
                                    onChange={(e) => handlePriceChange('max', e.target.value)}
                                    className="w-full pl-6 pr-2 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
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
                        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                            <span>$0</span>
                            <span>$500+</span>
                        </div>
                    </div>
                );
            case 'Brand':
                return (
                    <div className="p-4 w-64 space-y-2">
                        {BRANDS.map(brand => (
                            <label key={brand} className="flex items-center gap-3 cursor-pointer hover:bg-secondary/30 p-2 rounded-lg transition-colors">
                                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${filters.brands.includes(brand) ? 'bg-primary border-primary text-white' : 'border-gray-300'}`}>
                                    {filters.brands.includes(brand) && <Check className="w-3 h-3" />}
                                </div>
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    checked={filters.brands.includes(brand)}
                                    onChange={() => toggleFilter('brands', brand)}
                                />
                                <span className="text-sm font-medium">{brand}</span>
                            </label>
                        ))}
                    </div>
                );
            case 'Finish':
                return (
                    <div className="p-4 w-64 space-y-2">
                        {FINISHES.map(finish => (
                            <label key={finish} className="flex items-center gap-3 cursor-pointer hover:bg-secondary/30 p-2 rounded-lg transition-colors">
                                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${filters.finish.includes(finish) ? 'bg-primary border-primary text-white' : 'border-gray-300'}`}>
                                    {filters.finish.includes(finish) && <Check className="w-3 h-3" />}
                                </div>
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    checked={filters.finish.includes(finish)}
                                    onChange={() => toggleFilter('finish', finish)}
                                />
                                <span className="text-sm font-medium">{finish}</span>
                            </label>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-border py-4" ref={dropdownRef}>
            <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
                {/* Filters */}
                <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                    <button
                        onClick={clearFilters}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors whitespace-nowrap"
                    >
                        <SlidersHorizontal className="w-4 h-4" />
                        All Filters
                    </button>

                    <div className="h-6 w-px bg-border mx-2 hidden md:block"></div>

                    {['Category', 'Price', 'Brand', 'Finish'].map((filter) => (
                        <div key={filter} className="relative">
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === filter ? null : filter)}
                                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${activeDropdown === filter ? 'bg-primary text-white' : 'bg-transparent hover:bg-secondary/50 text-foreground'}`}
                            >
                                {filter}
                                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === filter ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown */}
                            {activeDropdown === filter && (
                                <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 animate-in fade-in zoom-in-95 duration-200">
                                    {renderDropdownContent(filter)}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Sort */}
                <div className="flex items-center gap-2 ml-auto">
                    <span className="text-sm text-muted-foreground hidden md:inline">Sort by:</span>
                    <button className="flex items-center gap-1 px-4 py-2 bg-transparent hover:bg-secondary/50 rounded-full text-sm font-medium text-foreground transition-colors whitespace-nowrap">
                        Recommended
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    </button>
                </div>
            </div>
        </div>
    );
}
