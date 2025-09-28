import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const links = ["Home", "Menu", "About", "Gallery", "Contact"];

  return (
    <footer className="bg-green-700 text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Shuddh Swad</h1>
          <p className="text-gray-200 max-w-sm">
            Bringing the authentic taste of Bihar’s traditional dishes to your
            plate with love and purity.
          </p>
          <div className="flex gap-4 mt-2 text-white">
            <a href="#" className="hover:text-amber-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-amber-400"><FaInstagram /></a>
            <a href="#" className="hover:text-amber-400"><FaTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="flex flex-col gap-2">
            {links.map((item, i) => (
              <li key={i}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p>📞 +91 9876543210</p>
          <p>📧 info@shuddhswad.com</p>
          <p>📍 Bihar, India</p>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-200 text-sm">
        &copy; {new Date().getFullYear()} Shuddh Swad. All rights reserved.
      </div>
    </footer>
  );
}
