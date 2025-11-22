'use client';

import { Lock, Bell, Mail } from 'lucide-react';

export default function AccountSettings() {
    return (
        <div className="space-y-6">
            {/* Change Password */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Lock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-serif font-bold text-foreground mb-2">Change Password</h3>
                        <p className="text-sm text-muted-foreground">Update your password to keep your account secure</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Current Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">New Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Confirm New Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>
                    <button className="px-6 py-3 bg-foreground text-white rounded-full font-medium hover:bg-foreground/90 transition-all shadow-sm">
                        Update Password
                    </button>
                </div>
            </div>

            {/* Communication Preferences */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Bell className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-serif font-bold text-foreground mb-2">Communication Preferences</h3>
                        <p className="text-sm text-muted-foreground">Manage how we communicate with you</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <label className="flex items-center justify-between p-4 rounded-xl hover:bg-secondary/30 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-muted-foreground" />
                            <div>
                                <p className="font-medium text-foreground">Email Notifications</p>
                                <p className="text-sm text-muted-foreground">Receive updates about your orders</p>
                            </div>
                        </div>
                        <input type="checkbox" defaultChecked className="w-5 h-5 rounded accent-primary" />
                    </label>

                    <label className="flex items-center justify-between p-4 rounded-xl hover:bg-secondary/30 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-muted-foreground" />
                            <div>
                                <p className="font-medium text-foreground">Marketing Emails</p>
                                <p className="text-sm text-muted-foreground">Get exclusive offers and beauty tips</p>
                            </div>
                        </div>
                        <input type="checkbox" defaultChecked className="w-5 h-5 rounded accent-primary" />
                    </label>

                    <label className="flex items-center justify-between p-4 rounded-xl hover:bg-secondary/30 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                            <Bell className="w-5 h-5 text-muted-foreground" />
                            <div>
                                <p className="font-medium text-foreground">SMS Notifications</p>
                                <p className="text-sm text-muted-foreground">Receive text updates for deliveries</p>
                            </div>
                        </div>
                        <input type="checkbox" className="w-5 h-5 rounded accent-primary" />
                    </label>
                </div>
            </div>
        </div>
    );
}
