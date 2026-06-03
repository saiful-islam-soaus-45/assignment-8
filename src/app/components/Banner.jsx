import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://plus.unsplash.com/premium_photo-1681487787308-52f293cd3bce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[70vh] max-w-7xl mx-auto bg-cover bg-no-repeat bg-center flex items-center rounded-lg ">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg  flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            <span className="">
              Find Your Next Read
            </span>
          </h1>

          <div className="flex gap-4">
            <Link href="/all-books">
              <Button className="bg-linear-to-r from-red-500  to-red-500" size="lg">
                Browse Now
              </Button>
            </Link>

            <Link href="/pricing">
              <Button variant="outline" className="text-white" size="lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;