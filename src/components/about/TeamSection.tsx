export default function TeamSection() {
    const TEAM = [
        { name: 'Isabella Chen', role: 'Founder & CEO', bio: 'Visionary leader with a passion for sustainable beauty.' },
        { name: 'Dr. Elena Rossi', role: 'Head Dermatologist', bio: 'Expert in clinical skincare and formulation science.' },
        { name: 'Marcus Thorne', role: 'Creative Director', bio: 'Bringing the artistic vision of Lumière to life.' },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-serif font-bold text-foreground mb-4">The Minds Behind the Glow</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
                    Meet the passionate individuals dedicated to redefining your beauty ritual.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {TEAM.map((member, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <div className="w-48 h-48 rounded-full bg-secondary/40 mb-6 overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-serif text-2xl">
                                    PORTRAIT
                                </div>
                            </div>
                            <h3 className="text-xl font-serif font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                {member.name}
                            </h3>
                            <span className="text-xs font-bold tracking-wider text-primary uppercase mb-3">
                                {member.role}
                            </span>
                            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                                {member.bio}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
