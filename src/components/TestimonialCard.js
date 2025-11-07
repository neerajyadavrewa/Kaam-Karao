
export default function TestimonialCard({ name, testimonial, image }) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-4">
          <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
          <h3 className="text-xl font-semibold">{name}</h3>
        </div>
        <p className="text-gray-700">{testimonial}</p>
      </div>
    );
  }
  