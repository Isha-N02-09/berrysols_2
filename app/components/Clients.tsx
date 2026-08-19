const partners = [
  "Pakistan Army",
  "Meridian Bank",
  "Skyway Airlines",
  "Horizon Hotels",
  "Northwind Textiles",
  "Cascade Health",
  "Alto Logistics",
  "Vertex Energy",
];

export default function Clients() {
  const repeatedPartners = [...partners, ...partners];

  return (
    <section className="clients" id="clients">
      <div className="clients-heading">
        <span className="section-index">Clients &amp; partners</span>
        <h2>Trusted by teams that need technology to perform.</h2>
      </div>
      <div className="clients-strip" aria-label="Our trusted clients and partners">
        <div className="clients-strip-track">
          {repeatedPartners.map((partner, index) => (
            <span className="clients-strip-name" key={`${partner}-${index}`}>
              <i aria-hidden="true" />
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
