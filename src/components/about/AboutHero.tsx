'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-secondary/20">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-10"></div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 tracking-tight"
                >
                    About Us
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <div className="w-24 h-1 bg-primary/40 rounded-full mb-8"></div>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide leading-relaxed">
                        Our story of beauty, care, and craftsmanship.
                    </p>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
}
