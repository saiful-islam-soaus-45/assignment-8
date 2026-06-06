"use client";
import React from 'react';
import Link from 'next/link';
import { Button, Input } from "@heroui/react";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-600 pt-16 pb-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
                
                {/* Section 1: Brand & Description */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold text-gray-900 tracking-wide">
                        Book<span className="text-red-500">Borrow</span>
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Borrow your favorite books easily and spread the joy of reading. A modern book-sharing platform for everyone.
                    </p>
                    
                    {/* Social Media Links */}
                    <div className="flex gap-3 mt-2">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors duration-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors duration-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors duration-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                    </div>
                </div>

                {/* Section 2: Quick Links */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Quick Links</h3>
                    <ul className="flex flex-col gap-2.5 text-sm">
                        <li><Link href="/" className="hover:text-red-500 transition-colors">Home</Link></li>
                        <li><Link href="/all-books" className="hover:text-red-500 transition-colors">All Books</Link></li>
                        <li><Link href="/signin" className="hover:text-red-500 transition-colors">My Profile</Link></li>
                        <li><Link href="/about" className="hover:text-red-500 transition-colors">About Us</Link></li>
                    </ul>
                </div>

                {/* Section 3: Contact Us */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Contact Us</h3>
                    <ul className="flex flex-col gap-3 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-0.5">📍</span>
                            <span>Mirpur, Dhaka, Bangladesh</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-red-500">📞</span>
                            <span>+880 1234 567890</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-red-500">✉️</span>
                            <span>support@bookborrow.com</span>
                        </li>
                    </ul>
                </div>

                {/* Section 4: Newsletter Subscription */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Newsletter</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        Subscribe to our newsletter to receive updates on new arrivals and exclusive offers.
                    </p>
                    <div className="flex flex-col gap-2 w-full mt-1">
                        
                        <Button 
                            className="bg-red-500 hover:bg-red-600 text-white font-medium w-full shadow-lg shadow-red-500/20"
                            size="sm"
                        >
                            Subscribe
                        </Button>
                    </div>
                </div>

            </div>

            {/* Custom Tailwind CSS Divider */}
            <div className="my-10 bg-gray-200 h-[1px] max-w-7xl mx-auto opacity-70" />

            {/* Copyright Section */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
                <p>© {new Date().getFullYear()} BookBorrow. All rights reserved.</p>
                <div className="flex gap-4">
                    <Link href="/terms" className="hover:underline">Terms of Service</Link>
                    <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;