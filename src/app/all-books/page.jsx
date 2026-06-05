import { Button, Card, Chip } from '@heroui/react';
import { Layers } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link'; 

const AllBooks = async () => {
    const res = await fetch('https://assignment-8-nine-sigma.vercel.app/data.json', {
        cache: 'no-store'
    });
    const data = await res.json();

    return (

        <div className="max-w-7xl mx-auto py-20 px-6 my-10 mt-10">
            <div className=" h-1 bg-linear-to-r from-red-500 to-pink-500 rounded-full mb-3"></div>
            <h1 className="text-3xl font-bold mb-6 text-gray-900">All Books</h1>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8 p-6  auto-rows-fr">


                {data.map((book) => (
                    <Card
                        key={book.id}

                        className="w-full   p-4 border border-gray-100 rounded-2xl shadow-sm bg-white  gap-3 overflow-visible"
                    >

                        <div className="flex flex-col gap-3 grow">


                            <div className="relative w-full  aspect-square rounded-xl overflow-hidden bg-gray-50 shrink-0">
                                <Image
                                    src={book.image_url || book.image}
                                    alt={book.title}
                                    fill
                                    sizes="(max-width: 280px) 100vw, 280px"
                                    className="object-cover"
                                    priority={book.id <= 4}
                                />

                                {book.category && (
                                    <Chip
                                        size="sm"
                                        variant="flat"
                                        className="absolute top-2 right-2 bg-red-500 text-white backdrop-blur-md font-medium text-xs px-2"
                                    >
                                        {book.category}
                                    </Chip>
                                )}
                            </div>


                            <div className="px-1 flex flex-col gap-0.5 h-12 justify-center">
                                <h3 className="font-bold text-gray-900 text-base line-clamp-1" title={book.title}>
                                    {book.title}
                                </h3>
                                <p className="text-xs text-gray-500 line-clamp-1">
                                    By {book.author}
                                </p>
                            </div>


                        </div>


                        <div className="mt-auto pt-2 flex flex-col gap-3">

                            <div className="flex items-center gap-4 text-sm text-gray-600 px-1 font-medium">
                                <div className="flex items-center gap-1.5" title="Available Stock">
                                    <Layers className="w-4 h-4 text-black" />
                                    <span>Quantity: {book.available_quantity}</span>
                                </div>
                            </div>

                            <Link href={`/all-books/${book.id}`}>
                            <Button
                                variant="bordered"
                                className="w-full bg-red-500 border-gray-200 text-white font-medium hover:bg-red-600 transition-colors py-2 rounded-xl text-sm"
                            >
                                View Details
                            </Button></Link>
                        </div>

                    </Card>
                ))}
            </div>
        </div>
    );
};

export default AllBooks;