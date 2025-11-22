'use client';

import { User, Edit } from 'lucide-react';

export default function ProfileHeader() {
    return (
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
            <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Avatar */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <span className="text-3xl font-serif font-bold text-primary">JD</span>
                </div>

                {/* User Info */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Jane Doe</h1>
                    <p className="text-muted-foreground mb-4">jane.doe@example.com</p>
                    <p className="text-sm text-muted-foreground">Member since January 2024</p>
                </div>

                {/* Edit Button */}
                <button className="px-6 py-3 bg-secondary/50 hover:bg-secondary text-foreground rounded-full font-medium transition-all flex items-center gap-2 shadow-sm">
                    <Edit className="w-4 h-4" />
                    Edit Profile
                </button>
            </div>
        </div>
    );
}
