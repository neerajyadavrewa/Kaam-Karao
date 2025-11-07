
import HeroSection from "../components/HeroSection"

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <HeroSection />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-cyan-800 mb-8">Why Choose Kaam Karao?</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            At Kaam Karao, we bridge the gap between you and reliable skilled workers. Our platform ensures that you find the right professionals for your needs, with transparent pricing and quality assurance.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
              <h3 className="text-2xl font-semibold text-cyan-800 mb-4">Efficient Booking</h3>
              <p className="text-gray-600">
                Our user-friendly app allows you to book skilled workers quickly and easily, saving you time and hassle.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
              <h3 className="text-2xl font-semibold text-cyan-800 mb-4">Verified Professionals</h3>
              <p className="text-gray-600">
                All our workers are vetted for quality and reliability, ensuring that you receive top-notch service every time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
