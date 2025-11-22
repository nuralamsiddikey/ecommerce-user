'use client';

import { useState } from 'react';

const TABS = ['Description', 'Ingredients', 'How to Use', 'Shipping'];

export default function ProductDetails() {
    const [activeTab, setActiveTab] = useState('Description');

    return (
        <div className="py-16 border-t border-border">
            <div className="flex flex-wrap justify-center gap-8 mb-12 border-b border-border pb-4">
                {TABS.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-lg font-medium transition-colors relative pb-4 -mb-4.5 ${activeTab === tab
                                ? 'text-foreground'
                                : 'text-muted-foreground hover:text-primary'
                            }`}
                    >
                        {tab}
                        {activeTab === tab && (
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                        )}
                    </button>
                ))}
            </div>

            <div className="max-w-3xl mx-auto text-center leading-relaxed text-muted-foreground">
                {activeTab === 'Description' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <p>
                            Experience the perfect balance of color and care with our Silk Matte Nude Lipstick. Enriched with organic shea butter and jojoba oil, this creamy formula glides on effortlessly, delivering a soft-focus matte finish that never feels dry.
                        </p>
                        <p>
                            The highly pigmented shades are designed to flatter all skin tones, providing buildable coverage that lasts up to 12 hours. Whether you're going for a subtle everyday look or a bold statement, this lipstick is your new beauty essential.
                        </p>
                    </div>
                )}
                {activeTab === 'Ingredients' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <p>
                            Ricinus Communis (Castor) Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Butyrospermum Parkii (Shea) Butter, Candelilla Cera, Rosa Canina Fruit Oil, Tocopherol (Vitamin E), Vanilla Planifolia Fruit Extract.
                        </p>
                        <p className="text-sm italic">
                            *Certified Organic Ingredients. 100% Vegan & Cruelty-Free.
                        </p>
                    </div>
                )}
                {activeTab === 'How to Use' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <p>
                            Apply directly from the bullet for a precise, opaque finish. For a softer, diffused look, dab onto the center of lips and blend outwards with your finger.
                        </p>
                        <p>
                            Pro Tip: Exfoliate lips before application for the smoothest canvas.
                        </p>
                    </div>
                )}
                {activeTab === 'Shipping' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <p>
                            Free standard shipping on all orders over $50. Orders are processed within 1-2 business days.
                        </p>
                        <p>
                            We ship worldwide using eco-friendly, plastic-free packaging.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
