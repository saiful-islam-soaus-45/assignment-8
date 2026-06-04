import React from 'react';
import TopBookCard from './TopBookCard';

const TopBooks = async () => {

    const res = await fetch('https://assignment-8-nine-sigma.vercel.app/data.json');
    const data = await res.json();
    const topBooks = data.slice(0, 3);
    console.log(topBooks);

    return (
        <div>
            <h1 className='max-w-7xl mx-auto my-10 px-6'>Top Books</h1>
            <div>
                {topBooks.map (book => <TopBookCard key={book.id} book={book}></TopBookCard>)}
            </div>
        </div>
    );
};

export default TopBooks;