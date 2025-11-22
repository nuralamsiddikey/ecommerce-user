'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import CheckoutSummary from '@/components/checkout/CheckoutSummary';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CheckoutPage() {
    const { cart } = useCart();
    const router = useRouter();

    // Redirect to cart if empty
    useEffect(() => {
        if (cart.length === 0) {
            router.push('/cart');
        }
    }, [cart, router]);

    if (cart.length === 0) {
        return null;
    }

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Checkout</h1>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Checkout Form */}
                    <div className="lg:col-span-2">
                        <CheckoutForm />
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <CheckoutSummary />
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
