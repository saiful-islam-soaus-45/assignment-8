"use client";

import React, { useMemo, useState } from "react";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Menu } from "lucide-react";
import 'animate.css'; 

const BookGrid = ({ initialBooks }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const categories = useMemo(() => {
        const unique = [...new Set(initialBooks.map((b) => b.category).filter(Boolean))];
        return ["All", ...unique];
    }, [initialBooks]);

    const filteredBooks = useMemo(() => {
        return initialBooks.filter((book) => {
            const matchSearch = book.title
                .toLowerCase()
                .includes(searchQuery.toLowerCase());

            const matchCategory =
                selectedCategory === "All" ||
                book.category === selectedCategory;

            return matchSearch && matchCategory;
        });
    }, [initialBooks, searchQuery, selectedCategory]);

    return (
        <div className="w-full">

            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            <div className="mt-6">
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="bg-red-500 text-white px-4 py-2 rounded-xl cursor-pointer"
                >
                     <span className="flex items-center gap-2"><Menu className="w-4.5" /> Categories</span>
                </button>
            </div>

            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 bg-black/40 z-40"
                />
            )}

            <div
                className={`fixed top-0 left-0 h-full w-72 bg-white z-50 p-6 shadow-xl transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <h2 className="text-xl font-bold mb-4">Categories</h2>

                <div className="flex flex-col gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setSelectedCategory(cat);
                                setSidebarOpen(false);
                            }}
                            className={`px-4 py-2 rounded-xl text-left cursor-pointer transition-all ${selectedCategory === cat
                                ? "bg-red-500 text-white shadow-md shadow-red-100"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* GRID WRAPPER */}
            <div className="mt-10 flex justify-center">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center md:place-items-stretch">

                    {filteredBooks.map((book) => (
                        <Card
                            key={`${selectedCategory}-${book.id}`}
                            className="animate__animated animate__fadeInUp w-full max-w-70 p-4 border border-gray-100 rounded-2xl shadow-sm bg-white gap-3 overflow-visible"
                            style={{ animationDuration: '0.9s' }} 
                        >
                            <div className="flex flex-col gap-4">
                                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-50">
                                    <Image
                                        src={book.image_url || "/placeholder.jpg"}
                                        alt={book.title}
                                        fill
                                        className="object-cover"
                                    />
                                    {book.category && (
                                        <Chip
                                            size="sm"
                                            variant="flat"
                                            className="absolute top-2 right-2 bg-linear-to-r from-red-500 to-red-500 text-white backdrop-blur-md font-medium text-xs px-2"
                                        >
                                            {book.category}
                                        </Chip>
                                    )}
                                </div>

                                <h3 className="font-bold text-gray-900 text-sm md:text-base line-clamp-2" title={book.title}>
                                    {book.title}
                                </h3>
                            </div>

                            <div className="mt-auto">
                                <Link href={`/all-books/${book.id}`} className="w-full block">
                                    <Button className="w-full bg-red-500 text-white font-semibold rounded-xl cursor-pointer">
                                        Details
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    ))}

                </div>
            </div>

            {filteredBooks.length === 0 && (
                <div className="text-center py-20 text-gray-400">
                    No books found
                </div>
            )}

        </div>
    );
};

export default BookGrid;