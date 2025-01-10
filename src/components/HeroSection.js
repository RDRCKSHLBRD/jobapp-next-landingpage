export default function HeroSection() {
  return (
    <section
      className="relative text-center py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/frameOne-hero.png')" }}
    >
      <div className="absolute inset-0 bg-white opacity-0"></div>
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4 text-black">
          Land Your Dream Job Faster with Our ATS Optimized Platform
        </h1>
        <p className="text-lg mb-6 text-gray-800">
          Job matching, skill gap analysis, advanced resume optimization. All in one place.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded">Hire Top Talent</button>
          <button className="border border-blue-500 text-blue-500 px-6 py-3 rounded">Get Your Dream Job</button>
        </div>
      </div>
    </section>
  );
}
