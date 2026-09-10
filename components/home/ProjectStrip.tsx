const stripWords = [
  "PROJECTS DELIVERED",
  "INNOVATIVE",
  "VISIONARY",
  "DIGITAL",
];

export default function ProjectStrip() {
  return (
    <section className="project-strip" aria-label="Projects we deliver">
      <div className="project-strip-track">
        {[...stripWords, ...stripWords].map((word, index) => (
          <span className="project-strip-word" key={`${word}-${index}`}>
            {word}
            <i aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  );
}
