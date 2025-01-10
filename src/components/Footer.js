export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-start">
        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#pricing" className="hover:underline">Pricing</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Stay in the Loop</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l"
            />
            <button className="bg-blue-500 px-4 py-2 rounded-r">Sign Up</button>
          </form>
        </div>
      </div>
      <p className="text-center mt-4">&copy; 2024 The Job App. All Rights Reserved.</p>
    </footer>
  );
}
