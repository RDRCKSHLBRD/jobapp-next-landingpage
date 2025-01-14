// NavLink.js
import Link from "next/link";

export default function NavLink({ text, href }) {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="px-2 py-4 text-base font-normal text-black rounded-[4px] transition-all cursor-pointer border border-transparent hover:border-gray-300"
    >
      {text}
    </a>
  );
}
