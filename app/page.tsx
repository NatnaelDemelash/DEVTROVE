import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <p>Home Page</p>
      <Button>Click Me</Button>

      <Link href={"/explore"} className="mt-10">
        Explore Now
      </Link>
    </div>
  );
}
