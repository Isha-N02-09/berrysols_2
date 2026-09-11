import type { MetadataRoute } from "next";
import { portfolioProjects } from "@/data/portfolio";
import { services } from "@/data/services";
import { blogPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/services", "/portfolio", "/blog", "/faq", "/careers"];
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const portfolioRoutes = portfolioProjects.map((project) => `/portfolio/${project.slug}`);
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...routes, ...serviceRoutes, ...portfolioRoutes, ...blogRoutes].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path.startsWith("/blog/") ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path.split("/").length === 2 ? 0.8 : 0.6,
  }));
}