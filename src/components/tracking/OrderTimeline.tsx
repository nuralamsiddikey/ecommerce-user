'use client';

import { Package, Truck, CheckCircle, Clock, Box, Home } from 'lucide-react';

const STAGES = [
    { id: 1, name: 'Order Placed', icon: CheckCircle, date: 'Jan 15, 2025' },
    { id: 2, name: 'Processing', icon: Clock, date: 'Jan 15, 2025' },
    { id: 3, name: 'Packed', icon: Box, date: 'Jan 16, 2025' },
    { id: 4, name: 'Shipped', icon: Truck, date: 'Jan 17, 2025' },
    { id: 5, name: 'Out for Delivery', icon: Package, date: 'Expected Jan 20' },
    { id: 6, name: 'Delivered', icon: Home, date: 'Pending' },
];

interface OrderTimelineProps {
    currentStage?: number;
}

export default function OrderTimeline({ currentStage = 4 }: OrderTimelineProps) {
    return (
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Order Status</h2>

            <div className="relative">
                {/* Timeline */}
                <div className="space-y-8">
                    {STAGES.map((stage, index) => {
                        const isCompleted = stage.id <= currentStage;
                        const isCurrent = stage.id === currentStage;
                        const Icon = stage.icon;

                        return (
                            <div key={stage.id} className="relative flex items-start gap-4">
                                {/* Connector Line */}
                                {index < STAGES.length - 1 && (
                                    <div
                                        className={`absolute left-5 top-12 w-0.5 h-16 transition-colors ${isCompleted ? 'bg-primary' : 'bg-border'
                                            }`}
                                    />
                                )}

                                {/* Icon Circle */}
                                <div
                                    className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isCompleted
                                            ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                            : 'bg-secondary/30 text-muted-foreground'
                                        } ${isCurrent ? 'ring-4 ring-primary/20' : ''}`}
                                >
                                    <Icon className="w-5 h-5" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-1">
                                    <h3 className={`font-semibold mb-1 ${isCompleted ? 'text-foreground' : 'text-muted-foreground'
                                        }`}>
                                        {stage.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">{stage.date}</p>
                                    {isCurrent && (
                                        <div className="mt-2 inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                                            Current Status
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
