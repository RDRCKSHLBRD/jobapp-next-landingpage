export default function Testimonials() {
  return (
    <section id="testimonials" className="p-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">What Users Are Saying</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <p className="mb-4">
  &quot;I never thought finding the perfect job could be so easy until I used this platform. The AI-powered skill gap analysis helped me upgrade my resume and land a dream role!&quot;
</p>
          <p className="text-sm text-gray-500">Marketing Specialist</p>
        </div>
      </div>
    </section>
  );
}