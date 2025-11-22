'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WishlistItem from '@/components/wishlist/WishlistItem';
import EmptyWishlist from '@/components/wishlist/EmptyWishlist';
import { useWishlist } from '@/context/WishlistContext';

export default function WishlistPage() {
    const { wishlist } = useWishlist();

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Wishlist</h1>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
                    <p className="text-lg text-muted-foreground font-light">
                        Your saved beauty favorites.
                    </p>
                </div>

                {/* Content */}
                {wishlist.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {wishlist.map((item) => (
                            <WishlistItem key={item.id} {...item} />
                        ))}
                    </div>
                ) : (
                    <EmptyWishlist />
                )}
            </div>

            <Footer />
        </main>
    );
}
