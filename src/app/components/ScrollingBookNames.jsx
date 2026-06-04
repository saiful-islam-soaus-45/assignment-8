import React from 'react';
import Marquee from 'react-fast-marquee';

const ScrollingBookNames = () => {
    return (
        <div className="max-w-7xl mx-auto bg-linear-to-r from-red-500 to-red-600 text-white py-4 overflow-hidden shadow-md mt-5 rounded-md">
            <Marquee speed={100} gradient={false}>

                <span className="mx-8 font-semibold tracking-wide">
                     New Arrivals: JavaScript Essentials
                </span>

                <span className="mx-8 font-semibold tracking-wide">
                     Special Discount on Memberships
                </span>

            </Marquee>
        </div>
    );
};

export default ScrollingBookNames;