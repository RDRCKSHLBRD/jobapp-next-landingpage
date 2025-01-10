export default function Features() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">For Job Seekers and Employers</h2>
      <p className="text-gray-600 mb-12">
        Helping Job Seekers and Employers Succeed
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">For Job Seekers</h3>
          <p>AI-powered tools to improve job matches and applications. Boost your chances with skill recommendations and optimized resumes.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">For Employers</h3>
          <p>Discover top talent faster with streamlined recruitment workflows. Gain insights through structured feedback to refine hiring processes.</p>
        </div>
      </div>
    </section>
  );
}
