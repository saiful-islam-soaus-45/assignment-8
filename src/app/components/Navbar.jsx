"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b px-2">
      <nav className="max-w-7xl mx-auto py-3 grid grid-cols-3 items-center">
        
        {/* Left */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="logo"
              width={30}
              height={30}
              className="object-cover"
              priority
            />
            <h3 className="font-black text-lg bg-linear-to-r from-red-500 to-red-500 bg-clip-text text-transparent">
              Online Book Borrowing Platform
            </h3>
          </Link>
        </div>

        {/* Center */}
        <ul className="flex justify-center items-center gap-6 text-sm">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-books">All Books</Link>
          </li>
          <li>
            <Link href="/profile">My Profile</Link>
          </li>
        </ul>

        {/* Right */}
        <div className="flex justify-end">
          <ul className="flex items-center gap-4 text-sm">
            <li>
              <Link href="/signup">SignUp</Link>
            </li>
            <li>
              <Link href="/signin">SignIn</Link>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;