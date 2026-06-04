import React from 'react';

const TopBooks = async () => {

    const res = await fetch('http://localhost:3000/api/books');
    const data = await res.json();

    return (
        <div>
            
        </div>
    );
};

export default TopBooks;