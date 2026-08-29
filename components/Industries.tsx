import {
  Building2,
  BriefcaseBusiness,
  GraduationCap,
  Landmark,
  ShoppingBag,
  Smartphone,
  UtensilsCrossed,
} from "lucide-react";
import styles from "./Industries.module.css";

const industries = [
  { name: "Hospitality", icon: UtensilsCrossed },
  { name: "Communications", icon: Smartphone },
  { name: "Banking & Financial Services", icon: Landmark },
  { name: "Fintech", icon: BriefcaseBusiness },
  { name: "Real Estate", icon: Building2 },
  { name: "Education", icon: GraduationCap },
  { name: "Retail", icon: ShoppingBag },
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
                {rollingIndustries.map((industry, index) => {
                  const Icon = industry.icon;

                  return (
                    <span
                      className={styles.industryName}
                      key={`${industry.name}-${index}`}
                    >
                      <span className={styles.industryIcon} aria-hidden="true">
                        <Icon size={12} strokeWidth={1.9} />
                      </span>
                      {industry.name}
                    </span>
                  );
                })}
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
