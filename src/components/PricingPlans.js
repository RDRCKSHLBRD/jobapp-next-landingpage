export default function PricingPlans() {
  return (
    <section id="pricing" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">Find the Right Plan for Your Career Growth</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Free Plan</h3>
          <p className="text-2xl font-bold text-gray-800">$0</p>
          <ul className="text-left text-gray-600 my-4">
            <li>✅ Upload and analyze your resume.</li>
            <li>✅ Access basic job matching.</li>
            <li>✅ Skill gap analysis with recommendations.</li>
          </ul>
          <button className="bg-blue-500 text-white px-6 py-3 rounded">Get Started</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Premium Plan</h3>
          <p className="text-2xl font-bold text-gray-800">$49.99</p>
          <ul className="text-left text-gray-600 my-4">
            <li>✅ Everything in Free Plan.</li>
            <li>✅ Career coaching and workshops.</li>
            <li>✅ Exclusive networking events.</li>
          </ul>
          <button className="bg-blue-500 text-white px-6 py-3 rounded">Get Started</button>
        </div>
      </div>
    </section>
  );
}
