import React from "react";
import Link from "next/dist/client/link";

export default function Footer() {
  return (
    <footer className="py-4 container border-t mt-20">
      <p className="text-sm text-gray-400 text-center">
        Copyright ©
        <Link href="https://www.linkedin.com/in/laurence-mendoza-89a6a2188/" className="ml-1 text-primary">
          Laurence Mendoza
        </Link>
      </p>
    </footer>
  );
}
