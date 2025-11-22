'use client';

import { Package, ChevronRight } from 'lucide-react';

const MOCK_ORDERS = [
    { id: '#ORD-2025-0123', date: 'Jan 15, 2025', total: 132.00, status: 'Shipped', items: 3 },
    { id: '#ORD-2025-0098', date: 'Dec 28, 2024', total: 68.00, status: 'Delivered', items: 1 },
    { id: '#ORD-2024-0876', date: 'Dec 10, 2024', total: 245.00, status: 'Delivered', items: 5 },
];

export default function OrderHistory() {
    return (
        <div className="space-y-4">
            {MOCK_ORDERS.map((order) => (
                <div key={order.id} className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                        {/* Icon */}
                        <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Package className="w-6 h-6 text-primary" />
                        </div>

                        {/* Order Info */}
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                                <h3 className="font-semibold text-foreground">{order.id}</h3>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${order.status === 'Delivered'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-blue-100 text-blue-700'
                                    }`}>
                                    {order.status}
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground">{order.date} • {order.items} items</p>
                        </div>

                        {/* Total & Action */}
                        <div className="text-right flex items-center gap-4">
                            <div>
                                <p className="text-sm text-muted-foreground mb-1">Total</p>
                                <p className="text-lg font-bold text-foreground">${order.total.toFixed(2)}</p>
                            </div>
                            <button className="p-2 hover:bg-secondary rounded-full transition-colors">
                                <ChevronRight className="w-5 h-5 text-muted-foreground" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
