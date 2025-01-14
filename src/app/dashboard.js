const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Instant Job Match Checker</h1>
      <input
        type="text"
        placeholder="Enter details"
        className="border p-2 w-full mb-4"
      />
      <div className="border-dashed border-2 border-gray-300 p-10 text-center mb-4">
        <p>
          Drop File Here or <span className="text-blue-500 cursor-pointer">Browse</span>
        </p>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Check Match</button>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Analytics</h2>
        <div className="grid grid-cols-4 gap-4">
          {['2000', '4', '20', '50'].map((item, index) => (
            <div key={index} className="bg-white shadow p-4 rounded">
              <h3 className="text-xl font-bold">{item}</h3>
              <p>Data {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
