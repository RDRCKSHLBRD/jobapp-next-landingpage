export default function WhyJobApp() {
  return (
    <section id="why-job-app" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-[#1D3557] text-center mb-6">Why The Job App?</h2>
        <p className="text-lg text-gray-700 text-center mb-12">
          Stop wasting time with generic tools. Job App combines cutting-edge AI
          and ATS technology to help you secure the right roles faster.
        </p>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {/* Card 1 */}
          <div
            className="bg-[#F0F6FF] p-3 rounded-lg shadow-md"
            style={{
              width: "283px",
              height: "417px",
              border: "0.5px solid lightgray",
            }}
          >
            <img
              src="/images/whysection4-AI-jobmatchSM.jpg"
              alt="Job Matching and Skill Gap Analysis"
              className="w-full h-[175px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold text-left text-[#000] mb-2">
              Job Matching and Skill Gap Analysis
            </h3>
            <p className="text-sm text-left text-[#000] mb-1">
              Upload your resume and match with jobs tailored to your skills and
              experience.
            </p>
            <p className="text-sm text-left text-[#000]">
              Get improvement areas and actionable recommendations.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-[#F0F6FF] p-3 rounded-lg shadow-md"
            style={{
              width: "283px",
              height: "417px",
              border: "0.5px solid lightgray",
            }}
          >
            <img
              src="/images/whysection4-ATSoptSM.jpg"
              alt="ATS Optimized Resumes"
              className="w-full h-[175px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold text-left text-[#000] mb-2">
              ATS Optimized Resumes
            </h3>
            <p className="text-sm text-left text-[#000] mb-1">
              Identify missing skills and underrepresented qualifications for
              your target jobs.
            </p>
            <p className="text-sm text-left text-[#000]">
              Get personalized recommendations for improving your profile.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-[#F0F6FF] p-3 rounded-lg shadow-md"
            style={{
              width: "283px",
              height: "417px",
              border: "0.5px solid lightgray",
            }}
          >
            <img
              src="/images/whysection4-1on1.png"
              alt="1-on-1 Career Coaching"
              className="w-full h-[175px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold text-left text-[#000] mb-2">
              1-on-1 Career Coaching
            </h3>
            <p className="text-sm text-left text-[#000] mb-1">
              Get customized support for resumes, interviews, and career
              strategies.
            </p>
            <p className="text-sm text-left text-[#000]">
              Partner with an expert coach for personalized guidance and
              insights.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="bg-[#F0F6FF] p-3 rounded-lg shadow-md"
            style={{
              width: "283px",
              height: "417px",
              border: "0.5px solid lightgray",
            }}
          >
            <img
              src="/images/whysection4-employerDriven.jpeg"
              alt="Employer-Driven Connections"
              className="w-full h-[175px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold text-left text-[#000] mb-2">
              Employer-Driven Connections
            </h3>
            <p className="text-sm text-left text-[#000] mb-1">
              Connect employers and job seekers for tailored talent discovery.
            </p>
            <p className="text-sm text-left text-[#000]">
              Empower employers to refer top candidates, simplifying hiring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
