export default function HeroSection({ onLaunchChecker }) {
  return (
    <section className="relative bg-[#F0F6FF] py-5">
      {/* Top Content: Heading, Subheading, and Buttons */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-[57px] font-semibold text-[#1D3557] mb-2 leading-[64px] tracking-[-0.01em]">
          Land Your Dream Job Faster
        </h1>
        <h2 className="text-[57px] font-semibold text-[#1D3557] mb-2 leading-[50px] tracking-[-0.01em]">
          with our ATS-optimized platform
        </h2>

        {/* Subheading */}
        <p
          className="text-[22px] font-normal text-[#1D3557] leading-[28px] tracking-[-0.01em] text-center mb-1"
          style={{
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}
        >
          Job matching, skill gap analysis, and advanced resume optimization
        </p>
        <p
          className="text-[22px] font-normal text-[#1D3557] leading-[28px] tracking-[-0.01em] text-center mb-6"
          style={{
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}
        >
          all in one place.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            className="border-2 border-[#3B82F6] text-[#1D3557] text-[16px] font-medium leading-[24px] tracking-[0.005em] text-center px-[60px] py-[12px] rounded-[4px] hover:bg-blue-50 hover:text-blue-600"
            style={{
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
            }}
          >
            Hire Top Talent
          </button>
          <button
            className="bg-[#3B82F6] text-white text-[16px] font-medium leading-[24px] tracking-[0.005em] text-center px-[60px] py-[12px] rounded-[4px] hover:bg-blue-600"
            style={{
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
            }}
          >
            Get Your Dream Job
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div
        className="mt-8 mx-auto relative"
        style={{
          width: '1160px', // Explicit width
          height: '611px', // Explicit height
          overflow: 'hidden', // Clip content equivalent
        }}
      >
        <img
          src="/images/frameOne-hero.png"
          alt="Hero Background"
          className="w-full h-full object-cover rounded-lg"
        />

        {/* Instantly Discover Your Job Match Card */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 bg-white bg-opacity-90 p-5 rounded-[4px] shadow-lg max-w-sm">
          {/* Rectangle Image */}
          <div className="flex justify-center mb-4">
            <img
              src="/images/Instantly-Rectangle.png"
              alt="Job Match Illustration"
              className="w-40 h-56"
            />
          </div>

          {/* Card Text */}
          <div className="text-center">
            <h3 className="text-[24px] font-semibold leading-[32px] text-black mb-2">
              Instantly Discover <br /> Your Job Match
            </h3>
            <p className="text-[14px] leading-[20px] text-black mb-4">
              Paste a job description and your resume to see how well they align.
              Start your journey to success now!
            </p>
            <button
              onClick={onLaunchChecker}
              className="px-6 py-2 border-2 border-[#3B82F6] rounded-md text-black text-sm font-medium hover:bg-blue-50"
            >
              Check My Match
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
