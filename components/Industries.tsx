import styles from "./Industries.module.css";

const industries = [
  "Hospitality",
  "Communications",
  "Banking & Financial Services",
  "Fintech",
  "Real Estate",
  "Education",
  "Retail",
];

const rollingIndustries = [...industries, ...industries];

export default function Industries() {
  return (
    <section id="industries" className={styles.section} aria-labelledby="industries-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h2 id="industries-title" className={styles.title}>Industries we serve</h2>
          <p className={styles.description}>
            We partner with global enterprises across industries to solve complex challenges through practical, scalable technology services aligned with their business goals, helping them adapt, grow, and lead in a fast-changing world.
          </p>
          <div className={styles.industryDisplay}>
            <div className={styles.industryWindow} aria-label="Industries we serve">
              <div className={styles.industryTrack}>
                {rollingIndustries.map((industry, index) => (
                  <span
                    className={styles.industryName}
                    key={`${industry}-${index}`}
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <a href="#contact" className={styles.learnMore}>Learn more</a>
        </div>

        <div className={styles.imageFrame}>
          <img
            className={styles.image}
            src="/assets/office.png"
            alt="Business leaders collaborating around an office table"
          />
        </div>
      </div>
    </section>
  );
}
