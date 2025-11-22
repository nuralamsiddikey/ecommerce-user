'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import EmptyCart from '@/components/cart/EmptyCart';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
    const { cart } = useCart();

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Your Cart</h1>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
                </div>

                {/* Content */}
                {cart.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Cart Items */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                                <div className="space-y-2">
                                    {cart.map((item) => (
                                        <CartItem key={item.id} {...item} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Summary */}
                        <div className="lg:col-span-1">
                            <CartSummary />
                        </div>
                    </div>
                ) : (
                    <EmptyCart />
                )}
            </div>

            <Footer />
        </main>
    );
}
