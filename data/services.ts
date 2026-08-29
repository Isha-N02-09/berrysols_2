export type Capability = {
  title: string;
  description: string;
};

export type TechGroup = {
  label: string;
  items: string[];
};

export type FlowStep = string;

export type CaseStudy = {
  tag: string;
  client: string;
  summary: string;
};

export type Service = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  flow: FlowStep[]; // the small signature "connects the dots" sequence in the hero
  capabilities: Capability[];
  industries: string[];
  tech: TechGroup[];
  caseStudies: CaseStudy[];
  ctaLine: string;
};

export const services: Service[] = [
  {
    slug: "web-development",
    eyebrow: "WEB DEVELOPMENT",
    title: "We build the web around your business.",
    description:
      "From high-converting websites to complex web applications, Berry builds fast, scalable digital experiences designed around how your business actually works.",
    flow: ["Idea", "Design", "Build", "Ship"],
    capabilities: [
      {
        title: "Custom Websites",
        description:
          "Websites designed around your brand, audience and goals — built to load fast and convert.",
      },
      {
        title: "Web Applications",
        description:
          "Scalable applications that power real business workflows, not just marketing pages.",
      },
      {
        title: "E-Commerce",
        description:
          "Digital storefronts engineered to convert traffic into customers at every step.",
      },
      {
        title: "API & Integrations",
        description:
          "Connect your website with the systems your business already runs on.",
      },
    ],
    industries: ["Startups", "E-Commerce", "Healthcare", "Finance", "Education", "Manufacturing"],
    tech: [
      { label: "Frontend", items: ["Next.js", "React", "TypeScript"] },
      { label: "Backend", items: ["Node.js", "Python", ".NET"] },
      { label: "Database", items: ["PostgreSQL", "MySQL", "MongoDB"] },
    ],
    caseStudies: [
      { tag: "E-Commerce", client: "Retail platform rebuild", summary: "Rebuilt a legacy storefront into a fast, headless commerce experience." },
      { tag: "SaaS", client: "Workflow tooling", summary: "Shipped a custom web application replacing three disconnected internal tools." },
      { tag: "Marketing", client: "High-conversion site", summary: "Redesigned a marketing site around a single, clear conversion path." },
    ],
    ctaLine: "Have a website worth rebuilding?",
  },
  {
    slug: "ai-development",
    eyebrow: "AI DEVELOPMENT",
    title: "Turn intelligence into something useful.",
    description:
      "We design and ship AI systems that do real work — agents, automation and models built around your data, not a generic demo.",
    flow: ["Data", "Model", "Insight", "Automation"],
    capabilities: [
      { title: "AI Agents", description: "Autonomous agents that handle multi-step tasks across your tools." },
      { title: "Generative AI", description: "Custom generation workflows for content, code and design." },
      { title: "Machine Learning", description: "Predictive models trained on your business's own data." },
      { title: "NLP & Computer Vision", description: "Understand text, speech and images at production scale." },
      { title: "AI Automation", description: "Replace manual, repetitive work with reliable automated pipelines." },
      { title: "AI Integration", description: "Bring AI into the systems your team already uses every day." },
    ],
    industries: ["Startups", "Healthcare", "Finance", "E-Commerce", "Manufacturing"],
    tech: [
      { label: "AI / ML", items: ["Python", "PyTorch", "TensorFlow", "OpenAI"] },
      { label: "Backend", items: ["Node.js", "Python", "FastAPI"] },
      { label: "Cloud", items: ["AWS", "Azure", "Docker"] },
    ],
    caseStudies: [
      { tag: "AI", client: "Support automation", summary: "Deployed an agent that resolves first-line support tickets end to end." },
      { tag: "AI", client: "Document intelligence", summary: "Built an NLP pipeline that extracts structured data from unstructured files." },
      { tag: "AI", client: "Forecasting model", summary: "Shipped a demand-forecasting model that cut overstock by double digits." },
    ],
    ctaLine: "Have a process worth automating?",
  },
  {
    slug: "cyber-security",
    eyebrow: "CYBER SECURITY",
    title: "Build systems that stay protected.",
    description:
      "Security built in from the start, not bolted on after. We assess, harden and monitor your systems so a breach is never a surprise.",
    flow: ["Assess", "Harden", "Monitor", "Respond"],
    capabilities: [
      { title: "Security Assessment", description: "Full audits that surface real risk, not just checkbox compliance." },
      { title: "Vulnerability Testing", description: "Penetration testing that finds the gaps before attackers do." },
      { title: "Network Security", description: "Hardened infrastructure with least-privilege access by default." },
      { title: "Application Security", description: "Secure coding practices baked into your development pipeline." },
      { title: "Data Protection", description: "Encryption and access controls that keep sensitive data sensitive." },
      { title: "Compliance", description: "Get and stay aligned with the frameworks your industry requires." },
    ],
    industries: ["Finance", "Healthcare", "E-Commerce", "Startups"],
    tech: [
      { label: "Security", items: ["SIEM", "IAM", "WAF"] },
      { label: "Cloud", items: ["AWS", "Azure", "Docker"] },
      { label: "Monitoring", items: ["Datadog", "Grafana"] },
    ],
    caseStudies: [
      { tag: "Security", client: "Fintech hardening", summary: "Closed critical vulnerabilities ahead of a Series B security review." },
      { tag: "Security", client: "Compliance program", summary: "Brought a healthcare platform into HIPAA alignment in under 90 days." },
      { tag: "Security", client: "Incident response", summary: "Built a monitoring stack that cut breach detection time to minutes." },
    ],
    ctaLine: "Not sure where your risk actually is?",
  },
  {
    slug: "digital-marketing",
    eyebrow: "DIGITAL MARKETING",
    title: "Turn attention into growth.",
    description:
      "Strategy, content and paid media working as one system — built to move people from discovery to customer, and track every step.",
    flow: ["Discover", "Engage", "Convert", "Grow"],
    capabilities: [
      { title: "Social Media", description: "Content and campaigns built for where your audience actually is." },
      { title: "Content Marketing", description: "Editorial that builds authority and compounds over time." },
      { title: "Paid Advertising", description: "Performance campaigns optimized against real business outcomes." },
      { title: "Branding", description: "A visual and verbal identity people actually remember." },
      { title: "Email Marketing", description: "Lifecycle campaigns that turn leads into repeat customers." },
      { title: "Analytics", description: "Clear reporting that shows exactly what's working and what isn't." },
    ],
    industries: ["E-Commerce", "Startups", "Education", "Finance"],
    tech: [
      { label: "Analytics", items: ["GA4", "Meta Ads", "Google Ads"] },
      { label: "Automation", items: ["HubSpot", "Klaviyo", "Mailchimp"] },
      { label: "SEO", items: ["Ahrefs", "Search Console"] },
    ],
    caseStudies: [
      { tag: "Marketing", client: "Paid media overhaul", summary: "Cut customer acquisition cost by rebuilding a paid funnel from scratch." },
      { tag: "Marketing", client: "Brand relaunch", summary: "Repositioned a legacy brand for a younger, digital-first audience." },
      { tag: "Marketing", client: "Lifecycle email", summary: "Built an email program that now drives a third of repeat revenue." },
    ],
    ctaLine: "Ready to turn attention into revenue?",
  },
  {
    slug: "cloud-solutions",
    eyebrow: "CLOUD SOLUTIONS",
    title: "Infrastructure built for what's next.",
    description:
      "Cloud architecture that scales with you instead of against you — migration, infrastructure and DevOps handled end to end.",
    flow: ["Assess", "Migrate", "Automate", "Scale"],
    capabilities: [
      { title: "Cloud Migration", description: "Move off legacy infrastructure with zero-downtime cutovers." },
      { title: "Cloud Infrastructure", description: "Architecture designed for reliability first, cost second." },
      { title: "AWS & Azure", description: "Deep expertise across the platforms your business already runs on." },
      { title: "DevOps", description: "CI/CD pipelines that make shipping software boring, in the best way." },
      { title: "Cloud Security", description: "Infrastructure hardened against the mistakes that actually happen." },
      { title: "Monitoring", description: "Full observability, so issues get caught before customers notice." },
    ],
    industries: ["Startups", "Finance", "Manufacturing", "Healthcare"],
    tech: [
      { label: "Cloud", items: ["AWS", "Azure", "GCP"] },
      { label: "DevOps", items: ["Docker", "Kubernetes", "Terraform"] },
      { label: "Monitoring", items: ["Datadog", "Grafana", "Prometheus"] },
    ],
    caseStudies: [
      { tag: "Cloud", client: "Legacy migration", summary: "Migrated a monolith off on-prem servers with zero customer downtime." },
      { tag: "Cloud", client: "Infrastructure rebuild", summary: "Cut cloud spend by a third with right-sized, automated infrastructure." },
      { tag: "Cloud", client: "CI/CD pipeline", summary: "Reduced deploy time from hours to minutes with a new release pipeline." },
    ],
    ctaLine: "Is your infrastructure holding you back?",
  },
  {
    slug: "mobile-app-development",
    eyebrow: "MOBILE APP DEVELOPMENT",
    title: "Ideas that belong in your users' hands.",
    description:
      "Native and cross-platform apps built for speed, feel and real adoption — from first prototype to app store launch.",
    flow: ["Prototype", "Build", "Test", "Launch"],
    capabilities: [
      { title: "iOS Development", description: "Native apps that feel exactly the way iOS users expect." },
      { title: "Android Development", description: "Performant native apps built for the widest device range." },
      { title: "Cross-Platform", description: "Flutter and React Native builds that ship to both stores faster." },
      { title: "App UI/UX", description: "Interfaces designed around how people actually hold and use a phone." },
      { title: "App Maintenance", description: "Ongoing updates, monitoring and support after launch." },
      { title: "App Store Launch", description: "Guided submission and ASO so the right people actually find it." },
    ],
    industries: ["Startups", "E-Commerce", "Healthcare", "Education"],
    tech: [
      { label: "Native", items: ["Swift", "Kotlin"] },
      { label: "Cross-Platform", items: ["Flutter", "React Native"] },
      { label: "Backend", items: ["Node.js", "Firebase"] },
    ],
    caseStudies: [
      { tag: "Mobile", client: "Consumer app launch", summary: "Took a startup from prototype to a top-charting app store launch." },
      { tag: "Mobile", client: "Healthcare app", summary: "Built a HIPAA-compliant patient app used by thousands of clinicians." },
      { tag: "Mobile", client: "Cross-platform rebuild", summary: "Merged separate iOS and Android codebases into one Flutter app." },
    ],
    ctaLine: "Got an app idea worth building right?",
  },
  {
    slug: "seo-audit",
    eyebrow: "SEO AUDIT",
    title: "Find what's holding your search performance back.",
    description:
      "A full technical, content and authority audit that tells you exactly why you're not ranking — and exactly what to fix first.",
    flow: ["Technical", "Content", "Performance", "Authority"],
    capabilities: [
      { title: "Technical SEO", description: "Crawlability, indexing and site architecture, fixed at the root cause." },
      { title: "Content Audit", description: "Find what's thin, outdated or cannibalizing your own rankings." },
      { title: "Site Performance", description: "Core Web Vitals fixes that improve rankings and user experience." },
      { title: "Backlink Audit", description: "Understand your authority profile and where it's leaking value." },
      { title: "Competitor Analysis", description: "See exactly what's outranking you, and why." },
      { title: "Roadmap & Reporting", description: "A prioritized action plan, not a hundred-page PDF nobody reads." },
    ],
    industries: ["E-Commerce", "Startups", "Education", "Finance"],
    tech: [
      { label: "SEO Tools", items: ["Ahrefs", "Semrush", "Search Console"] },
      { label: "Performance", items: ["Lighthouse", "PageSpeed Insights"] },
      { label: "Analytics", items: ["GA4", "Looker Studio"] },
    ],
    caseStudies: [
      { tag: "SEO", client: "Technical cleanup", summary: "Fixed indexing issues that had suppressed organic traffic for a year." },
      { tag: "SEO", client: "Content audit", summary: "Consolidated overlapping pages and doubled organic click-through rate." },
      { tag: "SEO", client: "Site speed overhaul", summary: "Cut load times in half, lifting both rankings and conversion rate." },
    ],
    ctaLine: "Want to know exactly what's wrong first?",
  },
  {
    slug: "software-development",
    eyebrow: "SOFTWARE DEVELOPMENT",
    title: "Software built around the way you work.",
    description:
      "Custom software, SaaS platforms and enterprise systems designed around your actual workflows — not the other way around.",
    flow: ["Discover", "Architect", "Build", "Support"],
    capabilities: [
      { title: "Custom Software", description: "Purpose-built systems designed around your exact requirements." },
      { title: "SaaS Platforms", description: "Multi-tenant products built to scale from first customer to thousandth." },
      { title: "Enterprise Applications", description: "Systems that hold up under real organizational complexity." },
      { title: "CRM & ERP", description: "Business systems tailored to how your teams actually operate." },
      { title: "API Development", description: "Robust, documented APIs that other systems can build on." },
      { title: "Integrations", description: "Connect the software you already depend on into one workflow." },
    ],
    industries: ["Startups", "Manufacturing", "Finance", "Healthcare"],
    tech: [
      { label: "Backend", items: ["Node.js", "Python", ".NET", "Java"] },
      { label: "Frontend", items: ["React", "Next.js", "TypeScript"] },
      { label: "Database", items: ["PostgreSQL", "MongoDB", "Redis"] },
    ],
    caseStudies: [
      { tag: "Software", client: "SaaS platform build", summary: "Built a multi-tenant SaaS product from zero to first paying customers." },
      { tag: "Software", client: "ERP integration", summary: "Connected five disconnected internal tools into one workflow." },
      { tag: "Software", client: "Enterprise system", summary: "Replaced a decade-old internal tool with a modern, maintainable system." },
    ],
    ctaLine: "Have a workflow that deserves better software?",
  },
  {
    slug: "it-services-for-startups",
    eyebrow: "IT SERVICES FOR STARTUPS",
    title: "Your startup needs momentum. Not IT headaches.",
    description:
      "One partner for strategy, product, cloud, security and support — so your team can focus on building the business, not managing infrastructure.",
    flow: ["Idea", "Build", "Launch", "Scale"],
    capabilities: [
      { title: "IT Strategy", description: "A technology roadmap that matches where your startup actually is." },
      { title: "Product Development", description: "Ship your first version fast, without cutting corners you'll regret." },
      { title: "Cloud Setup", description: "Infrastructure that's right-sized for today and ready for growth." },
      { title: "Cybersecurity", description: "The essential protections investors and customers expect early." },
      { title: "Software Support", description: "Ongoing help so nothing breaks while your team is heads-down." },
      { title: "AI Enablement", description: "Practical AI wins that save time without adding complexity." },
    ],
    industries: ["Startups", "E-Commerce", "Fintech", "Healthtech"],
    tech: [
      { label: "Cloud", items: ["AWS", "Vercel", "Supabase"] },
      { label: "Product", items: ["Next.js", "React", "Node.js"] },
      { label: "Ops", items: ["Docker", "GitHub Actions"] },
    ],
    caseStudies: [
      { tag: "Startups", client: "MVP to launch", summary: "Took a pre-seed startup from idea to launched product in 10 weeks." },
      { tag: "Startups", client: "Fractional IT", summary: "Became the ongoing technology partner for a Series A team of 15." },
      { tag: "Startups", client: "Security readiness", summary: "Got a startup investor-ready with essential security controls in place." },
    ],
    ctaLine: "Building a startup and need a technology partner?",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllSlugs(): string[] {
  return services.map((s) => s.slug);
}
