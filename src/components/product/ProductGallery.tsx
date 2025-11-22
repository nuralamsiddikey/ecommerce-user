'use client';

import { useState } from 'react';

export default function ProductGallery() {
    const [activeImage, setActiveImage] = useState(0);

    // Product images array
    const images = [
        '/images/products/serum-bottle.png',
        '/images/products/lipstick.png',
        '/images/products/skincare-jar.png',
        '/images/products/powder-compact.png'
    ];

    return (
        <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible no-scrollbar">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveImage(index)}
                        className={`relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${activeImage === index ? 'border-primary' : 'border-transparent hover:border-primary/30'
                            }`}
                    >
                        <img
                            src={img}
                            alt={`Product view ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 relative aspect-square md:aspect-[4/5] bg-secondary/20 rounded-2xl overflow-hidden group cursor-zoom-in">
                <img
                    src={images[activeImage]}
                    alt="Product main view"
                    className="w-full h-full object-cover"
                />
                {/* Zoom effect overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
            </div>
        </div>
    );
}
