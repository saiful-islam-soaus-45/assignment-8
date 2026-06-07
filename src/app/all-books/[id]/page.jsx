import React from 'react';
import { Button } from '@heroui/react';
import { BookOpen, Layers, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const BookDetails = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('https://assignment-8-nine-sigma.vercel.app/data.json', {
        cache: 'no-store'
    });
    const books = await res.json();

    const book = books.find((b) => b.id === parseInt(id) || b.id === id);

    

    return (
        <div className="min-h-screen bg-slate-50/50 py-16 px-4 md:px-8 lg:px-12 mt-10">
            <div className="max-w-6xl mx-auto">

                

                <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">

                    <div className="lg:col-span-5 rounded-3xl bg-linear-to-br from-slate-900 to-slate-800 p-8 md:p-12 flex items-center justify-center relative min-h-100 lg:min-h-full">

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"></div>


                        <div className="relative w-full max-w-70 aspect-ratio-3/4 rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-white/10 group">
                            <Image
                                src={book.image_url || book.image || "/placeholder.jpg"}
                                alt={book.title}
                                width={280}
                                height={400}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between bg-white">
                        <div>

                            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3 leading-tight">
                                {book.title}
                            </h1>
                            <p className="text-lg text-slate-500 font-medium flex items-center gap-2 mb-8">
                                <span className="text-slate-800 font-bold">By {book.author}</span>
                            </p>

                            <div className="mb-8">
                                <p className="text-slate-600 leading-relaxed text-base bg-slate-50/60 p-5 rounded-2xl border border-slate-100/80">
                                    {book.description || "Dive into this wonderful masterpiece. A detailed synopsis for this book is currently unavailable, but its gripping narrative promises to hold your attention from the very first page."}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-6 mb-8">
                                <div className="flex items-center gap-3 p-3 rounded-xl  transition-colors">
                                    <div className="p-2 bg-red-50 text-red-500 rounded-xl"><Layers className="w-4 h-4 text-black" /></div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-semibold">Stock Available</p>
                                        <p className="text-sm font-extrabold text-slate-800">{book.available_quantity} Copies</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-xl  transition-colors">
                                    <div className="p-2 bg-blue-50 text-blue-500 rounded-xl"><BookOpen className="w-5 h-5 text-black" /></div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-semibold">Category</p>
                                        <p className="text-sm font-extrabold text-slate-800">{book.category || 'N/A'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-slate-100">
                            <Button
                                disabled={book.available_quantity <= 0}
                                className="w-full sm:flex-1 bg-red-500 hover:bg-red-600 text-white font-bold h-14 rounded-2xl shadow-lg shadow-red-500/20 transition-all text-base"
                            >
                                Borrow This Book
                            </Button>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;