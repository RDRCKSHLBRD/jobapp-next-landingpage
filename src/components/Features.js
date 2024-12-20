export default function Features() {
  return (
    <section id="features" className="p-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">
        For Job Seekers and Employers
      </h2>
      <p className="text-center text-black mb-8">
        Helping Job Seekers and Employers Succeed
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Job Seekers Card */}
        <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
          <div className="w-full h-40 mb-4 bg-[#8A9EA0] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">Picture</span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-black">For Job Seekers</h3>
          <p className="text-black">
            AI-powered tools to improve job matches and applications. Boost your chances with skill recommendations and optimized resumes.
          </p>
        </div>

        {/* Employers Card */}
        <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
          <div className="w-full h-40 mb-4 bg-[#8A9EA0] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">Picture</span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-black">For Employers</h3>
          <p className="text-black">
            Discover top talent faster with streamlined recruitment workflows. Gain insights through structured feedback to refine hiring processes.
          </p>
        </div>
      </div>
    </section>
  );
}
