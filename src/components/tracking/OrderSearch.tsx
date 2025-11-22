'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';

export default function OrderSearch() {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Track Your Order</h2>
                <p className="text-muted-foreground">Enter your order ID or email to track your delivery</p>
            </div>

            <div className="flex gap-3">
                <input
                    type="text"
                    placeholder="Order ID or Email"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <button className="px-8 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all shadow-sm hover:shadow-md flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    Track
                </button>
            </div>
        </div>
    );
}
