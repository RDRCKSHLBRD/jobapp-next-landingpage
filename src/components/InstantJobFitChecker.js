import Image from "next/image";

export default function InstantJobFitChecker({ onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={onClose} // Close on backdrop click
    >
      {/* Fullscreen Overlay */}
      <div
        className="relative flex flex-col justify-center items-center w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/OVERLAYhires.svg')`, // Same background overlay as LoginComponent
        }}
        onClick={(e) => e.stopPropagation()} // Prevent click-through
      >
        {/* Modal Card */}
        <div className="relative bg-white p-8 rounded-[4px] shadow-lg flex flex-col w-[564px] h-[650px] overflow-hidden">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
            aria-label="Close"
          >
            <span className="text-[30px] font-light">x</span>
          </button>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <label className="block text-[32px] font-medium text-gray-700 mb-2">
                Instant Job Fit Checker
              </label>
            </div>

            <div>
              <label className="block text-[16px] font-medium text-gray-700 mb-2">
                Input or paste job description
              </label>
              <textarea
                className="w-full h-28 px-4 border border-gray-300 rounded-[4px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Paste job description here..."
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-[22px] font-medium text-gray-700 mb-2">
                Upload Resume
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center relative hover:border-blue-500 transition">
                <Image
                  src="/images/icons/uploads.svg" // Path to your SVG
                  alt="Resume upload icon"
                  width={40} // Explicit dimensions
                  height={40}
                  className="mx-auto mb-3"
                />
                <p className="text-sm text-gray-500">
                  Drag and drop your resume here, or{" "}
                  <button className="text-blue-500 hover:underline font-medium">
                    browse
                  </button>
                </p>
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full bg-blue-500 text-white text-[18px] font-semibold px-4 py-3 rounded-[4px] shadow-lg hover:bg-blue-600 transition">
              Check My Match
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
