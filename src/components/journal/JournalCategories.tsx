'use client';

import { useState } from 'react';

const CATEGORIES = ['All', 'Skincare', 'Makeup', 'Wellness', 'Trends', 'Tutorials', 'Lifestyle'];

export default function JournalCategories() {
    const [activeCategory, setActiveCategory] = useState('All');

    return (
        <div className="border-b border-border mb-12">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center gap-8 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`pb-4 text-sm font-medium tracking-wider uppercase transition-all relative whitespace-nowrap ${activeCategory === category
                                    ? 'text-foreground'
                                    : 'text-muted-foreground hover:text-primary'
                                }`}
                        >
                            {category}
                            {activeCategory === category && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
