import styles from "./ServicePage.module.css";
import type { Service } from "@/data/services";

const techStack = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
    tone: "light",
    filter: "invert(56%) sepia(84%) saturate(1731%) hue-rotate(163deg)",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg",
    tone: "dark",
    filter: "invert(75%) sepia(70%) saturate(1000%) hue-rotate(1deg)",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/figma.svg",
    tone: "light",
  },
  {
    name: "Sketch",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sketch.svg",
    tone: "dark",
    filter: "invert(50%) sepia(20%) saturate(700%) hue-rotate(163deg)",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/html5.svg",
    tone: "dark",
    filter: "invert(48%) sepia(85%) saturate(1600%) hue-rotate(340deg)",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/bootstrap.svg",
    tone: "light",
    filter: "invert(24%) sepia(80%) saturate(3000%) hue-rotate(325deg)",
  },
  {
    name: "Adobe XD",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobexd.svg",
    tone: "light",
    filter: "invert(24%) sepia(90%) saturate(3500%) hue-rotate(310deg)",
  },
  {
    name: "Framer",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/framer.svg",
    tone: "dark",
    filter: "invert(30%) sepia(90%) saturate(3000%) hue-rotate(340deg)",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg",
    tone: "dark",
    filter: "invert(96%)",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/css3.svg",
    tone: "dark",
    filter: "invert(50%) sepia(40%) saturate(800%) hue-rotate(140deg)",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg",
    tone: "light",
    filter: "invert(56%) sepia(84%) saturate(1731%) hue-rotate(163deg)",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg",
    tone: "dark",
    filter: "invert(60%) sepia(90%) saturate(1500%) hue-rotate(340deg)",
  },
  {
    name: "Affinity Designer",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/affinitydesigner.svg",
    tone: "dark",
    filter: "invert(60%) sepia(80%) saturate(1400%) hue-rotate(340deg)",
  },
  {
    name: "Photoshop",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobephotoshop.svg",
    tone: "dark",
    filter: "invert(64%) sepia(85%) saturate(1600%) hue-rotate(163deg)",
  },
  {
    name: "InVision",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/invision.svg",
    tone: "dark",
    filter: "invert(64%) sepia(60%) saturate(1200%) hue-rotate(340deg)",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg",
    tone: "light",
    filter: "invert(49%) sepia(68%) saturate(600%) hue-rotate(120deg)",
  },
];

const bottomCluster = [
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/csharp.svg",
    tone: "dark",
    filter: "invert(34%) sepia(80%) saturate(1800%) hue-rotate(210deg)",
  },
  {
    name: ".NET",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dotnet.svg",
    tone: "light",
    filter: "invert(18%) sepia(90%) saturate(1400%) hue-rotate(210deg)",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftsqlserver.svg",
    tone: "dark",
    filter: "invert(48%) sepia(80%) saturate(1600%) hue-rotate(197deg)",
  },
];

export default function ServiceTechStack({ service }: { service: Service }) {
  return (
    <section className={styles.section}>
      <div className={styles.techStack}>
        <div className={styles.dots} />

        <svg
          className={styles.wave}
          viewBox="0 0 720 460"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,460 L0,260 C 120,268 220,288 300,282 C 390,276 470,246 560,242 C 640,238 690,246 720,258 L720,460 Z"
            fill="rgba(216,90,48,0.14)"
          />
        </svg>

        <div className={styles.content}>
          <div className={styles.title}>
            <div className={styles.line1}>Our</div>
            <div className={styles.line2}>TECH</div>
            <div className={styles.line3}>STACK</div>
          </div>

          <div className={styles.iconGrid}>
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className={`${styles.icon} ${styles[tech.tone]}`}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  loading="lazy"
                  style={{ filter: tech.filter || "none" }}
                />
              </div>
            ))}
          </div>

          <div className={styles.bottomIconGrid}>
            {bottomCluster.map((tech) => (
              <div
                key={tech.name}
                className={`${styles.icon} ${styles[tech.tone]} ${styles.bottomIcon}`}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  loading="lazy"
                  style={{ filter: tech.filter || "none" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
