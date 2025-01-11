export default function InstantJobFitChecker() {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Instant Job Fit Checker</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter URL or paste job description
          </label>
          <textarea
            className="w-full p-2 border rounded-md"
            rows="4"
            placeholder="Paste job description here..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Resume
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
            <button className="text-blue-500 hover:text-blue-600">
              Click to upload or drag and drop
            </button>
          </div>
        </div>
        <button className="w-full bg-[#3B82F6] text-white px-4 py-2 rounded hover:bg-blue-600">
          Check My Match
        </button>
      </div>
    </div>
  );
}
