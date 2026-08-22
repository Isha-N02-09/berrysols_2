import styles from "./BlogStrip.module.css";

const services: [string, string][] = [
  ["Fintech", "Automate all your financial needs with Berry."],
  ["Real Estate", "Help clients find properties, book visits, and get answers faster."],
 ["Fintech", "Automate all your financial needs with Berry."],
  ["Real Estate", "Help clients find properties, book visits, and get answers faster."],
  ["Fintech", "Automate all your financial needs with Berry."],
  ["Real Estate", "Help clients find properties, book visits, and get answers faster."],
];

export default function ServiceStrip() {
  const track = [...services, ...services];
  return (
    <div className={styles.serviceStrip}>
      <div className={styles.heading}>
        <span className={styles.line} />
        <h2>Berry for</h2>
      </div>
      <div className={styles.viewport}>
        <div className={styles.track}>
          {track.map(([title, description], index) => (
            <article className={styles.item} key={`${title}-${index}`}>
              <div><b>{title}</b><p>{description}</p></div>
              <i>—</i>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}