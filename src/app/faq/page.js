// src/app/faq/page.js
export default function FAQPage() {
    return (
      <div className="bg-gray-50 min-h-screen py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-semibold text-center text-cyan-800 mb-8">Frequently Asked Questions</h1>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">What services does Kaam Karao offer?</h2>
            <p className="text-gray-700 mb-4">
              Kaam Karao connects you with skilled professionals for a variety of household tasks including plumbing, electrical work, carpentry, and more.
            </p>
  
            <h2 className="text-2xl font-semibold mb-4">How do I book a service?</h2>
            <p className="text-gray-700 mb-4">
              You can book a service directly through our app by selecting the type of service you need, choosing a preferred professional, and scheduling a time that works for you.
            </p>
  
            <h2 className="text-2xl font-semibold mb-4">Are the professionals vetted?</h2>
            <p className="text-gray-700 mb-4">
              Yes, all professionals listed on Kaam Karao are thoroughly vetted to ensure they meet our quality and reliability standards.
            </p>
  
            <h2 className="text-2xl font-semibold mb-4">What if I’m not satisfied with the service?</h2>
            <p className="text-gray-700 mb-4">
              We strive for 100% customer satisfaction. If you’re not satisfied with the service, please contact our support team, and we’ll work to resolve the issue.
            </p>
  
            <h2 className="text-2xl font-semibold mb-4">How can I contact customer support?</h2>
            <p className="text-gray-700">
              You can contact our customer support team via the contact form on our website or by calling the number provided in the app.
            </p>
          </div>
        </div>
      </div>
    );
  }
  