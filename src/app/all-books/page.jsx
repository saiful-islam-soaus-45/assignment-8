import React from "react";
import BookGrid from "./BookGrid";

const AllBooks = async () => {
    const res = await fetch(
        "https://assignment-8-nine-sigma.vercel.app/data.json",
        {
            cache: "no-store",
        }
    );

    const data = await res.json();

    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl px-6 py-10">

                <h1 className="text-3xl font-bold mb-6 text-gray-900">
                    All Books
                </h1>

                <BookGrid initialBooks={data} />

            </div>
        </div>
    );
};

export default AllBooks;