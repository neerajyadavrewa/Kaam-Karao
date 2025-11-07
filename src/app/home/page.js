import HeroSection from '../../components/HeroSection';
import ServiceCard from '../../components/ServiceCard';
import TestimonialCard from '../../components/TestimonialCard';

const services = [
  {
    title: 'Plumbing',
    description: 'Expert plumbers at your service.',
    details: 'Whether you have a leaky faucet, a clogged drain, or need a new installation, our experienced plumbers provide fast and reliable service to ensure your plumbing systems are running smoothly.',
    image: '/images/service1.jpg'
  },
  {
    title: 'Electrical',
    description: 'Qualified electricians for all your needs.',
    details: 'From fixing faulty wiring to installing new fixtures or upgrading your electrical system, our certified electricians are here to handle any electrical issue with professionalism and expertise.',
    image: '/images/service2.jpg'
  },
  {
    title: 'Carpentry',
    description: 'Skilled carpenters for various tasks.',
    details: 'Our skilled carpenters can assist with everything from custom furniture and cabinetry to home repairs and renovations. Get high-quality craftsmanship for all your carpentry needs.',
    image: '/images/service3.jpg'
  }
];

const testimonials = [
  {
    name: 'John Doe',
    testimonial: 'Kaam Karao made finding a reliable plumber so easy. The service was quick and the pricing was transparent. Highly recommend!',
    image: '/images/user1.jpg'
  },
  {
    name: 'Jane Smith',
    testimonial: 'I needed an electrician urgently, and Kaam Karao connected me with a professional within hours. Great service!',
    image: '/images/user2.jpg'
  }
];

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-cyan-800 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                details={service.details}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-cyan-800 mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                testimonial={testimonial.testimonial}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
