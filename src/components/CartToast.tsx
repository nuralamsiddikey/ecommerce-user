'use client';

import { useCart } from '@/context/CartContext';
import { ShoppingBag, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function CartToast() {
    const { showToast, toastProduct, closeToast } = useCart();

    return (
        <AnimatePresence>
            {showToast && toastProduct && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed bottom-6 right-6 z-50 w-full max-w-sm"
                >
                    <div className="bg-white/90 backdrop-blur-md border border-pink-100 rounded-2xl shadow-2xl p-5 relative overflow-hidden">
                        {/* Close Button */}
                        <button
                            onClick={closeToast}
                            className="absolute top-3 right-3 text-muted-foreground/50 hover:text-foreground transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <div className="flex gap-4 items-start">
                            {/* Thumbnail */}
                            <div className="w-16 h-16 bg-secondary/30 rounded-lg flex-shrink-0 flex items-center justify-center text-[10px] text-muted-foreground font-serif overflow-hidden">
                                {/* In real app use Image component */}
                                IMG
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="bg-green-500/10 text-green-600 p-1 rounded-full">
                                        <ShoppingBag className="w-3 h-3" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-green-600">Added to Cart</span>
                                </div>

                                <h4 className="font-serif font-bold text-foreground text-lg leading-tight mb-4">
                                    {toastProduct.name}
                                </h4>

                                <div className="flex gap-3">
                                    <Link
                                        href="#"
                                        className="flex-1 bg-foreground text-white text-xs font-bold py-2.5 rounded-full text-center hover:bg-foreground/90 transition-colors shadow-lg shadow-foreground/20"
                                    >
                                        View Cart
                                    </Link>
                                    <button
                                        onClick={closeToast}
                                        className="flex-1 bg-transparent border border-border text-foreground text-xs font-bold py-2.5 rounded-full hover:bg-secondary transition-colors"
                                    >
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
