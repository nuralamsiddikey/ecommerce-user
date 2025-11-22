import { CheckCircle2 } from 'lucide-react';

export default function IngredientPhilosophy() {
    return (
        <section className="py-24 bg-gradient-to-r from-secondary/30 to-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                            Purity in Every Drop
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed font-light">
                            We believe that what you put on your skin is as important as what you put in your body. That's why we've banned over 1,500 questionable ingredients from our formulations.
                        </p>

                        <div className="space-y-4">
                            {['Sustainably Harvested Botanicals', 'Clinical Grade Actives', 'No Synthetic Fragrances', 'Dermatologist Tested'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span className="text-foreground font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="aspect-square rounded-full bg-white/50 backdrop-blur-xl border border-white/20 shadow-xl flex items-center justify-center p-12 text-center">
                            <div className="space-y-2">
                                <span className="text-6xl font-serif font-bold text-primary">100%</span>
                                <p className="text-muted-foreground font-medium uppercase tracking-widest text-sm">Clean &<br />Conscious</p>
                            </div>
                        </div>

                        {/* Decorative Orbits */}
                        <div className="absolute inset-0 border border-primary/10 rounded-full scale-125 animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute inset-0 border border-primary/20 rounded-full scale-110 animate-[spin_15s_linear_infinite_reverse]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
