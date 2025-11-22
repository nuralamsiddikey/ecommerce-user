'use client';

import { MapPin, CreditCard, Calendar } from 'lucide-react';

const MOCK_ORDER = {
    orderId: '#ORD-2025-0123',
    products: [
        { id: '1', name: 'Velvet Matte Lipstick', shade: 'Rose Nude', quantity: 2, price: 32.00 },
        { id: '2', name: 'Radiant Glow Serum', shade: 'Standard', quantity: 1, price: 68.00 },
    ],
    deliveryAddress: {
        name: 'Jane Doe',
        street: '123 Beauty Lane',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90001',
    },
    billingInfo: {
        method: 'Visa ending in 4242',
        amount: 132.00,
    },
    estimatedDelivery: 'January 20, 2025',
};

export default function OrderDetails() {
    return (
        <div className="space-y-6">
            {/* Products */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <h2 className="text-xl font-serif font-bold text-foreground mb-4">Order Items</h2>
                <div className="space-y-4">
                    {MOCK_ORDER.products.map((product) => (
                        <div key={product.id} className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                            <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center text-muted-foreground/50 text-xs font-serif flex-shrink-0">
                                IMG
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium text-foreground">{product.name}</h3>
                                <p className="text-sm text-muted-foreground">{product.shade}</p>
                                <p className="text-sm text-muted-foreground">Qty: {product.quantity}</p>
                            </div>
                            <div className="font-medium text-foreground">
                                ${(product.price * product.quantity).toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                        <h2 className="text-xl font-serif font-bold text-foreground mb-2">Delivery Address</h2>
                        <div className="text-muted-foreground space-y-1">
                            <p className="font-medium text-foreground">{MOCK_ORDER.deliveryAddress.name}</p>
                            <p>{MOCK_ORDER.deliveryAddress.street}</p>
                            <p>{MOCK_ORDER.deliveryAddress.city}, {MOCK_ORDER.deliveryAddress.state} {MOCK_ORDER.deliveryAddress.zip}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Billing & Delivery Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                    <div className="flex items-start gap-3">
                        <CreditCard className="w-5 h-5 text-primary mt-1" />
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">Payment Method</h3>
                            <p className="text-sm text-muted-foreground">{MOCK_ORDER.billingInfo.method}</p>
                            <p className="text-sm font-bold text-foreground mt-1">${MOCK_ORDER.billingInfo.amount.toFixed(2)}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                    <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-primary mt-1" />
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">Estimated Delivery</h3>
                            <p className="text-sm text-muted-foreground">{MOCK_ORDER.estimatedDelivery}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
