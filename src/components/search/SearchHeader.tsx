'use client';

interface SearchHeaderProps {
    query: string;
    resultsCount: number;
}

export default function SearchHeader({ query, resultsCount }: SearchHeaderProps) {
    return (
        <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
                Search results for "{query}"
            </h1>
            <p className="text-muted-foreground mb-4">
                {resultsCount} {resultsCount === 1 ? 'product' : 'products'} found
            </p>
            <div className="h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent"></div>
        </div>
    );
}
