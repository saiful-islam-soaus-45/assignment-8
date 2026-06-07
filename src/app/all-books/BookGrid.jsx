"use client";

import React, { useState } from 'react';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';

const BookGrid = ({ initialBooks }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredBooks = initialBooks.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            {filteredBooks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 auto-rows-fr">
                    {filteredBooks.map((book) => (
                        <Card
                            key={book.id}
                            className="w-full p-4 border border-gray-100 rounded-2xl shadow-xs bg-white flex flex-col justify-between overflow-visible"
                        >
                            <div className="flex flex-col gap-4">
                                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-50 shrink-0">
                                    <Image
                                        src={book.image_url || book.image || "/placeholder.jpg"}
                                        alt={book.title}
                                        fill
                                        sizes="(max-width: 280px) 100vw, 280px"
                                        className="object-cover"
                                        priority={book.id <= 4}
                                    />
                                </div>

                                <div className="px-1 min-h-10 flex items-center">
                                    <h3 className="font-bold text-gray-950 text-base line-clamp-2" title={book.title}>
                                        {book.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="pt-4 mt-auto">
                                <Link href={`/all-books/${book.id}`} className="w-full block">
                                    <Button
                                        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors shadow-xs"
                                    >
                                        Details
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <p className="text-lg font-medium text-gray-400">No books found matching your search.</p>
                </div>
            )}
        </>
    );
};

export default BookGrid;