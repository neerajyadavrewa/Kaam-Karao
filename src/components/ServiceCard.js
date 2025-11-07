
import Link from 'next/link';

export default function ServiceCard({ title, description, details, image }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-gray-600 mb-4">{details}</p>
        <Link href="/bookings" className="text-cyan-800 hover:underline">Book now</Link>
      </div>
    </div>
  );
}
