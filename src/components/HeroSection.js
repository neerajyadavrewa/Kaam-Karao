
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-cyan-800 text-white">
      <div className="absolute inset-0">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44RUno5BJktoEc1t-VPrmqfpQdwmUJplHgg&s" alt="Hero Image" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative container mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Skilled Workers Effortlessly</h1>
        <p className="text-xl md:text-2xl mb-8">Book trusted professionals for all your household needs with ease and convenience.</p>
        <Link href="/services" className="bg-yellow-400 text-cyan-800 py-2 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-300">Explore Services</Link>
      </div>
    </section>
  );
}
