'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProfileHeader from '@/components/profile/ProfileHeader';
import OrderHistory from '@/components/profile/OrderHistory';
import AddressBook from '@/components/profile/AddressBook';
import AccountSettings from '@/components/profile/AccountSettings';
import { useWishlist } from '@/context/WishlistContext';
import WishlistItem from '@/components/wishlist/WishlistItem';
import EmptyWishlist from '@/components/wishlist/EmptyWishlist';

type Tab = 'orders' | 'addresses' | 'wishlist' | 'settings';

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState<Tab>('orders');
    const { wishlist } = useWishlist();

    const tabs = [
        { id: 'orders' as Tab, label: 'Orders' },
        { id: 'addresses' as Tab, label: 'Addresses' },
        { id: 'wishlist' as Tab, label: 'Wishlist' },
        { id: 'settings' as Tab, label: 'Account Settings' },
    ];

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="mb-8">
                    <ProfileHeader />
                </div>

                {/* Tabs */}
                <div className="mb-8 overflow-x-auto">
                    <div className="flex gap-2 border-b border-border min-w-max">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 font-medium transition-all relative ${activeTab === tab.id
                                        ? 'text-primary'
                                        : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="max-w-4xl">
                    {activeTab === 'orders' && <OrderHistory />}
                    {activeTab === 'addresses' && <AddressBook />}
                    {activeTab === 'wishlist' && (
                        <div>
                            {wishlist.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {wishlist.map((item) => (
                                        <WishlistItem key={item.id} {...item} />
                                    ))}
                                </div>
                            ) : (
                                <EmptyWishlist />
                            )}
                        </div>
                    )}
                    {activeTab === 'settings' && <AccountSettings />}
                </div>
            </div>

            <Footer />
        </main>
    );
}
