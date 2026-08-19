"use client";

import { useEffect, useRef, useState } from "react";

const products = [
  {
    name: "Scholara",
    kind: "Student management system",
    copy: "Admissions, attendance, fees and results for schools and campuses, in one record for every student.",
    badge: "Education",
    rows: [["Enrolled students", "4,812"], ["Fee collection", "96%"], ["Attendance today", "91%"]],
    chart: [42, 58, 51, 74, 66, 88, 79],
  },
  {
    name: "MediDesk",
    kind: "Clinic & patient portal",
    copy: "Appointments, patient histories and prescriptions with reminders that cut no-shows for busy clinics.",
    badge: "Healthcare",
    rows: [["Appointments today", "128"], ["Avg wait time", "9 min"], ["No-show rate", "3.1%"]],
    chart: [55, 47, 68, 62, 81, 73, 92],
  },
  {
    name: "FleetPulse",
    kind: "Fleet tracking dashboard",
    copy: "Live vehicle positions, route history and maintenance alerts for logistics and transport teams.",
    badge: "Mobility",
    rows: [["Active vehicles", "246"], ["On-time delivery", "94%"], ["Idle alerts", "12"]],
    chart: [38, 62, 55, 70, 84, 61, 77],
  },
  {
    name: "ShopGrid",
    kind: "Retail POS & inventory",
    copy: "Counter sales, stock movement and supplier orders synced across every branch in real time.",
    badge: "Retail",
    rows: [["Daily orders", "1,304"], ["Stock accuracy", "99%"], ["Low-stock items", "27"]],
    chart: [48, 66, 59, 82, 71, 90, 85],
  },
  {
    name: "PayrollIQ",
    kind: "HR & payroll suite",
    copy: "Onboarding, leave, timesheets and payslips handled in one cycle your finance team can trust.",
    badge: "Operations",
    rows: [["Employees", "1,940"], ["Payroll cycle", "2 days"], ["Leave requests", "56"]],
    chart: [52, 44, 67, 75, 63, 86, 94],
  },
  {
    name: "CargoLine",
    kind: "Logistics booking portal",
    copy: "Quotes, shipment booking and customs paperwork tracked from pickup through final delivery.",
    badge: "Freight",
    rows: [["Shipments in transit", "612"], ["Ports covered", "34"], ["Docs auto-filed", "88%"]],
    chart: [45, 60, 72, 58, 79, 91, 83],
  },
];

export default function Products() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;
    let queued = false;

    const update = () => {
      queued = false;
      const rect = track.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const progress = travel <= 0 ? 0 : Math.min(1, Math.max(0, -rect.top / travel));
      const position = progress * (products.length - 1);
      stage.style.setProperty("--p", position.toFixed(4));
      const nearest = Math.round(position);
      setActive((current) => (current === nearest ? current : nearest));
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="products-scroll" ref={trackRef} id="products">
      <section className="products">
        <div className="products-bg" aria-hidden="true">
          <span>OUR PRODUCTS ✦ OUR PRODUCTS</span>
          <span>BUILT BY BERRYSOLS</span>
        </div>

        <div className="products-head">
          <span className="section-index">Selected work</span>
          <h2>Products we have <em>shipped.</em></h2>
        </div>

        <div className="product-stage" ref={stageRef}>
          {products.map((product, index) => (
            <article className="product-card" key={product.name} style={{ "--n": String(index) } as React.CSSProperties}>
              <div className="product-face">
                <span className="product-badge">{product.badge}</span>
                <div className="product-window">
                  <div className="pw-top"><i /><i /><i />{product.name}</div>
                  <div className="pw-body">
                    {product.rows.map((row) => (
                      <div className="pw-row" key={row[0]}>{row[0]}<b>{row[1]}</b></div>
                    ))}
                    <div className="pw-chart">
                      {product.chart.map((bar, barIndex) => <i key={barIndex} style={{ height: `${bar}%` }} />)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-copy">
                <small>{product.kind}</small>
                <h3>{product.name}</h3>
                <p>{product.copy}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="product-dots" aria-hidden="true">
          {products.map((product, index) => <span className={index === active ? "on" : ""} key={product.name} />)}
        </div>
      </section>
    </div>
  );
}
