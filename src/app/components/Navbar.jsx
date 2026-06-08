"use client";

import { useState } from "react";
import authClient from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logged out successfully!", {
            duration: 3000,
            style: {
              border: "1px solid #E2E8F0",
              padding: "12px",
              color: "#1F2937",
            },
          });

          router.push("/signin");
          router.refresh();
          setIsOpen(false);
        },

        onError: (ctx) => {
          toast.error(ctx.error.message || "Failed to sign out");
        },
      },
    });
  };

  return (
    <div className="relative">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ─── LEFT: LOGO ─── */}
        <div className="flex items-center gap-2 z-50">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={30}
              height={30}
              className="object-cover"
              priority
            />
            <h3 className="font-black text-base sm:text-lg bg-linear-to-r from-red-500 to-red-500 bg-clip-text text-transparent truncate max-w-45 xs:max-w-none">
              BookBorrow
            </h3>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex justify-center items-center gap-6 text-sm font-medium text-gray-600">
          <li>
            <Link href="/" className="hover:text-red-500 transition-colors">
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/all-books"
              className="hover:text-red-500 transition-colors"
            >
              All Books
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
              className="hover:text-red-500 transition-colors"
            >
              My Profile
            </Link>
          </li>
        </ul>

        <div className="hidden lg:flex justify-end items-center gap-4">
          {!user ? (
            <ul className="flex items-center gap-4 text-sm font-medium">
              <li>
                <Link
                  href="/signup"
                  className="hover:text-red-500 transition-colors"
                >
                  SignUp
                </Link>
              </li>

              <li>
                <Link
                  href="/signin"
                  className="hover:text-red-500 transition-colors"
                >
                  SignIn
                </Link>
              </li>
            </ul>
          ) : (
            <div className="flex items-center gap-3">
              <Avatar size="sm" className="w-8 h-8">
                <Avatar.Image
                  alt={user?.name || "User"}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>
                  {user?.name?.charAt(0) || "U"}
                </Avatar.Fallback>
              </Avatar>

              <Button
                onClick={handleSignOut}
                color="danger"
                size="sm"
                className="font-medium"
              >
                Sign Out
              </Button>
            </div>
          )}
        </div>

        <div className="flex lg:hidden items-center gap-3">
          {user && (
            <Avatar size="sm" className="w-8 h-8">
              <Avatar.Image
                alt={user?.name || "User"}
                src={user?.image}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>
                {user?.name?.charAt(0) || "U"}
              </Avatar.Fallback>
            </Avatar>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-gray-600 hover:text-red-500 transition-colors focus:outline-none"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-5 animate-in fade-in slide-in-from-top-5 duration-200 z-50">
          <ul className="flex flex-col gap-4 text-base font-semibold text-gray-700">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block py-1 hover:text-red-500"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/all-books"
                onClick={() => setIsOpen(false)}
                className="block py-1 hover:text-red-500"
              >
                All Books
              </Link>
            </li>

            <li>
              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className="block py-1 hover:text-red-500"
              >
                My Profile
              </Link>
            </li>
          </ul>

          <div className="border-t border-gray-100 pt-4 mt-2">
            {!user ? (
              <div className="flex flex-col gap-3">
                <Link
                  href="/signup"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2.5 text-sm font-bold text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50"
                >
                  SignUp
                </Link>

                <Link
                  href="/signin"
                  onClick={() => setIsOpen(false)}
                  className="w-full"
                >
                  <Button className="w-full bg-red-500 text-white font-bold h-11 rounded-xl">
                    SignIn
                  </Button>
                </Link>
              </div>
            ) : (
              <Button
                onClick={handleSignOut}
                color="danger"
                className="w-full font-bold h-11 rounded-xl"
              >
                Sign Out
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;