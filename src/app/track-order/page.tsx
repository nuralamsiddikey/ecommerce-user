'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OrderSearch from '@/components/tracking/OrderSearch';
import OrderTimeline from '@/components/tracking/OrderTimeline';
import OrderDetails from '@/components/tracking/OrderDetails';

export default function TrackOrderPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Track Your Order</h1>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
                    <p className="text-lg text-muted-foreground font-light">
                        Stay updated on your beauty essentials
                    </p>
                </div>

                {/* Search */}
                <div className="max-w-2xl mx-auto mb-12">
                    <OrderSearch />
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Timeline */}
                    <div className="lg:col-span-2">
                        <OrderTimeline currentStage={4} />
                    </div>

                    {/* Order Details */}
                    <div className="lg:col-span-1">
                        <OrderDetails />
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
