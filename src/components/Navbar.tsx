'use client';

import Link from 'next/link';
import { Search, User, ShoppingBag, Menu, X, Heart } from 'lucide-react';
import { useState } from 'react';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { wishlist } = useWishlist();
  const { cart } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-secondary rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>

        {/* Logo */}
        <Link href="/" className="text-2xl font-serif font-bold text-foreground tracking-tight">
          LUMIÈRE
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/shop" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Shop
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/journal" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Journal
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link href="/search?q=" className="p-2 hover:bg-secondary rounded-full transition-colors">
            <Search className="w-5 h-5 text-foreground" />
          </Link>
          <Link href="/wishlist" className="p-2 hover:bg-secondary rounded-full transition-colors relative">
            <Heart className="w-5 h-5 text-foreground" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </Link>
          <Link href="/profile" className="p-2 hover:bg-secondary rounded-full transition-colors">
            <User className="w-5 h-5 text-foreground" />
          </Link>
          <Link href="/cart" className="p-2 hover:bg-secondary rounded-full transition-colors relative">
            <ShoppingBag className="w-5 h-5 text-foreground" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-border shadow-lg animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="/"
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/journal"
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Journal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
