import styles from "./CapabilityWave.module.css";

const wavePaths = [
  "M0,120 C180,120 220,120 360,120 S620,94 780,120 S1090,140 1440,118",
  "M0,132 C140,132 260,152 430,126 S700,110 845,138 S1100,160 1440,135",
  "M0,146 C220,146 300,98 470,132 S760,164 920,138 S1160,118 1440,142",
  "M0,160 C160,160 300,118 430,148 S650,172 800,150 S1080,116 1440,150",
  "M0,174 C190,174 360,132 540,168 S840,196 1020,160 S1220,136 1440,168",
];

export default function CapabilityWave() {
  return (
    <section className={styles.capabilitySection} aria-label="Capabilities section">
      <div className={styles.lineWrap}>
        <svg
          className={styles.waveSvg}
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {wavePaths.map((d, index) => (
            <path
              key={d}
              d={d}
              className={styles.wavePath}
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </svg>
      </div>
    </section>
  );
}
