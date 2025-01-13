export default function InstantJobFitChecker() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
      <h3 className="text-2xl font-extrabold text-gray-800 mb-6">Instant Job Fit Checker</h3>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Input or paste job description
          </label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows="5"
            placeholder="Paste job description here..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Upload Resume
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center relative hover:border-blue-500 transition">
            <img
              src="/pictures/icons/uploads.svg"
              alt="Upload icon"
              className="w-10 h-10 mx-auto mb-3"
            />
            <p className="text-sm text-gray-500">
              Drag and drop your resume here, or{" "}
              <button className="text-blue-500 hover:underline font-medium">
                browse
              </button>
            </p>
          </div>
        </div>
        <button className="w-full bg-blue-500 text-white font-semibold px-4 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition">
          Check My Match
        </button>
      </div>
    </div>
  );
}
