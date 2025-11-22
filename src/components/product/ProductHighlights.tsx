import { ShieldCheck, Leaf, Droplets, Clock } from 'lucide-react';

const HIGHLIGHTS = [
    { icon: ShieldCheck, text: 'Dermatologist Tested' },
    { icon: Leaf, text: 'Natural Ingredients' },
    { icon: Droplets, text: 'Hydrating Formula' },
    { icon: Clock, text: '12h Long-wear' },
];

export default function ProductHighlights() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
            {HIGHLIGHTS.map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-4 bg-secondary/20 rounded-xl text-center gap-2 hover:bg-secondary/40 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                    <span className="text-sm font-medium text-foreground/80">{item.text}</span>
                </div>
            ))}
        </div>
    );
}
