import type { Metadata } from "next";
import { PageHero, Features, MiniSteps, Pager, SectionHead, accentStyle } from "@/components/ui";

export const metadata: Metadata = { title: "Mill Owner Dashboard – OryzaFlow" };

const arrivals = [
  { lorry: "LB-4521", dealer: "S. Kumar Traders", kg: "8,200", moist: "14.2%", eta: "10:40", st: ["On route", "b"] },
  { lorry: "NC-7714", dealer: "Rasheed & Sons", kg: "6,950", moist: "16.8%", eta: "11:15", st: ["Loading", "y"] },
  { lorry: "EP-2290", dealer: "Vanni Paddy Co.", kg: "9,100", moist: "13.9%", eta: "At gate", st: ["Unloading", "g"] },
  { lorry: "LK-0563", dealer: "Ampara Agro", kg: "7,400", moist: "15.1%", eta: "12:30", st: ["Booked", "b"] },
];

export default function MillDashboard() {
  return (
    <div style={accentStyle("mill")}>
      <PageHero
        k="mill"
        title="PC Dashboard for the"
        accentWord="mill owner."
        lead="The control room for the mill. The owner publishes demand and price, sees every lorry heading to the gate, compares what was sent with what arrived, and approves payment, all from one screen."
        chips={["Modules M5 + M8", "React + TypeScript"]}
      />

      <section className="section" style={{ borderTop: 0, paddingTop: 0 }}>
        <div className="container">
          <div className="desk">
            <div className="desk-top"><i /><i /><i /><span>mill.oryzaflow.lk / dashboard</span></div>
            <div className="desk-body">
              <div className="desk-side">
                <div className="brand-s">OryzaFlow · Mill</div>
                <div className="on">Today</div>
                <div>Demand & price</div>
                <div>Slots</div>
                <div>Incoming lorries</div>
                <div>Intake records</div>
                <div>Payments</div>
                <div>Workers</div>
                <div>Reports</div>
              </div>
              <div className="desk-main">
                <div className="desk-kpis">
                  <div className="dk"><span>Lorries today</span><b>18</b><em>6 on route</em></div>
                  <div className="dk"><span>Expected paddy</span><b>142 t</b><em>vs 120 t target</em></div>
                  <div className="dk"><span>Avg moisture</span><b>14.8%</b><em>dispatch readings</em></div>
                  <div className="dk"><span>Payments pending</span><b>4</b><em>awaiting receipt</em></div>
                </div>
                <div className="desk-grid">
                  <div className="dpanel">
                    <h6>Incoming lorries <span style={{ color: "var(--text-3)" }}>live</span></h6>
                    <table className="dtable">
                      <thead><tr><th>Lorry</th><th>Dealer</th><th>Kg (sent)</th><th>Moist.</th><th>ETA</th><th>Status</th></tr></thead>
                      <tbody>
                        {arrivals.map((a) => (
                          <tr key={a.lorry}>
                            <td>{a.lorry}</td><td>{a.dealer}</td><td>{a.kg}</td><td>{a.moist}</td><td>{a.eta}</td>
                            <td><span className={`tag ${a.st[1]}`}>{a.st[0]}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="dpanel">
                    <h6>Today&apos;s slots <span style={{ color: "var(--text-3)" }}>06:00 – 18:00</span></h6>
                    <div className="slots">
                      {["06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17"].map((h, i) => (
                        <div key={h} className={`slot ${i < 4 ? "f" : i < 9 ? "a" : ""}`}>{h}:00</div>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: 14, marginTop: 12, fontSize: 11.5, color: "var(--text-3)" }}>
                      <span><span className="tag y">■</span> done</span><span><span className="tag g">■</span> booked</span><span>□ open</span>
                    </div>
                    <h6 style={{ marginTop: 18 }}>Sent vs received · EP-2290</h6>
                    <div className="reading"><span>Weight</span><b>9,100 → 9,060 kg</b></div>
                    <div className="reading"><span>Moisture</span><b>13.9% → 14.1%</b></div>
                    <div className="reading"><span>Payable</span><b style={{ color: "var(--c-gold)" }}>Approve ›</b></div>
                  </div>
                </div>
                <div className="dpanel">
                  <h6>Posted demand</h6>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <span className="tag y">Samba · 40 t · ≤14% moisture</span>
                    <span className="tag g">Nadu · 60 t · ≤15% moisture</span>
                    <span className="tag b">Keeri Samba · 20 t</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="note">Mock-up with sample data, for explaining the idea. Final layout comes after design.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <SectionHead num="01" eyebrow="What the owner does" title="Main features" />
            <Features
              items={[
                { t: "Post demand & price", d: "Publish paddy type, quantity, quality limits (e.g. max moisture) and price. Dealers see it in real time." },
                { t: "Manage delivery slots", d: "Open slots per hour so arrivals are spread across the day and gate queues stay short." },
                { t: "Incoming lorries & ETA", d: "Live list and map of every lorry booked to the mill, with dispatch readings already attached." },
                { t: "Sent vs received", d: "Side-by-side dispatch and receiving readings (weight, moisture, quality) for each booking. Differences are flagged." },
                { t: "Approve payments", d: "Once the mill worker confirms receipt, the payment is released from the blocked amount to the dealer." },
                { t: "Season reports", d: "Volumes, average moisture, top dealers, queue times and spend by season (Maha / Yala)." },
              ]}
            />
          </div>
          <div className="card">
            <h3 style={{ fontSize: 20, marginBottom: 14 }}>Who sits under the mill</h3>
            <p style={{ color: "var(--text-2)", fontSize: 14.5 }}>Each mill has its own hierarchy through the unique user codes:</p>
            <div className="feat" style={{ marginTop: 16 }}>
              <div className="feat-item"><div className="ic">M</div><div><h4>Mill owner</h4><p>Full access: demand, price, payments, reports.</p></div></div>
              <div className="feat-item"><div className="ic">A</div><div><h4>Admin officer</h4><p>Confirms receipt; sees intake and slots.</p></div></div>
              <div className="feat-item"><div className="ic">W</div><div><h4>Gate / unloading workers</h4><p>Use the receiving mobile app.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead num="02" eyebrow="A day at the mill" title="How the owner uses it" />
          <MiniSteps
            items={[
              { t: "Morning", d: "Check today's slots, expected tonnage and lorries already on route." },
              { t: "Adjust demand", d: "Raise or lower quantity and price based on stock and machine capacity." },
              { t: "Watch arrivals", d: "See ETAs; the unloading crew is ready before the lorry reaches the gate." },
              { t: "Review readings", d: "Any big weight or moisture gap between sent and received is flagged." },
              { t: "Release payment", d: "Receipt confirmed → payment goes to the dealer immediately." },
            ]}
          />
          <div className="callout" style={{ marginTop: 24 }}>
            <b>To decide:</b> does the owner approve every payment by hand, or is it released automatically when the worker confirms receipt and readings are within tolerance?
          </div>
        </div>
      </section>

      <Pager k="mill" />
    </div>
  );
}
