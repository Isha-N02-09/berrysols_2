import Link from "next/link";

export default function SimpleFooter() {
  return (
    <footer className="simple-footer">
      <div className="simple-footer-inner">
        <div className="simple-footer-grid">
          <div className="simple-footer-brand">
            <Link className="footer-logo" href="/" aria-label="Berry Sols home">
             <img className="footer-logo-light" src="/assets/icon2.png" alt="" aria-hidden="true" />
              <span className="footer-wordmark">Berry<br />Solutions</span>
            </Link>
            <p>
              Your limitless intelligent agent for effortless sales, support, search, and transactions.
            </p>
          </div>

          <div className="simple-footer-column">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/#clients">Clients</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>

          <div className="simple-footer-column">
            <h4>Services</h4>
            <ul>
              <li><Link href="/#products">Products</Link></li>
              <li><Link href="/#industries">Industries</Link></li>
              <li><Link href="/#products">Integrations</Link></li>
            </ul>
          </div>
        </div>

        <div className="simple-footer-connect">
          <h2>Connect with us</h2>
          <div className="simple-footer-socials" aria-label="Social links">
            <a href="https://www.linkedin.com/company/berry-solutions" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">in</a>
            <a href="https://www.facebook.com/people/Berry-Solutions/61559954167096/?locale=ur_PK#" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook">f</a>
            <a href="mailto:hello@berrysols.com" aria-label="Email" title="Email">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2.2" />
                <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="https://www.instagram.com/berrysols/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="2.4" />
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2.4" />
                <circle cx="17.5" cy="6.7" r="1" fill="currentColor" />
              </svg>
            </a>
            <a href="tel:+923395913615" aria-label="Call +92 339 591 3615" title="+92 339 591 3615">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M4 6c0-1.1.9-2 2-2h2.2c.5 0 .9.3 1 .8l.8 3c.1.4 0 .9-.3 1.2L8.4 10.3c1 2 2.6 3.6 4.6 4.6l1.3-1.3c.3-.3.7-.4 1.2-.3l3 .8c.5.1.8.5.8 1V17c0 1.1-.9 2-2 2h-1C10.3 19 5 13.7 5 7V6H4Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          </div>
          <div className="simple-footer-bottom">
            <span>© 2026 Berrysols. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
