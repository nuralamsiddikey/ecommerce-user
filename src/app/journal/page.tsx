import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JournalHero from '@/components/journal/JournalHero';
import JournalCategories from '@/components/journal/JournalCategories';
import FeaturedArticle from '@/components/journal/FeaturedArticle';
import BlogCard from '@/components/journal/BlogCard';
import JournalSidebar from '@/components/journal/JournalSidebar';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Mock Data
const BLOG_POSTS = [
    {
        id: '1',
        title: 'The Science Behind Clean Beauty Ingredients',
        excerpt: 'Understanding what goes into your products is the first step to a healthier skincare routine. We break down the most popular clean ingredients.',
        category: 'Skincare',
        date: 'June 10, 2024',
        readTime: '5 min read',
        image: '/placeholder'
    },
    {
        id: '2',
        title: 'Summer Makeup Trends You Need to Try',
        excerpt: 'From glossy lips to graphic liners, here are the hottest makeup looks dominating the runway and social media this season.',
        category: 'Trends',
        date: 'June 08, 2024',
        readTime: '4 min read',
        image: '/placeholder'
    },
    {
        id: '3',
        title: 'Mindful Morning Rituals for Inner Glow',
        excerpt: 'Beauty starts from within. Discover how simple mindfulness practices can enhance your daily beauty routine and reduce stress.',
        category: 'Wellness',
        date: 'June 05, 2024',
        readTime: '6 min read',
        image: '/placeholder'
    },
    {
        id: '4',
        title: 'How to Choose the Right Foundation Shade',
        excerpt: 'Struggling to find your perfect match? Our expert guide helps you identify your undertone and select the flawless shade.',
        category: 'Tutorials',
        date: 'June 01, 2024',
        readTime: '7 min read',
        image: '/placeholder'
    },
    {
        id: '5',
        title: 'Sustainable Packaging: Our Commitment',
        excerpt: 'Learn about our journey towards 100% eco-friendly packaging and how we are reducing our environmental footprint.',
        category: 'Lifestyle',
        date: 'May 28, 2024',
        readTime: '3 min read',
        image: '/placeholder'
    },
    {
        id: '6',
        title: 'The Benefits of Rose Water for All Skin Types',
        excerpt: 'This ancient beauty secret is making a comeback. Find out why rose water should be a staple in your skincare arsenal.',
        category: 'Skincare',
        date: 'May 25, 2024',
        readTime: '4 min read',
        image: '/placeholder'
    }
];

export default function JournalPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <JournalHero />

            <div className="py-12">
                <FeaturedArticle />
                <JournalCategories />

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-16">
                                {BLOG_POSTS.map((post) => (
                                    <BlogCard key={post.id} {...post} />
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="flex justify-center items-center gap-4 mb-12 lg:mb-0">
                                <button className="px-6 py-3 border border-border rounded-full text-sm font-medium hover:bg-secondary hover:text-primary transition-colors flex items-center gap-2">
                                    <ChevronLeft className="w-4 h-4" />
                                    Previous
                                </button>
                                <button className="px-6 py-3 border border-border rounded-full text-sm font-medium hover:bg-secondary hover:text-primary transition-colors flex items-center gap-2">
                                    Next
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4">
                            <JournalSidebar />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
