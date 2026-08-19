"use client";

import { useMemo, useState } from "react";

const agentBuckets = [
  { label: "1–10", count: 10 },
  { label: "11–25", count: 18 },
  { label: "26–50", count: 38 },
  { label: "51–100", count: 75 },
  { label: "100+", count: 120 },
];

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default function ROI() {
  const [conversations, setConversations] = useState(10000);
  const [bucket, setBucket] = useState(0);
  const [salary, setSalary] = useState(4200);
  const [resolution, setResolution] = useState(8);

  const result = useMemo(() => {
    const agents = agentBuckets[bucket].count;
    const tickets = Math.round(conversations * 0.85);
    const hoursYear = Math.round(conversations * (resolution / 60) * 12 * 0.35);
    const hourly = salary / 160;
    const year1 = Math.round(tickets * hourly * (resolution / 60) * 12);
    const payroll = agents * salary * 12;
    return {
      tickets,
      hoursYear,
      year1,
      monthly: Math.round(year1 / 12),
      fiveYear: year1 * 5,
      offset: payroll === 0 ? 0 : Math.round((year1 / payroll) * 100),
      reassigned: Math.max(1, Math.round(agents * 0.9)),
    };
  }, [bucket, conversations, resolution, salary]);

  return (
    <section className="section roi" id="roi">
      <div className="roi-panel">
        <div className="roi-controls">
          <span className="section-index">04 — Impact</span>
          <h2>
            Calculate <em>ROI</em>
          </h2>
          <p>Discover how much money and time Berrysols puts back into your business.</p>

          <label>
            Customer Conversations (Monthly)
            <b>{conversations >= 1000 ? `${Math.round(conversations / 1000)}K` : conversations}</b>
            <input
              type="range"
              min={1000}
              max={50000}
              step={1000}
              value={conversations}
              onChange={(event) => setConversations(Number(event.target.value))}
            />
          </label>

          <label>
            Number of Agents
            <div className="agent-pills">
              {agentBuckets.map((item, index) => (
                <button
                  type="button"
                  className={bucket === index ? "on" : ""}
                  key={item.label}
                  onClick={() => setBucket(index)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </label>

          <label>
            Agent&apos;s Salary (Monthly)
            <b>${(salary / 1000).toFixed(1)}K</b>
            <input
              type="range"
              min={2000}
              max={9000}
              step={100}
              value={salary}
              onChange={(event) => setSalary(Number(event.target.value))}
            />
          </label>

          <label>
            Average Resolution Time (Minutes)
            <b>{resolution}m</b>
            <input
              type="range"
              min={2}
              max={20}
              step={1}
              value={resolution}
              onChange={(event) => setResolution(Number(event.target.value))}
            />
          </label>
        </div>

        <div className="roi-results">
          <small>Year 1 Savings</small>
          <div className="saving-value">{money.format(result.year1)}</div>
          <p>That&apos;s {money.format(result.monthly)} saved every month!</p>
          <div className="result-grid">
            <span>
              <b>{result.tickets.toLocaleString()}</b>
              <small>Automated tickets / month</small>
            </span>
            <span>
              <b>{money.format(result.fiveYear)}</b>
              <small>5-year projection</small>
            </span>
            <span>
              <b>{result.offset}%</b>
              <small>Payroll offset</small>
            </span>
            <span>
              <b>{result.hoursYear.toLocaleString()}</b>
              <small>Hours saved / year · 35% time reduction</small>
            </span>
            <span className="result-wide">
              <b>{result.reassigned}</b>
              <small>Agents reassigned to higher-value work</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
