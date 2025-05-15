"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 shadow-sm border-b">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold text-primary">
          DevTrove
        </Link>
        <div className="space-x-4">
          <Link href="/explore" className="hover:underline">
            Explore
          </Link>
          <Link href="#" className="hover:underline">
            Bookmarks
          </Link>
          <Link href="#" className="hover:underline">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
