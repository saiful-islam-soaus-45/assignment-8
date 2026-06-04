import React from 'react';
import UserReviewCard from './UserReviewCard';

const UserReview = async () => {
    const res = await fetch('http://localhost:3000/review.json');
    const reviews = await res.json();
    
    return (
        <div className="max-w-7xl mx-auto my-16 px-5">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
                What Our Students Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 mt-10">
                {reviews.map((review) => (
                    <UserReviewCard key={review.id || review.name} review={review} />
                ))}
            </div>
        </div>
    );
};

export default UserReview;