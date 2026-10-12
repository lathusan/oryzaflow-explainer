import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { faces, type FaceKey } from "@/lib/content";
import { FaceIcon } from "./Icons";

export function SectionHead({ num, eyebrow, title, children }: { num: string; eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="section-head">
      <div className="section-num">{num}</div>
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
        {children && <p>{children}</p>}
      </div>
    </div>
  );
}

export function PageHero({ k, title, accentWord, lead, chips }: { k: FaceKey; title: string; accentWord: string; lead: string; chips: string[] }) {
  const f = faces.find((x) => x.key === k)!;
  return (
    <section className="page-hero" style={{ ["--accent" as string]: f.color } as CSSProperties}>
      <div className="container">
        <div className="crumb rise"><Link href="/">Overview</Link><span>/</span><span>{f.short}</span></div>
        <div className="face-icon rise" style={{ marginBottom: 20, ["--accent" as string]: f.color } as CSSProperties}>
          <FaceIcon k={k} />
        </div>
        <h1 className="rise d1">{title} <em>{accentWord}</em></h1>
        <p className="lead rise d2">{lead}</p>
        <div className="chips rise d3">
          <span className="chip">{f.platform}</span>
          <span className="chip">In the docs: {f.inDocs}</span>
          {chips.map((c) => <span key={c} className="chip">{c}</span>)}
        </div>
      </div>
    </section>
  );
}

export function Features({ items }: { items: { t: string; d: string }[] }) {
  return (
    <div className="feat">
      {items.map((it, i) => (
        <div className="feat-item" key={it.t}>
          <div className="ic">{i + 1}</div>
          <div><h4>{it.t}</h4><p>{it.d}</p></div>
        </div>
      ))}
    </div>
  );
}

export function MiniSteps({ items }: { items: { t: string; d: string }[] }) {
  return (
    <div className="steps-row">
      {items.map((s) => (
        <div className="step-mini" key={s.t}><b>{s.t}</b><span>{s.d}</span></div>
      ))}
    </div>
  );
}

export function Pager({ k }: { k: FaceKey }) {
  const i = faces.findIndex((f) => f.key === k);
  const prev = i === 0 ? { href: "/", title: "System overview" } : faces[i - 1];
  const next = i === faces.length - 1 ? { href: "/", title: "Back to overview" } : faces[i + 1];
  return (
    <div className="container"><div className="pager">
      <Link href={prev.href}><small>Previous</small><b>← {prev.title}</b></Link>
      <Link href={next.href} className="r"><small>Next</small><b>{next.title} →</b></Link>
    </div></div>
  );
}

export function Phone({ children, time = "9:41" }: { children: ReactNode; time?: string }) {
  return (
    <div className="phone">
      <div className="phone-screen">
        <div className="phone-status"><span>{time}</span><span>4G ▮▮▮</span></div>
        <div className="phone-notch" />
        {children}
      </div>
    </div>
  );
}

export function accentStyle(k: FaceKey): CSSProperties {
  const f = faces.find((x) => x.key === k)!;
  return { ["--accent" as string]: f.color } as CSSProperties;
}
