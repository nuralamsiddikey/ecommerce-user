import { Mail, ArrowRight } from 'lucide-react';

export default function JournalSidebar() {
    return (
        <aside className="space-y-12 sticky top-24">
            {/* Trending Posts */}
            <div>
                <h3 className="font-serif font-bold text-xl mb-6 pb-2 border-b border-border">Trending Now</h3>
                <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="group cursor-pointer flex gap-4 items-start">
                            <div className="w-20 h-20 bg-secondary/30 rounded-lg flex-shrink-0 flex items-center justify-center text-xs text-muted-foreground">IMG</div>
                            <div>
                                <span className="text-[10px] font-bold tracking-wider text-primary uppercase mb-1 block">Skincare</span>
                                <h4 className="font-medium text-foreground leading-snug group-hover:text-primary transition-colors">
                                    5 Steps to a Perfect Night Routine
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Popular Tags */}
            <div>
                <h3 className="font-serif font-bold text-xl mb-6 pb-2 border-b border-border">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {['#CleanBeauty', '#GlowUp', '#Sustainable', '#MakeupTips', '#SelfCare', '#Ingredients'].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-secondary/30 text-muted-foreground text-xs font-medium rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Newsletter */}
            <div className="bg-secondary/20 p-8 rounded-2xl text-center">
                <h3 className="font-serif font-bold text-xl mb-2">Join the Community</h3>
                <p className="text-sm text-muted-foreground mb-6">
                    Get the latest beauty trends and tips delivered to your inbox.
                </p>
                <form className="space-y-3">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <button className="w-full py-3 bg-foreground text-white rounded-xl font-bold text-sm hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2">
                        Subscribe
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </form>
            </div>
        </aside>
    );
}
