"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold hover:text-gray-400 transition" translate="no">
          LESPURNA
        </Link>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul
          className={`md:flex gap-6 ${
            isOpen ? "block" : "hidden"
          } md:block text-lg`}
        >
          <li><Link href="musica">MUSICA</Link></li>
          <li><Link href="concerts">CONCERTS</Link></li>
          <li><Link href="lespurna">LESPURNA</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
