const clientLogos = [
  {
    name: "Army Public School",
    src: "/assets/clientslogo/aps.svg",
  },
  {
    name: "Pakistan Army",
    src: "/assets/clientslogo/pkarmy.png",
  },
  {
    name: "Stingray",
    src: "https://media.licdn.com/dms/image/v2/D4D0BAQFmnxKtQ3XUlA/company-logo_200_200/B4DZdDvmnyHwAI-/0/1749188242409/stingray_technologies_pvt_ltd_logo?e=2147483647&v=beta&t=GGzWiagBxTUAISHff1easw6vVNFAjeg8iW1mVG-Oy5M",
  },
  {
    name: "Telehealth",
    src: "/assets/clientslogo/telehealth.png",
  },
  {
    name: "PCNF",
    src: "/assets/clientslogo/pcnflogo.png",
  },
  {
    name: "MJ",
    src: "/assets/clientslogo/mj.png",
  },
  {
  name: "15 Division",
  src: "/assets/clientslogo/15div.png",
},
];

export default function TrustBrand() {
  return (
    <section className="trust-band">
      <div className="logo-strip" aria-label="Trusted brands">
        <div className="trust-strip-label">// WE&apos;VE<br />TRUSTED BY</div>
        <div className="logo-track">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div
              className="logo-item"
              key={logo.name + i}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="logo-track-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}