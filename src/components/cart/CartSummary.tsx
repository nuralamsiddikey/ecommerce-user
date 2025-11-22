'use client';

import { useCart } from '@/context/CartContext';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CartSummary() {
    const { subtotal, tax, total } = useCart();

    return (
        <div className="bg-secondary/10 rounded-2xl p-8 sticky top-24">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Order Summary</h2>

            <div className="space-y-4 mb-8">
                <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span className="font-medium text-foreground">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span className="font-medium text-foreground">Free</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                    <span>Tax (8%)</span>
                    <span className="font-medium text-foreground">${tax.toFixed(2)}</span>
                </div>
                <div className="h-px bg-border my-4"></div>
                <div className="flex justify-between text-lg font-bold text-foreground">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>

            <Link href="/checkout" className="w-full py-4 bg-foreground text-white rounded-full font-bold hover:bg-foreground/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                Proceed to Checkout
                <ArrowRight className="w-4 h-4" />
            </Link>

            <p className="text-xs text-center text-muted-foreground mt-4">
                Secure Checkout • Free Shipping • 30-Day Returns
            </p>
        </div>
    );
}
