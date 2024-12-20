export default function PricingPlans() {
  return (
    <section id="pricing" className="p-16">
      <h2 className="text-3xl font-bold text-center mb-8">Find the Right Plan for Your Career Growth</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold mb-2">Free Plan</h3>
          <p className="text-2xl font-bold mb-4">$0</p>
          <ul className="text-left mb-4">
            <li>✅ Basic job matching</li>
            <li>✅ Skill gap analysis</li>
            <li>✅ 3 job applications</li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Get Started</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold mb-2">Standard Plan</h3>
          <p className="text-2xl font-bold mb-4">$9.99</p>
          <ul className="text-left mb-4">
            <li>✅ Unlimited job matching</li>
            <li>✅ Resume & cover letter optimization</li>
            <li>✅ Skill gap analysis</li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Get Started</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold mb-2">Premium Plan</h3>
          <p className="text-2xl font-bold mb-4">$24.99</p>
          <ul className="text-left mb-4">
            <li>✅ AI-driven job recommendations</li>
            <li>✅ Personalized career coaching</li>
            <li>✅ Priority support</li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Get Started</button>
        </div>
      </div>
    </section>
  );
}