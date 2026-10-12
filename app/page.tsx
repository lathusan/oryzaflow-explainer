import Link from "next/link";
import type { CSSProperties } from "react";
import {
  company, keyFacts, problems, flowSteps, faces, observations, openQuestions,
  stack, modules, phases, revenue, kpis, people, docFile,
} from "@/lib/content";
import { SectionHead } from "@/components/ui";
import { Arrow, Download, FaceIcon } from "@/components/Icons";

const whoColor: Record<string, string> = {
  "Mill owner": "var(--c-gold)",
  Dealer: "var(--c-emerald)",
  IoT: "var(--c-violet)",
  Bank: "var(--text-2)",
  Driver: "var(--c-sky)",
  "Mill worker": "var(--c-coral)",
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <span className="chip rise"><span className="dot" /> System walkthrough · {company.docDate}</span>
          <h1 className="rise d1">
            From paddy field<br />to rice mill, <span className="grad">in one flow.</span>
          </h1>
          <p className="lead rise d2">{company.pitch}</p>
          <p className="tamil rise d2">{company.pitchTamil}</p>
          <div className="hero-actions rise d3">
            <a href="#flow" className="btn btn-primary">See the trip flow <Arrow /></a>
            <a href={docFile} download className="btn btn-ghost"><Download /> Download document</a>
          </div>
          <div className="facts rise d3">
            {keyFacts.map((f) => (
              <div className="fact" key={f.label}><span>{f.label}</span><strong>{f.value}</strong></div>
            ))}
          </div>
        </div>
      </section>

      {/* 01 WHAT */}
      <section className="section" id="what">
        <div className="container">
          <SectionHead num="01" eyebrow="What OryzaFlow is" title="A digital platform for Sri Lanka's paddy (நெல்) supply chain">
            Today the trade runs on phone calls, trust and paper. OryzaFlow replaces that with one flow and a neutral, time-stamped record at every step.
          </SectionHead>
          <div className="ps">
            <div className="card ps-col">
              <h3><span style={{ color: "var(--c-coral)" }}>●</span> The problem today</h3>
              {problems.map((p) => (
                <div className="pain" key={p.who}><b>{p.who}</b><span>{p.pain}</span></div>
              ))}
            </div>
            <div className="card ps-col">
              <h3><span style={{ color: "var(--c-emerald)" }}>●</span> The OryzaFlow way</h3>
              <div className="pipeline">
                <span>Book</span><i>→</i><span>Measure</span><i>→</i><span>Track</span><i>→</i><span>Receive</span><i>→</i><span>Pay</span>
              </div>
              <div className="pain"><b>Demand & price visibility</b><span>Mills publish what they need and what they pay; dealers see it live.</span></div>
              <div className="pain"><b>Slot booking</b><span>Arrivals are levelled across the day, so gate queues shrink.</span></div>
              <div className="pain"><b>Verified measurement</b><span>IoT weight, moisture and quality readings that both sides see.</span></div>
              <div className="pain"><b>Guaranteed payment</b><span>Bank blocks funds before the lorry leaves; released on receipt.</span></div>
              <div className="pain"><b>One trusted record</b><span>Every reading, confirmation and release is time-stamped and tied to the booking.</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 FLOW */}
      <section className="section" id="flow">
        <div className="container">
          <SectionHead num="02" eyebrow="Core trip flow" title="Seven steps, one booking">
            Every delivery follows the same path. Payment is released only when the mill confirms receipt.
          </SectionHead>
          <div className="flow">
            {flowSteps.map((s) => (
              <div className={`flow-step ${s.n === 7 ? "key" : ""}`} key={s.n}>
                <div className="flow-n">{s.n}</div>
                <div className="flow-body"><h4>{s.title}</h4><p>{s.text}</p></div>
                <span className="flow-who" style={{ color: whoColor[s.who], background: `color-mix(in srgb, ${whoColor[s.who]} 14%, transparent)` }}>{s.who}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 FACES */}
      <section className="section" id="faces">
        <div className="container">
          <SectionHead num="03" eyebrow="The 4 faces + IoT" title="Who uses what">
            One PC dashboard, three mobile apps and an IoT layer, all on one backend. Each maps to a role already described in the documents.
          </SectionHead>
          <div className="grid-3">
            {faces.map((f) => (
              <Link href={f.href} key={f.key} className="card face-card" style={{ ["--accent" as string]: f.color } as CSSProperties}>
                <div className="face-icon"><FaceIcon k={f.key} /></div>
                <div>
                  <h3>{f.title}</h3>
                  <div className="face-meta">{f.platform} · {f.inDocs}</div>
                </div>
                <ul>{f.jobs.map((j) => <li key={j}>{j}</li>)}</ul>
                <span className="face-link">Open page <Arrow /></span>
              </Link>
            ))}
            <div className="card face-card" style={{ ["--accent" as string]: "var(--text-2)" } as CSSProperties}>
              <h3>Unique user code</h3>
              <p style={{ color: "var(--text-2)", fontSize: 14.5 }}>
                Everyone is onboarded through KYC (identity checks) and receives one code. It fixes their role and where they sit: workers under their mill, drivers under their lorry owner, dealers linked to the mills they supply.
              </p>
              <p style={{ color: "var(--text-3)", fontSize: 13.5 }}>Used on every booking, IoT reading, tracking record and payment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 OBSERVATIONS */}
      <section className="section" id="observations">
        <div className="container">
          <SectionHead num="04" eyebrow="Observations" title="What we noticed in the documents" />
          <div className="grid-2">
            {observations.map((o, i) => (
              <div className="card obs" key={o.title}>
                <div className="obs-i">{i + 1}</div>
                <div><h4>{o.title}</h4><p>{o.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 QUESTIONS */}
      <section className="section" id="questions">
        <div className="container">
          <SectionHead num="05" eyebrow="Open questions" title="To decide before development">
            These answers shape the IoT hardware, the payment flow and the scope of version 1.
          </SectionHead>
          <ul className="q-list">
            {openQuestions.map((q) => (
              <li key={q}><span className="q-box" /><span>{q}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* 06 PROJECT */}
      <section className="section" id="project">
        <div className="container">
          <SectionHead num="06" eyebrow="Project at a glance" title="Plan, stack, money and targets">
            From the Project Proposal. Prices and dates are planning estimates to be confirmed.
          </SectionHead>

          <h3 className="subhead">Timeline · ~10 months</h3>
          <div className="phases">
            {phases.map((p, i) => (
              <div className={`phase ${i === phases.length - 1 ? "last" : ""}`} key={p.name}>
                <b>{p.name}</b><span>{p.when}</span><small>Gate: {p.gate}</small>
              </div>
            ))}
          </div>

          <div className="grid-2" style={{ marginTop: 48 }}>
            <div>
              <h3 className="subhead">Technology stack</h3>
              <div className="table-wrap">
                <table style={{ minWidth: 0 }}>
                  <thead><tr><th>Layer</th><th>Technology</th></tr></thead>
                  <tbody>{stack.map((s) => <tr key={s.layer}><td>{s.layer}</td><td>{s.tech}</td></tr>)}</tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="subhead">System modules</h3>
              <div className="table-wrap">
                <table style={{ minWidth: 0 }}>
                  <thead><tr><th>#</th><th>Module</th><th>Release</th></tr></thead>
                  <tbody>
                    {modules.map((m) => (
                      <tr key={m.id}><td>{m.id}</td><td>{m.name}</td><td><span className={`tag ${m.release === "Pilot" ? "g" : "y"}`}>{m.release}</span></td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <h3 className="subhead">Revenue model</h3>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Stream</th><th>Who pays</th><th>Proposed price</th></tr></thead>
              <tbody>{revenue.map((r) => <tr key={r.stream}><td>{r.stream}</td><td>{r.who}</td><td>{r.price}</td></tr>)}</tbody>
            </table>
          </div>
          <p className="note">Truckers and loaders join free, so the platform fills with capacity first. The bank holds trade funds, never OryzaFlow.</p>

          <h3 className="subhead">Targets · first 12 months after launch</h3>
          <div className="kpis">
            {kpis.map((k) => <div className="kpi" key={k.label}><b>{k.value}</b><span>{k.label}</span></div>)}
          </div>

          <h3 className="subhead">People</h3>
          <div className="people">
            {people.map((p) => (
              <div className="card person" key={p.name}>
                <div className="avatar">{p.name[0]}</div>
                <div><b>{p.name}</b><span>{p.role}</span><p>{p.note}</p></div>
              </div>
            ))}
          </div>
          <p className="note">Planned team: project manager / BA, UI/UX designer, 2 backend developers, mobile developer, web developer, QA engineer and 2 field coordinators.</p>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section className="section" id="download">
        <div className="container">
          <div className="download">
            <div className="doc-icon">PDF</div>
            <div>
              <h3>OryzaFlow – System Understanding</h3>
              <p>The full write-up behind this walkthrough: overview, trip flow, the 4 faces + IoT, observations and open questions. {company.docDate} · Lathusan.</p>
            </div>
            <a href={docFile} download className="btn btn-primary"><Download /> Download PDF</a>
          </div>
        </div>
      </section>
    </>
  );
}
