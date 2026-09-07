"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { PortfolioProject } from "@/data/portfolio";

type PortfolioListProps = {
  projects: PortfolioProject[];
};

const projectsPerPage = 9;

export default function PortfolioList({ projects }: PortfolioListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const featuredProject = projects[0];
  const remainingProjects = useMemo(() => projects.slice(1), [projects]);
  const totalPages = Math.max(1, Math.ceil(Math.max(remainingProjects.length, 0) / projectsPerPage));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedProjects = useMemo(() => {
    return remainingProjects.slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage);
  }, [currentPage, remainingProjects]);

  return (
    <section className="blog-sheet-posts" aria-label="Portfolio case studies">
      <div className="blog-portfolio-divider" aria-hidden="true" />
      <div className="blog-section-heading">
        <span>Selected work</span>
      </div>

      {currentPage === 1 && featuredProject && (
        <div className="blog-feature" aria-label="Featured portfolio project">
          <div className="blog-feature-image-wrap">
            <img src={featuredProject.image} alt="" className="blog-feature-image" />
            <span className="blog-feature-badge">Case<br />study</span>
          </div>

          <div className="blog-feature-card">
            <p className="blog-feature-kicker">Featured / {featuredProject.category}</p>
            <h2>{featuredProject.title}</h2>
            <p className="blog-feature-excerpt">{featuredProject.excerpt}</p>
            <Link href={featuredProject.href} className="blog-feature-link">
              View case study
            </Link>
          </div>
        </div>
      )}

      <div className="blog-post-grid">
        {paginatedProjects.map((project, index) => (
          <article key={project.title} className="blog-post-card group">
            <Link href={project.href} className="blog-post-image-wrap">
              <img src={project.image} alt="" className="blog-post-image" />
            </Link>
            <div className="blog-post-copy">
              <div className="blog-post-meta">
                <span>{project.category}</span>
                <span>Case study</span>
              </div>
              <h2>
                <Link href={project.href}>{project.title}</Link>
              </h2>
              <p>{project.excerpt}</p>
              <div className="blog-post-footer">
                <Link href={project.href}>View case study</Link>
                <span>{String((currentPage - 1) * projectsPerPage + index + 1).padStart(2, "0")}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="blog-pagination" aria-label="Portfolio pagination">
        <button type="button" onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))} disabled={currentPage === 1}>
          Prev
        </button>

        <div className="blog-pagination-pages">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              type="button"
              className={currentPage === page ? "is-active" : ""}
              aria-current={currentPage === page ? "page" : undefined}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>

        <button type="button" onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages))} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </section>
  );
}
