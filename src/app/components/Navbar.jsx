"use client";

import authClient from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const router = useRouter()

const handleSignOut = async () => {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        toast.success("Logged out successfully!", { // 👈 এই টোস্টটি যোগ করুন
          duration: 3000,
          style: {
            border: '1px solid #E2E8F0',
            padding: '12px',
            color: '#1F2937',
          },
        });   
        router.push("/signin");    
        router.refresh();   
      },
      onError: (ctx) => {
        toast.error(ctx.error.message || "Failed to sign out"); // 👈 কোনো এরর হলে তার জন্য
      }
    }
  });
};

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

        <div className="flex justify-end gap-2">
          {!user && <ul className="flex items-center gap-4 text-sm">
            <li>
              <Link href="/signup">SignUp</Link>
            </li>
            <li>
              <Link href="/signin">SignIn</Link>
            </li>
          </ul>}
          {
            user && <div className="flex items-center gap-2">
              <Avatar>
                <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSignOut} className="mt-1.8" size="sm" variant="danger">Sign Out</Button>

            </div>
          }


        </div>

      </nav>
    </div>
  );
};

export default Navbar;