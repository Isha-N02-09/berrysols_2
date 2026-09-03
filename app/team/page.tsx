import Link from "next/link";
import Navbar from "../../components/Navbar";
import SimpleFooter from "../../components/Footer";
import TeamScrollIntro from "./TeamScrollIntro";
import styles from "./team.module.css";

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroRule} />
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Berry Solutions / The team</p>
            <h1>TEAM</h1>
            <p className={styles.intro}>
              The people behind the work, bringing strategy, design, engineering, and curiosity to the same table.
            </p>
            <Link className={styles.heroLink} href="/about">Back to About <span aria-hidden="true">-&gt;</span></Link>
          </div>
        </section>

        <TeamScrollIntro />
      </main>
      <SimpleFooter />
    </>
  );
}
