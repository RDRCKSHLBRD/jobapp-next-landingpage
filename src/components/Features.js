export default function Features() {
  return (
    <section id="features" className="container mx-auto px-4 py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">
        For Job Seekers and Employers
      </h2>
      <p className="text-center text-gray-700 mb-16">
        Helping Job Seekers and Employers Succeed
      </p>

      <div className="flex flex-col gap-24 max-w-6xl mx-auto">
        {/* Job Seekers Card */}
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-end">
          <div className="w-full md:w-2/3 h-[400px] rounded-lg overflow-hidden bg-[#8A9EA0]">
            <span className="block w-full h-full"></span>
          </div>
          <div className="absolute md:left-0 md:top-12 top-4 bg-white p-8 rounded-lg shadow-lg w-5/6 md:w-1/2 z-10">
            <h3 className="text-xl font-bold mb-4">For Job Seekers</h3>
            <p className="text-gray-600 space-y-4">
              AI-powered tools to improve job matches and applications.
              <br /><br />
              Boost your chances with skill recommendations and optimized resumes.
            </p>
          </div>
        </div>

        {/* Employers Card */}
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-end">
          <div className="w-full md:w-2/3 h-[400px] rounded-lg overflow-hidden bg-[#8A9EA0]">
            <span className="block w-full h-full"></span>
          </div>
          <div className="absolute md:left-0 md:top-12 top-4 bg-white p-8 rounded-lg shadow-lg w-5/6 md:w-1/2 z-10">
            <h3 className="text-xl font-bold mb-4">For Employers</h3>
            <p className="text-gray-600 space-y-4">
              Discover top talent faster with streamlined recruitment workflows.
              <br /><br />
              Gain insights through structured feedback to refine hiring processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
