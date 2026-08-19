export default function SimpleFooter() {
  return (
    <footer className="border-t border-white/10 py-14 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <a className="footer-logo" href="#top" aria-label="Berry Sols home">
              <img className="footer-logo-dark" src="/assets/logo%201.png" alt="Berry Sols" />
              <img className="footer-logo-light" src="/assets/logo%202.png" alt="" aria-hidden="true" />
              <span className="footer-wordmark">Berry<br />Solutions</span>
            </a>
            <p className="text-sm text-gray-400">
              Your limitless intelligent agent for effortless sales, support, search, and transactions.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-gray-500 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-orange-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-gray-400 hover:text-orange-500 transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#clients" className="text-sm text-gray-400 hover:text-orange-500 transition">
                  Clients
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-orange-500 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-gray-500 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#industries" className="text-sm text-gray-400 hover:text-orange-500 transition">
                  Industries
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-gray-400 hover:text-orange-500 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-orange-500 transition">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-sm text-gray-400 hover:text-orange-500 transition">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-gray-500 mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hello@berrysols.com"
                  className="text-sm text-gray-400 hover:text-orange-500 transition"
                >
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-orange-500 transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-orange-500 transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-400 hover:text-orange-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <span>© 2026 Berrysols. All rights reserved.</span>
          <span>Effortless AI across every channel</span>
        </div>
      </div>
    </footer>
  );
}
