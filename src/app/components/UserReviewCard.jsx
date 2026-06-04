




import React from 'react';

const UserReviewCard = ({ review }) => {
    const { image, name, comment, designation } = review;

    return (
        // mt-12 দেওয়া হয়েছে যেন ছবিগুলো উপরে ভেসে থাকার জায়গা পায় এবং কার্ডগুলো flex-1 দিয়ে সমান সাইজের হবে
        <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-xl mt-12 flex-1 flex flex-col justify-between">
            
            {/* গোল ছবি - অর্ধেক বর্ডারের উপরে ভাসানো */}
            <div className="absolute top-0 left-6 transform -translate-y-1/2">
                <img
                    src={image}
                    alt={name}
                    className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
                />
            </div>

            {/* ডানদিকের ওপরের বড় সাইয়ান কালারের কোটেশন মার্ক */}
            <div className="absolute top-2 right-6 text-[#00a8cc] text-7xl font-serif leading-none select-none">
                ❞
            </div>

            {/* কার্ডের ভেতরের কন্টেন্ট */}
            <div className="mt-10 flex-grow">
                {/* রিভিউ টেক্সট */}
                <p className="text-gray-700 text-lg font-medium leading-relaxed">
                    {review.description}
                </p>
            </div>
            
            {/* নাম এবং ইনস্টিটিউট (কার্ডের একদম নিচে পুশ করার জন্য mt-8) */}
            <div className="mt-8">
                <h3 className="text-xl font-extrabold text-slate-800">{name}</h3>
                <span className="inline-block mt-2 px-4 py-1 bg-[#d2f6fc] text-[#006680] text-xs font-bold rounded-full uppercase tracking-wider">
                    {review.university}
                </span>
            </div>

        </div>
    );
};

export default UserReviewCard;