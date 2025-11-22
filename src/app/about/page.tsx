import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import BrandStory from '@/components/about/BrandStory';
import MissionValues from '@/components/about/MissionValues';
import TeamSection from '@/components/about/TeamSection';
import IngredientPhilosophy from '@/components/about/IngredientPhilosophy';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import AboutCTA from '@/components/about/AboutCTA';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <AboutHero />
            <BrandStory />
            <MissionValues />
            <TeamSection />
            <IngredientPhilosophy />
            <WhyChooseUs />
            <AboutCTA />
            <Footer />
        </main>
    );
}
