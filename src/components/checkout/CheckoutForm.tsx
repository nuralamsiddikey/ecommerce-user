'use client';

import { useState } from 'react';
import { CreditCard, Lock, Truck } from 'lucide-react';

export default function CheckoutForm() {
    const [deliveryMethod, setDeliveryMethod] = useState('standard');
    const [paymentMethod, setPaymentMethod] = useState('card');

    return (
        <div className="space-y-8">
            {/* Contact Information */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Full Name</label>
                        <input
                            type="text"
                            placeholder="Jane Doe"
                            className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="jane@example.com"
                                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-2">Phone</label>
                            <input
                                type="tel"
                                placeholder="+1 (555) 123-4567"
                                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Shipping Address */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Shipping Address</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Country</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                            <option>United States</option>
                            <option>Canada</option>
                            <option>United Kingdom</option>
                            <option>Australia</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Street Address</label>
                        <input
                            type="text"
                            placeholder="123 Beauty Lane"
                            className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-muted-foreground mb-2">City</label>
                            <input
                                type="text"
                                placeholder="Los Angeles"
                                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-2">Postal Code</label>
                            <input
                                type="text"
                                placeholder="90001"
                                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Delivery Method */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Delivery Method</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                        onClick={() => setDeliveryMethod('standard')}
                        className={`p-4 rounded-xl border-2 transition-all text-left ${deliveryMethod === 'standard'
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-primary/50'
                            }`}
                    >
                        <div className="flex items-start gap-3">
                            <Truck className="w-5 h-5 text-primary mt-1" />
                            <div className="flex-1">
                                <div className="font-semibold text-foreground">Standard Delivery</div>
                                <div className="text-sm text-muted-foreground mt-1">5-7 business days</div>
                                <div className="text-sm font-bold text-foreground mt-2">Free</div>
                            </div>
                        </div>
                    </button>
                    <button
                        onClick={() => setDeliveryMethod('express')}
                        className={`p-4 rounded-xl border-2 transition-all text-left ${deliveryMethod === 'express'
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-primary/50'
                            }`}
                    >
                        <div className="flex items-start gap-3">
                            <Truck className="w-5 h-5 text-primary mt-1" />
                            <div className="flex-1">
                                <div className="font-semibold text-foreground">Express Delivery</div>
                                <div className="text-sm text-muted-foreground mt-1">2-3 business days</div>
                                <div className="text-sm font-bold text-foreground mt-2">$15.00</div>
                            </div>
                        </div>
                    </button>
                </div>
            </section>

            {/* Payment */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Payment</h2>

                {/* Payment Method Selection */}
                <div className="flex gap-3 mb-6">
                    <button
                        onClick={() => setPaymentMethod('card')}
                        className={`flex-1 p-3 rounded-xl border-2 transition-all ${paymentMethod === 'card'
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-primary/50'
                            }`}
                    >
                        <CreditCard className="w-5 h-5 mx-auto text-foreground" />
                        <div className="text-xs mt-1 text-center">Card</div>
                    </button>
                    <button
                        onClick={() => setPaymentMethod('apple')}
                        className={`flex-1 p-3 rounded-xl border-2 transition-all ${paymentMethod === 'apple'
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-primary/50'
                            }`}
                    >
                        <div className="text-lg mx-auto text-center">🍎</div>
                        <div className="text-xs mt-1 text-center">Apple Pay</div>
                    </button>
                </div>

                {/* Card Details */}
                {paymentMethod === 'card' && (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-2">Card Number</label>
                            <input
                                type="text"
                                placeholder="1234 5678 9012 3456"
                                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-2">Expiry Date</label>
                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-2">CVV</label>
                                <input
                                    type="text"
                                    placeholder="123"
                                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Pay Button */}
                <button className="w-full mt-6 py-4 bg-foreground text-white rounded-full font-bold hover:bg-foreground/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                    <Lock className="w-4 h-4" />
                    Pay Now
                </button>

                {/* Security Badges */}
                <div className="flex items-center justify-center gap-4 mt-6 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <Lock className="w-3 h-3" />
                        <span>Secure Checkout</span>
                    </div>
                    <span>•</span>
                    <span>Powered by Stripe</span>
                </div>
            </section>
        </div>
    );
}
