import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-secondary/30 pt-20 pb-10 border-t border-border">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-serif font-bold text-foreground tracking-tight">
                            LUMIÈRE
                        </Link>
                        <p className="text-muted-foreground leading-relaxed">
                            Redefining beauty with clean, sustainable products that enhance your natural glow.
                        </p>
                        <div className="flex items-center space-x-4">
                            <Link href="#" className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors shadow-sm">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors shadow-sm">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors shadow-sm">
                                <Twitter className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="font-serif font-bold text-foreground mb-6">Shop</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">New Arrivals</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Best Sellers</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Skincare</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Makeup</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Sets & Kits</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-serif font-bold text-foreground mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Shipping & Returns</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
                            <li><Link href="/track-order" className="text-muted-foreground hover:text-primary transition-colors">Track Order</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-serif font-bold text-foreground mb-6">Stay in the Glow</h4>
                        <p className="text-muted-foreground mb-6">
                            Subscribe to receive updates, access to exclusive deals, and more.
                        </p>
                        <form className="space-y-4">
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-white border border-border rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                />
                            </div>
                            <button className="w-full py-3 bg-foreground text-white rounded-full font-medium hover:bg-foreground/90 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Lumière Cosmetics. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
