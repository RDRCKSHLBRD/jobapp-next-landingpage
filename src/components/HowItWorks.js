export default function HowItWorks() {
  return (
    <section
      className="py-12 text-center bg-[#F0F6FF]"
      style={{ paddingTop: '3rem', paddingBottom: '4rem' }} // Reduced top padding slightly
    >
      <div
        className="mx-auto max-w-4xl bg-white rounded-t-lg px-8 py-12 shadow-lg"
        style={{ borderRadius: '20px 20px 0 0', marginTop: '-20px' }} // Added slight negative margin
      >
        <h2 className="text-3xl font-bold mb-4">How The Job App Works</h2>
        <p className="text-gray-600 mb-8">Your Job Search, Simplified</p>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* List Section */}
          <ol className="list-none mx-auto text-left space-y-6 text-lg text-gray-700 lg:w-1/2">
            {[
              'Paste Job Description',
              'Upload Your Resume',
              'Get a percentage match',
              'Skill Gap Analysis & Recommendations',
              'ATS Resume Optimization',
              '1-on-1 Career Coaching',
            ].map((text, index) => (
              <li key={index} className="flex items-start space-x-4">
                <div
                  className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-md text-gray-800 font-bold"
                  style={{ borderRadius: '4px' }}
                >
                  {index + 1}
                </div>
                <span className="leading-6">{text}</span>
              </li>
            ))}
          </ol>
          {/* Image Section */}
          <div
            className="mt-8 lg:mt-0 lg:ml-8"
            style={{
              borderRadius: '20px',
              width: '428px',
              height: '314px',
              backgroundColor: '#F0F6FF',
              overflow: 'hidden',
            }}
          >
            <img
              src="/images/Professional-High-Five.jpeg"
              alt="Professional High Five"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
