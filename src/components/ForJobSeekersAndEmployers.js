export default function ForJobSeekersAndEmployers() {
  return (
    <section className="py-12 bg-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#1D3557] mb-2">
          For Job Seekers and Employers
        </h2>
        <p className="text-lg text-gray-600">
          Helping Job Seekers and Employers Succeed
        </p>
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-16 justify-center items-center max-w-7xl mx-auto px-4">
        {/* Job Seeker Section */}
        <div className="relative flex-shrink-0 w-full flex items-center justify-center">
          <img
            src="/images/zoomCallpic.png"
            alt="Job Seeker"
            className="w-[460px] h-[342px] rounded-lg shadow-lg object-cover"
            style={{
              transform: "translateX(-25%)", // Move image left by 25%
            }}
          />

          <div
            className="absolute bg-white p-6 rounded-lg shadow-lg"
            style={{
              width: "345px",
              height: "216px",
              right: "20%", // Move the card closer to the image
              top: "50%",
              transform: "translateY(-50%)",
              border: '0.5px solid lightgray', // Added border here
            }}
          >
            <h3 className="text-xl font-semibold text-[#1D3557] mb-2">
              For Job Seekers
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              AI-powered tools to improve job matches and applications.
            </p>
            <p className="text-sm text-gray-700">
              Boost your chances with skill recommendations and optimized resumes.
            </p>
          </div>



        </div>

        {/* Employer Section */}
        <div className="relative flex-shrink-0 w-full flex items-center justify-center">
          <img
            src="/images/conference.png"
            alt="Employer"
            className="w-[460px] h-[342px] rounded-lg shadow-lg object-cover"
            style={{
              transform: "translateX(25%)", // Move image right by 25%
            }}
          />
          <div
            className="absolute bg-white p-6 rounded-lg shadow-lg"
            style={{
              width: "345px",
              height: "216px",
              left: "20%",
              top: "50%",
              transform: "translateY(-50%)",
              border: '0.5px solid lightgray', // Added border here
            }}
          >
            <h3 className="text-xl font-semibold text-[#1D3557] mb-2">
              For Employers
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              Discover top talent faster with streamlined recruitment workflows.
            </p>
            <p className="text-sm text-gray-700">
              Gain insights through structured feedback to refine hiring
              processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
