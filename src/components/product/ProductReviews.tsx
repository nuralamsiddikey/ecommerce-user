import { Star, ThumbsUp } from 'lucide-react';

const REVIEWS = [
    {
        id: 1,
        user: 'Sarah M.',
        date: '2 days ago',
        rating: 5,
        title: 'My new favorite!',
        content: 'The texture is incredible. It feels like nothing on the lips but the color payoff is amazing. Definitely buying more shades.',
        helpful: 12
    },
    {
        id: 2,
        user: 'Jessica K.',
        date: '1 week ago',
        rating: 5,
        title: 'Perfect nude shade',
        content: 'I struggled to find a nude that doesn\'t wash me out, but "Nude Rose" is perfection. Highly recommend!',
        helpful: 8
    },
    {
        id: 3,
        user: 'Emily R.',
        date: '2 weeks ago',
        rating: 4,
        title: 'Great formula',
        content: 'Love the formula, very hydrating. The color is slightly darker than the picture but still beautiful.',
        helpful: 5
    }
];

export default function ProductReviews() {
    return (
        <div className="py-16 border-t border-border">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">Customer Reviews</h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Summary */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="bg-secondary/20 p-8 rounded-2xl text-center">
                        <div className="text-6xl font-serif font-bold text-foreground mb-2">4.8</div>
                        <div className="flex justify-center text-yellow-400 mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-6 h-6 fill-current" />
                            ))}
                        </div>
                        <p className="text-muted-foreground">Based on 128 reviews</p>
                    </div>

                    <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((rating) => (
                            <div key={rating} className="flex items-center gap-4">
                                <span className="w-3 text-sm font-bold">{rating}</span>
                                <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary rounded-full"
                                        style={{ width: rating === 5 ? '70%' : rating === 4 ? '20%' : '5%' }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="w-full py-3 border border-foreground text-foreground rounded-full font-bold hover:bg-foreground hover:text-white transition-colors">
                        Write a Review
                    </button>
                </div>

                {/* Reviews List */}
                <div className="lg:col-span-8 space-y-8">
                    {REVIEWS.map((review) => (
                        <div key={review.id} className="border-b border-border pb-8 last:border-0">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="flex text-yellow-400">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-current" />
                                            ))}
                                        </div>
                                        <span className="text-sm font-bold text-foreground">{review.title}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <span className="font-medium text-foreground">{review.user}</span>
                                        <span>•</span>
                                        <span>{review.date}</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                {review.content}
                            </p>

                            <button className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                                <ThumbsUp className="w-3 h-3" />
                                Helpful ({review.helpful})
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
