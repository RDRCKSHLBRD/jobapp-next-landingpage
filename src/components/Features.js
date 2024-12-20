export default function Features() {
  return (
    <section id="features" className="p-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">For Job Seekers and Employers</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">For Job Seekers</h3>
          <p>AI-powered tools to improve job matches and applications. Boost your chances with skill recommendations and optimized resumes.</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">For Employers</h3>
          <p>Discover top talent faster with streamlined recruitment workflows. Gain insights through structured feedback to refine hiring processes.</p>
        </div>
      </div>
    </section>
  );
}