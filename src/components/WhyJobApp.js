export default function WhyJobApp() {
  return (
    <section id="why-job-app" className="p-16">
      <h2 className="text-3xl font-bold text-center mb-8">Why The Job App?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <h3 className="font-bold mb-2">AI-Powered Job Matching</h3>
          <p>Match with jobs tailored to your skills and experience.</p>
        </div>
        <div className="text-center">
          <h3 className="font-bold mb-2">Skill Gap Analysis</h3>
          <p>Identify missing skills and receive personalized recommendations.</p>
        </div>
        <div className="text-center">
          <h3 className="font-bold mb-2">AI Resume & Cover Letter Generator</h3>
          <p>Optimize your resume and cover letter for job applications.</p>
        </div>
        <div className="text-center">
          <h3 className="font-bold mb-2">Advanced ATS Optimization</h3>
          <p>Ensure your resume passes ATS screening systems.</p>
        </div>
      </div>
    </section>
  );
}