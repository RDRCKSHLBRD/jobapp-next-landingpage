export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
      <div className="text-xl font-bold text-blue-500">The Job App</div>
      <nav>
        <ul className="flex gap-8">
          <li><a href="#features" className="hover:text-blue-500">Features</a></li>
          <li><a href="#how-it-works" className="hover:text-blue-500">How It Works</a></li>
          <li><a href="#pricing" className="hover:text-blue-500">Pricing</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact Us</a></li>
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <button className="text-gray-700">Sign In</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
      </div>
    </header>
  );
}
