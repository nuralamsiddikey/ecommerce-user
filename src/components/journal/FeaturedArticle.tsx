import { ArrowRight } from 'lucide-react';

export default function FeaturedArticle() {
    return (
        <section className="container mx-auto px-4 mb-20">
            <div className="relative rounded-3xl overflow-hidden aspect-[21/9] bg-secondary/20 group cursor-pointer">
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-300">
                    <span className="font-serif text-6xl opacity-20">FEATURED IMG</span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
                    <span className="inline-block px-4 py-1.5 bg-primary text-white text-xs font-bold tracking-wider uppercase rounded-full mb-4 w-fit">
                        Editor's Pick
                    </span>

                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 max-w-3xl leading-tight group-hover:underline decoration-primary decoration-2 underline-offset-4">
                        The Ultimate Guide to Summer Skincare: Glow from Within
                    </h2>

                    <div className="flex items-center gap-6 text-white/80 mb-6 text-sm font-medium">
                        <span>June 12, 2024</span>
                        <span className="w-1 h-1 bg-white rounded-full"></span>
                        <span>8 min read</span>
                    </div>

                    <button className="px-8 py-3 bg-white text-foreground rounded-full font-bold hover:bg-primary hover:text-white transition-all w-fit flex items-center gap-2">
                        Read Full Story
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}
