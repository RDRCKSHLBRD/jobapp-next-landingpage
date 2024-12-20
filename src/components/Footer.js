export default function Footer() {
  return (
    <footer className="bg-[#002F68] text-white p-8">

      <div className="flex justify-between">
        <div>
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Stay in the Loop</h3>
          <input type="email" placeholder="Enter Your Email" className="p-2 rounded-l" />
          <button className="bg-blue-500 px-4 py-2 rounded-r">Sign Up</button>
        </div>
      </div>
      <p className="text-center mt-4">&copy; 2024 The Job App. All Rights Reserved.</p>
    </footer>
  );
}
