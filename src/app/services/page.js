import ServiceCard from '../../components/ServiceCard';

const services = [
  {
    title: 'Plumbing',
    description: 'Expert plumbers at your service.',
    details: 'Whether you have a leaky faucet, a clogged drain, or need a new installation, our experienced plumbers provide fast and reliable service to ensure your plumbing systems are running smoothly.',
    image: 'https://content.jdmagicbox.com/comp/gulbarga/c7/9999p8472.8472.181222101237.t2c7/catalogue/deepak-plumber-gulbarga-d4zce2fx4r.jpg'
  },
  {
    title: 'Electrical',
    description: 'Qualified electricians for all your needs.',
    details: 'From fixing faulty wiring to installing new fixtures or upgrading your electrical system, our certified electricians are here to handle any electrical issue with professionalism and expertise.',
    image: 'https://content3.jdmagicbox.com/comp/bhagalpur/f9/9999px641.x641.160809115304.u5f9/catalogue/rohit-electricals-bhagalpur-ho-bhagalpur-electrical-shops-ypauhuz.jpg'
  },
  {
    title: 'Carpentry',
    description: 'Skilled carpenters for various tasks.',
    details: 'Our skilled carpenters can assist with everything from custom furniture and cabinetry to home repairs and renovations. Get high-quality craftsmanship for all your carpentry needs.',
    image: 'https://media.istockphoto.com/id/1218972330/photo/wide-angle-view-of-carpentry-workshop-with-students-studying-for-apprenticeship-at-college.jpg?s=612x612&w=0&k=20&c=FqYG1esHiz8KD9_dwX2b0lgFd20RbLUR6dvcvw34lyM='
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold text-center text-cyan-800 mb-8">Our Services</h1>
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
    </div>
  );
}
