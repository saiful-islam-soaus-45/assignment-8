import Image from 'next/image';
import React from 'react';

const UserReviewCard = ({ review }) => {

    const { image, name, description, university } = review;

    return (

        <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-xl mt-12 flex-1 flex flex-col justify-between">


            <div className="absolute top-0 left-6 transform -translate-y-1/2 w-24 h-24">
                <Image
                    src={image}
                    alt={name}
                    width={96}
                    height={96}
                    className="rounded-full border-4 border-blue-300 object-cover shadow-md"
                />
            </div>

            <div className="absolute top-2 right-6 text-[#00a8cc] text-7xl font-serif leading-none select-none">

            </div>


            <div className="mt-10 grow">
                <p className="text-gray-700 text-lg font-medium leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-extrabold text-slate-800">{name}</h3>
                <span className="inline-block mt-2 px-4 py-1 bg-[#d2f6fc] text-[#006680] text-xs font-bold rounded-full uppercase tracking-wider">
                    {university}
                </span>
            </div>

        </div>
    );
};

export default UserReviewCard;