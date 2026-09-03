import Link from "next/link";

export default function SimpleFooter() {
  return (
    <footer className="simple-footer">
      <div className="simple-footer-inner">
        <div className="simple-footer-watermark" aria-hidden="true">BERRY</div>

        <div className="simple-footer-brand">
          <Link className="footer-logo" href="/" aria-label="Berry Solutions home">
            <img src="/assets/icon2.png" alt="Berry" className="footer-logo-image" />
          </Link>
          <p>Technology that connects the dots.</p>
        </div>

        <div className="simple-footer-connect">
          <h2>Connect with us</h2>
          <div className="simple-footer-socials" aria-label="Social links">
            <a href="mailto:hello@berrysols.com" aria-label="Email" title="Email"><span>Email</span><b><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2.2" /></svg></b></a>
            <a href="https://www.facebook.com/people/Berry-Solutions/61559954167096/?locale=ur_PK#" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook"><span>Facebook</span><b>f</b></a>
            <a href="https://www.instagram.com/berrysols/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><span>Instagram</span><b>◎</b></a>
            <a href="https://www.linkedin.com/company/berry-solutions" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><span>LinkedIn</span><b>in</b></a>
          </div>
        </div>

        <div className="simple-footer-bottom">
          <nav aria-label="Footer navigation">
            <Link href="/about">About</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/services">Services</Link>
            <Link href="/#portfolio">Works</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <span>© 2026 Berrysols. All rights reserved.</span>
            <span>© 2026 Berry Solutions. All rights reserved.</span>
          <a href="#top" className="footer-back-top" aria-label="Back to top" title="Back to top">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 19V5M6.5 10.5 12 5l5.5 5.5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
