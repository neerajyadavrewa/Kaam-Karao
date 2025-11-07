// src/app/contact/page.js
export default function ContactPage() {
    return (
      <div className="bg-gray-50 min-h-screen py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-semibold text-center text-cyan-800 mb-8">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-4">
            Have questions or need assistance? Reach out to us through the form below or contact us directly.
          </p>
          <form className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
              <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
              <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
              <textarea id="message" className="w-full p-3 border border-gray-300 rounded" rows="4" required></textarea>
            </div>
            <button type="submit" className="bg-cyan-800 text-white px-4 py-2 rounded">Send Message</button>
          </form>
        </div>
      </div>
    );
  }
  