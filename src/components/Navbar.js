// src/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className=" bg-cyan-800 text-white py-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-4xl font-bold">Kaam Karao</Link>
        <div>
          <Link href="/" className="mr-4 hover:underline">Home</Link>
          <Link href="/services" className="mr-4 hover:underline">Services</Link>
          <Link href="/about" className="mr-4 hover:underline">About</Link>
         
          <Link href="/faq" className="mr-4 hover:underline">FAQ</Link>
          <Link href="/bookings" className="mr-4 hover:underline">Bookings</Link>
          <Link href="/contact" className=" mr-4 hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
