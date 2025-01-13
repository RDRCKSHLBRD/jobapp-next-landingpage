export default function PricingPlans() {
  return (
    <section id="pricing" className="py-16 bg-white text-center">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Find the Right Plan for Your Career Growth</h2>
        <p className="text-gray-600 mb-8">
          Start for free, upgrade as you go, and unlock premium <br />
          tools to land your dream job faster.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Free Plan */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 flex flex-col justify-between"
            style={{ width: "353px", height: "762px", borderRadius: "20px" }}
          >
            <div>
              <h3 className="text-left text-xl font-bold text-gray-800 mb-2">Free Plan</h3>
              <p className="text-left text-sm text-gray-500 mb-4">Basic</p>
              <p className="text-left text-4xl font-extrabold text-blue-600 mb-2">$0</p>
              <p className="text-left text-sm text-gray-500 mb-6">Per month, billed annually</p>
              <ul className="text-left text-gray-700 space-y-4">
                <li className="flex items-start gap-2">
                  <img src="/images/icons/blueBullet.svg" alt="" className="w-4 h-4 mt-1" />
                  <span className="text-sm">Upload and analyze your resume.</span>
                </li>
                <li className="flex items-start gap-2">
                  <img src="/images/icons/blueBullet.svg" alt="" className="w-4 h-4 mt-1" />
                  <span className="text-sm">Access basic job matching.</span>
                </li>
                <li className="flex items-start gap-2">
                  <img src="/images/icons/blueBullet.svg" alt="" className="w-4 h-4 mt-1" />
                  <span className="text-sm">Skill gap analysis with recommendations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <img src="/images/icons/blueBullet.svg" alt="" className="w-4 h-4 mt-1" />
                  <span className="text-sm">Discover jobs and track your matches.</span>
                </li>
              </ul>
            </div>
            <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow-md transition">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 flex flex-col justify-between"
            style={{ width: "353px", height: "762px", borderRadius: "20px" }}
          >
            <div>
              <h3 className="text-left text-xl font-bold text-gray-800 mb-2">Premium Plan</h3>
              <p className="text-left text-sm text-gray-500 mb-4">Elite</p>
              <p className="text-left text-4xl font-extrabold text-blue-600 mb-2">$49.99</p>
              <p className="text-left text-sm text-gray-500 mb-6">Per month, billed annually</p>
              <ul className="text-left text-gray-700 space-y-4">
                <li className="flex items-start gap-2">
                  <img src="/images/icons/blueBullet.svg" alt="" className="w-4 h-4 mt-1" />
                  <span className="text-sm">Everything in Free Plan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <img src="/images/icons/blueBullet.svg" alt="" className="w-4 h-4 mt-1" />
                  <span className="text-sm">Priority access to AI-driven job recommendations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <img src="/images/icons/blueBullet.svg" alt="" className="w-4 h-4 mt-1" />
                  <span className="text-sm">Personalized career coaching (e.g., LinkedIn optimization, mock interviews).</span>
                </li>
                <li className="flex items-start gap-2">
                  <img src="/images/icons/blueBullet.svg" alt="" className="w-4 h-4 mt-1" />
                  <span className="text-sm">Exclusive networking events and industry workshops.</span>
                </li>
                <li className="flex items-start gap-2">
                  <img src="/images/icons/blueBullet.svg" alt="" className="w-4 h-4 mt-1" />
                  <span className="text-sm">Inclusion in the Talent Pool for employer discovery and referrals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <img src="/images/icons/blueBullet.svg" alt="" className="w-4 h-4 mt-1" />
                  <span className="text-sm">Premium support with 24/7 assistance.</span>
                </li>
              </ul>
            </div>
            <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow-md transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
