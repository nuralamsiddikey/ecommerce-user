'use client';

import { useCart } from '@/context/CartContext';

export default function CheckoutSummary() {
    const { cart, subtotal, tax, total } = useCart();

    return (
        <div className="bg-secondary/10 rounded-2xl p-6 md:p-8 sticky top-24">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Order Summary</h2>

            {/* Product List */}
            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                        <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center text-muted-foreground/50 text-xs font-serif flex-shrink-0">
                            IMG
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-foreground truncate">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">Qty: {item.quantity || 1}</p>
                        </div>
                        <div className="font-medium text-foreground">
                            ${(item.price * (item.quantity || 1)).toFixed(2)}
                        </div>
                    </div>
                ))}
            </div>

            {/* Totals */}
            <div className="space-y-3 pt-4 border-t border-border">
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
                <div className="flex justify-between text-xl font-bold text-foreground">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}
