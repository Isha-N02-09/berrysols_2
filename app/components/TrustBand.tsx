const logos = ["Horizon Hotels", "Skyway Air", "Meridian Bank", "Cascade Health", "Alto Logistics", "Vertex Energy"];

export default function TrustBand() {
  return (
    <section className="trust-band">
      <p>Trusted by teams that value exceptional digital experiences.</p>
      <div className="logo-strip">
        <div className="logo-track">
          {[...logos, ...logos].map((name, index) => (
            <b key={`${name}-${index}`}>{name}</b>
          ))}
        </div>
      </div>
    </section>
  );
}