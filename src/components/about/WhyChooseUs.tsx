import { Star, ShieldCheck, Truck, Globe } from 'lucide-react';

const FEATURES = [
    {
        icon: Star,
        title: 'Premium Quality',
        description: 'Award-winning formulas loved by thousands.'
    },
    {
        icon: ShieldCheck,
        title: 'Dermatologist Approved',
        description: 'Safe for sensitive skin and rigorously tested.'
    },
    {
        icon: Globe,
        title: 'Eco-Friendly',
        description: 'Carbon neutral shipping and recyclable packaging.'
    },
    {
        icon: Truck,
        title: 'Fast Shipping',
        description: 'Free express delivery on orders over $50.'
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Why Lumière?</h2>
                    <p className="text-muted-foreground">Experience the difference of true luxury.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FEATURES.map((feature, index) => (
                        <div key={index} className="p-8 border border-border rounded-2xl hover:border-primary/50 transition-colors group">
                            <feature.icon className="w-8 h-8 text-muted-foreground mb-4 group-hover:text-primary transition-colors" />
                            <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
