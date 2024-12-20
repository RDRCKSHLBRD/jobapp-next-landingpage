export default function HeroSection() {
  return (
    <section className="text-center p-16 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Land Your Dream Job Faster with AI-Powered Precision</h1>
      <p className="mb-6">Job matching, skill gap analysis, advanced resume optimization. All in one place.</p>
      <div>
        <input type="text" placeholder="Enter URL or job description" className="border p-2 rounded-l" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r">Upload Resume</button>
      </div>
    </section>
  );
}
