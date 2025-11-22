'use client';

import { MapPin, Edit, Trash2, Plus } from 'lucide-react';

const MOCK_ADDRESSES = [
    {
        id: '1',
        label: 'Home',
        name: 'Jane Doe',
        street: '123 Beauty Lane',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90001',
        isDefault: true,
    },
    {
        id: '2',
        label: 'Work',
        name: 'Jane Doe',
        street: '456 Office Blvd',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90002',
        isDefault: false,
    },
];

export default function AddressBook() {
    return (
        <div className="space-y-4">
            {/* Add New Address */}
            <button className="w-full p-6 border-2 border-dashed border-border rounded-2xl hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-2 text-muted-foreground hover:text-primary">
                <Plus className="w-5 h-5" />
                <span className="font-medium">Add New Address</span>
            </button>

            {/* Address Cards */}
            {MOCK_ADDRESSES.map((address) => (
                <div key={address.id} className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                    <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-5 h-5 text-primary" />
                        </div>

                        {/* Address Info */}
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-semibold text-foreground">{address.label}</h3>
                                {address.isDefault && (
                                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                                        Default
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-muted-foreground">{address.name}</p>
                            <p className="text-sm text-muted-foreground">{address.street}</p>
                            <p className="text-sm text-muted-foreground">
                                {address.city}, {address.state} {address.zip}
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                            <button className="p-2 hover:bg-secondary rounded-full transition-colors" title="Edit">
                                <Edit className="w-4 h-4 text-muted-foreground" />
                            </button>
                            <button className="p-2 hover:bg-red-50 rounded-full transition-colors" title="Delete">
                                <Trash2 className="w-4 h-4 text-muted-foreground hover:text-red-500" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
