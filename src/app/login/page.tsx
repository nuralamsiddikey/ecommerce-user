'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
            >
                <div className="p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                        <p className="text-white/70">Sign in to continue to your account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/80 ml-1">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5" />
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/80 ml-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5" />
                                <input
                                    type="password"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center text-white/70 cursor-pointer hover:text-white transition-colors">
                                <input type="checkbox" className="mr-2 rounded bg-white/10 border-white/20 text-purple-500 focus:ring-offset-0 focus:ring-purple-500/50" />
                                Remember me
                            </label>
                            <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-white text-purple-600 font-bold rounded-xl py-3 px-4 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all flex items-center justify-center group"
                        >
                            {isLoading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-white/60">
                        Don't have an account?{' '}
                        <Link href="#" className="text-white font-medium hover:underline">
                            Sign up
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
