import React from 'react';
import UserReviewCard from './UserReviewCard';

const UserReview = async () => {
    const res = await fetch('https://assignment-8-nine-sigma.vercel.app/user.json', {
        cache: 'no-store'
    });
    const reviews = await res.json();

    return (

        <div className=" max-w-7xl mx-auto py-20 px-6 my-10  mt-30">

            <div className="w-full h-1 bg-linear-to-r from-red-500 to-pink-500 rounded-full mb-3"></div>

            <h1 className="text-3xl font-bold mb-6 text-gray-900">User Reviews</h1>
            <div className=" flex flex-col lg:flex-row gap-8 items-stretch w-full ">

                {reviews.map((review) => (
                    <UserReviewCard key={review.id} review={review} />
                ))}
            </div>

        </div>
    );
};

export default UserReview;