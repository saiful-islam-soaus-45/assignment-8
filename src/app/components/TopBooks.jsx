import React from 'react';
import TopBookCard from './TopBookCard';

const TopBooks = async () => {

    const res = await fetch('https://assignment-8-nine-sigma.vercel.app/data.json');
    const data = await res.json();
    const topBooks = data.slice(0, 4);
    console.log(topBooks);

    return (
        <div className='max-w-7xl mx-auto my-10 px-5 mt-30'>
            <div className="w-full h-1 bg-linear-to-r from-red-500 to-pink-500 rounded-full mb-3"></div>

            <h1 className='text-3xl font-bold mb-6 text-gray-900'>Top Books</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center'>
                {topBooks.map(book => (
                    <TopBookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default TopBooks;