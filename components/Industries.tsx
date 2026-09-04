import {
  Building2,
  BriefcaseBusiness,
  GraduationCap,
  Landmark,
  ShoppingBag,
  Smartphone,
  UtensilsCrossed,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import styles from "./Industries.module.css";

const industries = [
  { name: "Government Agencies", icon: Landmark },
  { name: "Vigilance & Recognition", icon: BriefcaseBusiness },
  { name: "Telehealth", icon: Smartphone },
  { name: "Maritime & Logistics", icon: UtensilsCrossed },
  { name: "Real Estate", icon: Building2 },
  { name: "Manufacturing", icon: ShoppingBag },
  { name: "Travel & Tourism", icon: GraduationCap },
  { name: "FinTech", icon: BriefcaseBusiness },
  { name: "EdTech", icon: GraduationCap },
];

const rollingIndustries = [...industries, ...industries];
const industryImages = [
  { number: 1, extension: "jpg" },
  { number: 2, extension: "jpg" },
  { number: 3, extension: "jpg" },
  { number: 4, extension: "jpg" },
  { number: 5, extension: "png" },
];

export default function Industries() {
  return (
    <section id="industries" className={styles.section} aria-labelledby="industries-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h2 id="industries-title" className={styles.title}>Industries we serve</h2>
          <p className={styles.description}>
            Different industries. Different challenges. One intelligent approach. We build scalable digital solutions that adapt to your industry, streamline operations, and create measurable impact.

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
                        <Icon size={16} strokeWidth={2} />
                      </span>
                      {industry.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <Link href="#contact" className={styles.learnMore}>
            Learn more <ArrowUpRight size={16} strokeWidth={2.25} aria-hidden="true" />
          </Link>
        </div>

        <div className={styles.imageFrame}>
          {industryImages.map(({ number, extension }) => (
            <img
              className={styles.image}
              key={number}
              src={`/assets/industry/${number}.${extension}`}
              alt={`Modern architecture panel ${number}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
