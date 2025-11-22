import { Leaf, Sparkles, Heart, Recycle } from 'lucide-react';

const VALUES = [
    {
        icon: Leaf,
        title: 'Clean Beauty',
        description: 'Free from parabens, sulfates, and harmful toxins. Pure, safe, and effective.'
    },
    {
        icon: Sparkles,
        title: 'Premium Ingredients',
        description: 'Sourced from the finest botanicals and scientifically proven actives.'
    },
    {
        icon: Recycle,
        title: 'Sustainability',
        description: 'Eco-friendly packaging and responsible sourcing practices.'
    },
    {
        icon: Heart,
        title: 'Cruelty-Free',
        description: 'Never tested on animals. We love our furry friends as much as you do.'
    }
];

export default function MissionValues() {
    return (
        <section className="py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {VALUES.map((value, index) => (
                        <div
                            key={index}
                            className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                                <value.icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                                {value.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
