"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-4 shadow-xs border-b">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-xl text-primary font-bold">
          DevTrove
        </Link>
        <div className="space-x-6">
          <Link
            href="/explore"
            className="hover:font-semibold hover:text-orange-600"
          >
            Explore
          </Link>
          <Link href="#" className="hover:font-semibold hover:text-orange-600">
            Bookmarks
          </Link>
          <Link href="#" className="hover:font-semibold hover:text-orange-600">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
