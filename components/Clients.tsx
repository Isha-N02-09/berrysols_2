"use client";

const reviews = [
  {
    quote: "With successful integration of Berrysols with our core systems like inventory, reservation and ticketing, passengers get a completely rich experience.",
    name: "Chamara Perera",
    title: "Group Head of IT",
    company: "Skyway",
    initials: "CP",
  },
  {
    quote: "Since partnering with Berrysols, we have seen an increase in direct bookings, add-ons and overall guest engagement through our website.",
    name: "Suresh Abbas",
    title: "General Manager",
    company: "Horizon",
    initials: "SA",
  },
  {
    quote: "The team worked closely with us, taking on every challenge to personalize the solution to our needs. One of the first initiatives of its kind for us.",
    name: "Suneth Jayamanne",
    title: "Chief Information Officer",
    company: "Meridian",
    initials: "SJ",
  },
  {
    quote: "Berrysols connected booking and service into one effortless customer experience. Our team now has more time for the moments that matter.",
    name: "Amina Rahman",
    title: "Director of Digital",
    company: "Alto",
    initials: "AR",
  },
  {
    quote: "From first enquiry to confirmation, the agent feels like an extension of our staff. Response times dropped and satisfaction went up.",
    name: "Marcus Chen",
    title: "VP Customer Experience",
    company: "Northstar",
    initials: "MC",
  },
];

function Card({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="review-card">
      <p className="review-quote">“{review.quote}”</p>
      <footer>
        <span className="review-avatar">{review.initials}</span>
        <b>{review.name}<small>{review.title}</small></b>
        <em>{review.company}</em>
      </footer>
    </article>
  );
}

export default function Testimonials() {
  const loop = [...reviews, ...reviews];

  return (
    <section className="reviews" id="reviews">
      <div className="reviews-head">
        <h2>What clients say</h2>
        <p>Real feedback from the people, companies and industries running Berrysols in production.</p>
      </div>
      <div className="reviews-viewport">
        <div className="reviews-track">
          {loop.map((review, index) => (
            <Card review={review} key={`${review.name}-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
