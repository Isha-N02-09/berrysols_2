"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Lightbulb, PenLine, Search, Target } from "lucide-react";
import type { CaseStudyData } from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import SimpleFooter from "@/components/Footer";
import styles from "./CaseStudyPage.module.css";

function SectionLabel({ children }: { children: string }) {
  return <p className={styles.sectionLabel}>{children}</p>;
}

const processIcons = [Search, Target, Lightbulb, PenLine, Check];

export default function CaseStudyPage({ study }: { study: CaseStudyData }) {
  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">("desktop");
  const [previewSource, setPreviewSource] = useState<"shot" | "live">("shot");

  return (
    <main className={styles.page}>
      <Navbar />

      <header className={styles.hero}><div className={styles.wrap}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{study.eyebrow}</p>
          <h1>{study.title}</h1>
          <p className={styles.lede}>{study.lede}</p>
          <div className={styles.heroActions}>
            {study.liveSite && <a className={styles.primaryButton} href={study.liveSite} target="_blank" rel="noreferrer">Visit the site ↗</a>}
            <Link className={styles.secondaryButton} href="/portfolio">Back to work <ArrowUpRight size={16} strokeWidth={2.25} aria-hidden="true" /></Link>
          </div>
        </div>
        <div className={styles.heroVisual}><div className={styles.heroCard}>
          <img src={study.image} alt="" /><div className={styles.caption}><span><i />Homepage - desktop</span><span>1920 x 1080</span></div>
        </div>
      </div></div></header>

      <div className={styles.metaBar}>
        <div><span>Client</span><strong>{study.client}</strong></div>
        <div><span>Role</span><strong>{study.role}</strong></div>
        <div><span>Category</span><strong>{study.category}</strong></div>
      </div>

      <div className={styles.stats} aria-label="Project outcomes"><div className={styles.wrap}>
        {study.stats.map((stat) => <div className={styles.stat} key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
      </div></div>

      <section className={styles.contentSection} id="overview">
        <SectionLabel>01 / Overview</SectionLabel>
        <div className={styles.overviewStack}>
          <h2>{study.overviewTitle}</h2>
          <div className={styles.overviewImage}><img src={study.overviewImage ?? study.image} alt={`${study.title} overview`} /></div>
          <div className={styles.leadText}>{study.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>

      <section className={`${styles.contentSection} ${styles.creamSection}`}>
        <SectionLabel>02 / The challenge</SectionLabel>
        <div className={styles.problemGrid}>
          {study.problems.map((problem, index) => <article key={problem.title}><span>0{index + 1}</span><h3>{problem.title}</h3><p>{problem.text}</p></article>)}
        </div>
      </section>

      <section className={styles.contentSection} id="solutions">
        <SectionLabel>03 / The solution</SectionLabel>
        <div className={styles.solutionGrid}>
          {study.solutions.map((solution, index) => <article key={solution.title}><span>0{index + 1}</span><h3>{solution.title}</h3><p>{solution.text}</p></article>)}
        </div>
      </section>

      <section className={`${styles.contentSection} ${styles.standout}`} id="standout">
        <SectionLabel>04 / Why it stands out</SectionLabel>
        <h2 className={styles.sectionTitle}>Beyond a visual refresh.</h2>
        <div className={styles.standoutGrid}>
          {study.standout.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </section>

      <section className={`${styles.contentSection} ${styles.processSection}`} id="process">
        <SectionLabel>05 / Design process</SectionLabel>
        <div className={styles.processGrid}>
          {study.process.map((stage, index) => { const Icon = processIcons[index % processIcons.length]; return <article key={stage.title}><span><Icon size={22} strokeWidth={1.7} /></span><h3>{stage.title}</h3><ul>{stage.items.map((item) => <li key={item}>{item}</li>)}</ul></article>; })}
        </div>
      </section>

      <section className={styles.contentSection} id="tech">
        <SectionLabel>06 / Technology</SectionLabel>
        <h2 className={styles.sectionTitle}>Tools used to design and build it.</h2>
        {study.tech.map((group) => <div key={group.category} className={styles.techGroup}><p>{group.category}</p><div className={styles.techGrid}>{group.items.map((tool, index) => <div key={tool}><strong className={`${styles.techBadge} ${index === 3 || index === 4 ? styles.badgeGold : index === 0 ? styles.badgeDeep : index === 1 ? styles.badgeMid : styles.badgeBright}`}>{tool === "HTML5" ? "</>" : tool.slice(0, 2)}</strong><span>{tool}</span></div>)}</div></div>)}
      </section>

      <section className={`${styles.contentSection} ${styles.previewSection}`} id="preview">
        <SectionLabel>07 / Preview</SectionLabel>
        <h2 className={styles.sectionTitle}>Desktop &amp; mobile - live.</h2>
        <div className={styles.simToolbar}>
          <button className={previewMode === "desktop" ? styles.active : ""} onClick={() => setPreviewMode("desktop")}>Desktop</button>
          <button className={previewMode === "mobile" ? styles.active : ""} onClick={() => setPreviewMode("mobile")}>Mobile</button>
          {study.liveSite && <><i /><button className={previewSource === "live" ? styles.active : ""} onClick={() => setPreviewSource("live")}>Try live</button></>}
          <button className={previewSource === "shot" ? styles.active : ""} onClick={() => setPreviewSource("shot")}>Screenshot</button>
          <span>{previewMode === "desktop" ? "1440px" : "390px"}</span>
        </div>
        <div className={styles.simStage}><div className={`${styles.deviceFrame} ${previewMode === "mobile" ? styles.mobile : ""}`}><div className={styles.browserBar}><i /><i /><i /><span>{study.liveSite?.replace(/^https?:\/\//, "").replace(/\/$/, "") ?? "preview.local"}</span></div><div className={styles.deviceScreen}>{previewSource === "live" ? <iframe src={`/portfolio/${study.slug}/preview`} title={`Live preview of ${study.title}`} /> : <img src={previewMode === "mobile" && study.mobileImage ? study.mobileImage : study.previewImage ?? study.image} alt={`${study.title} preview`} />}</div></div></div>
      </section>

      <section className={`${styles.contentSection} ${styles.creamSection}`} id="sitemap">
        <SectionLabel>08 / Sitemap</SectionLabel>
        <h2 className={styles.sectionTitle}>Information architecture</h2>
        <p className={styles.sitemapIntro}>Six top-level sections keep the treatment catalogue browsable instead of one long dropdown.</p>
        <div className={styles.sitemapTree}>
          <div className={styles.sitemapRoot}>Home</div>
          <div className={styles.sitemapBranches}>
            {study.sitemap.map((item) => <article key={item.title}><strong>{item.title}</strong><div>{item.children.map((child) => <span key={child}>{child}</span>)}</div></article>)}
          </div>
        </div>
      </section>

      <section className={styles.cta} id="contact">
        <div><p className={styles.eyebrow}>Have a project in mind?</p><h2>Let&apos;s make something clear.</h2></div>
        <div className={styles.ctaActions}>{study.liveSite && <a className={styles.primaryButton} href={study.liveSite} target="_blank" rel="noreferrer">Visit the site ↗</a>}<Link className={styles.contactButton} href="/#contact">Let&apos;s get in touch <ArrowUpRight size={16} strokeWidth={2.25} aria-hidden="true" /></Link><Link className={styles.secondaryButton} href="/portfolio">Back to work <ArrowUpRight size={16} strokeWidth={2.25} aria-hidden="true" /></Link></div>
      </section>

      <SimpleFooter />
    </main>
  );
}
