import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface BlogCardProps {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
}

export default function BlogCard({ title, excerpt, category, date, readTime, image }: BlogCardProps) {
    return (
        <article className="group cursor-pointer flex flex-col h-full">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 bg-secondary/20">
                {/* Placeholder for image */}
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform duration-700 ease-out">
                    <span className="font-serif text-4xl opacity-20">IMG</span>
                </div>

                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold tracking-wider uppercase rounded-full text-foreground shadow-sm">
                    {category}
                </span>
            </div>

            <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 uppercase tracking-wider font-medium">
                    <span>{date}</span>
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    <span>{readTime}</span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                    {title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                    {excerpt}
                </p>

                <div className="flex items-center text-sm font-semibold text-foreground group-hover:text-primary transition-colors mt-auto">
                    Read Article
                    <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
            </div>
        </article>
    );
}
