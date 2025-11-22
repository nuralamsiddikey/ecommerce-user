export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
    tag?: string;
    category: string;
    brand: string;
    finish?: string;
}

export interface FilterState {
    categories: string[];
    priceRange: [number, number];
    brands: string[];
    minRating: number | null;
    finish: string[];
}
