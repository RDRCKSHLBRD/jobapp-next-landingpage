export default function Header() {
  return (
    <header className="flex justify-between p-4 shadow-md">
      <div className="text-xl font-bold">The Job App</div>
      <nav>
        <ul className="flex gap-4">
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      <div>
        <button className="mr-2">Sign In</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
      </div>
    </header>
  );
}
