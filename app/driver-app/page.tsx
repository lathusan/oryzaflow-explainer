import type { Metadata } from "next";
import { PageHero, Features, MiniSteps, Pager, SectionHead, Phone, accentStyle } from "@/components/ui";

export const metadata: Metadata = { title: "Transport Drivers App – OryzaFlow" };

export default function DriverApp() {
  return (
    <div style={accentStyle("driver")}>
      <PageHero
        k="driver"
        title="Mobile app for"
        accentWord="transport drivers."
        lead="Lorry owners and drivers get jobs without phoning around. They accept a trip, navigate to the field and the mill, upload photo proof of loading, and their GPS keeps everyone updated, so there are fewer empty kilometres and idle days."
        chips={["Modules M3 + M4", "Flutter · Android first", "Joins free"]}
      />

      <section className="section" style={{ borderTop: 0, paddingTop: 0 }}>
        <div className="container">
          <div className="phones">
            <Phone>
              <div className="phone-head"><small>Nimal · LB-4521 · 10 t</small><h5>New job offer</h5></div>
              <div className="phone-body">
                <div className="p-card hl">
                  <div className="p-lbl">Pickup in 25 min</div>
                  <div className="p-big">LKR 18,500</div>
                  <div className="p-lbl">Fare for this trip · 42 km</div>
                </div>
                <div className="p-card">
                  <div className="p-lbl">Pickup</div><b>Field · Sammanthurai, Ampara</b>
                  <div className="p-lbl" style={{ marginTop: 8 }}>Drop</div><b>Anchor Mill A · slot 11:00</b>
                </div>
                <div className="p-card">
                  <div className="p-row"><span className="p-lbl">Load</span><b>~8,200 kg · 164 bags</b></div>
                  <div className="p-row"><span className="p-lbl">Dealer</span><b>S. Kumar Traders</b></div>
                </div>
                <div className="p-two" style={{ marginTop: "auto" }}>
                  <div className="p-btn" style={{ background: "#e3ece7", color: "#0d1f17" }}>Reject</div>
                  <div className="p-btn alt">Accept</div>
                </div>
              </div>
            </Phone>

            <Phone>
              <div className="phone-head"><small>Trip #OF-20418</small><h5>Loading at field</h5></div>
              <div className="phone-body">
                <div className="p-card">
                  <div className="p-lbl">Photo proof</div>
                  <div className="p-two" style={{ marginTop: 8 }}>
                    <div style={{ height: 70, borderRadius: 10, background: "linear-gradient(135deg,#c9b27a,#8d7a45)" }} />
                    <div style={{ height: 70, borderRadius: 10, border: "2px dashed #b9d3c5", display: "grid", placeItems: "center", color: "#5b7368", fontWeight: 700 }}>+ Add</div>
                  </div>
                </div>
                <div className="p-card">
                  <div className="p-row"><span className="p-lbl">Bags loaded</span><span className="p-val">164</span></div>
                  <div className="p-row"><span className="p-lbl">IoT weight</span><span className="p-val">8,200 kg</span></div>
                  <div className="p-row"><span className="p-lbl">Dealer confirmed</span><span className="p-pill">Yes</span></div>
                </div>
                <div className="p-card">
                  <div className="p-lbl">Trip status</div>
                  {[["Accepted", true], ["At pickup", true], ["Loaded", true], ["On route", false], ["At mill", false]].map(([s, d]) => (
                    <div className="p-row" key={s as string} style={{ marginTop: 4 }}><span>{s as string}</span><span className={`p-pill ${d ? "" : "warn"}`}>{d ? "✓" : "…"}</span></div>
                  ))}
                </div>
                <div className="p-btn">Start trip to mill</div>
              </div>
            </Phone>

            <Phone>
              <div className="phone-head"><small>Navigating</small><h5>18 km to mill</h5></div>
              <div className="phone-body">
                <div className="p-map" style={{ height: 210 }}>
                  <svg viewBox="0 0 252 210" width="100%" height="210">
                    <path d="M30 200 L30 140 C30 110 80 120 110 100 S180 60 200 20" stroke="#b9d3c5" strokeWidth="14" fill="none" strokeLinecap="round" />
                    <path d="M30 200 L30 140 C30 110 80 120 110 100" stroke="#4cb8f5" strokeWidth="5" fill="none" strokeLinecap="round" />
                    <circle cx="110" cy="100" r="10" fill="#4cb8f5" stroke="#fff" strokeWidth="3" />
                    <rect x="186" y="8" width="30" height="22" rx="5" fill="#f4b740" />
                  </svg>
                </div>
                <div className="p-card">
                  <div className="p-row"><span className="p-lbl">ETA</span><span className="p-val">10:40</span></div>
                  <div className="p-row"><span className="p-lbl">Speed</span><b>48 km/h</b></div>
                  <div className="p-row"><span className="p-lbl">Driving score</span><span className="p-pill">Good</span></div>
                </div>
                <div className="p-btn alt">Arrived at mill gate</div>
              </div>
            </Phone>
          </div>
          <p className="note" style={{ textAlign: "center" }}>Mock-up screens with sample names and numbers.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <SectionHead num="01" eyebrow="What the driver does" title="Main features" />
            <Features
              items={[
                { t: "Job offers", d: "Matched by lorry capacity and distance. Accept or reject in the app." },
                { t: "Navigation", d: "Google Maps route to the field, then to the mill and its booked slot." },
                { t: "Photo proof", d: "Photos of the loaded paddy and the bag count are attached to the trip." },
                { t: "Live GPS", d: "The dealer and mill see the lorry and ETA in real time." },
                { t: "Status updates", d: "Accepted → at pickup → loaded → on route → at mill, with one tap each." },
                { t: "Earnings & history", d: "Completed trips, fares and ratings in one place." },
              ]}
            />
          </div>
          <div className="card">
            <h3 style={{ fontSize: 20, marginBottom: 12 }}>Driver behaviour monitoring</h3>
            <p style={{ color: "var(--text-2)", fontSize: 14.5, marginBottom: 16 }}>From the IoT layer, tied to each booking:</p>
            <div className="feat">
              <div className="feat-item"><div className="ic">⏱</div><div><h4>Speed</h4><p>Over-speed events on the trip.</p></div></div>
              <div className="feat-item"><div className="ic">⚠</div><div><h4>Harsh braking</h4><p>Sudden stops that may damage the load.</p></div></div>
              <div className="feat-item"><div className="ic">↯</div><div><h4>Route deviation</h4><p>Leaving the expected route is flagged to dealer and mill.</p></div></div>
            </div>
            <div className="callout" style={{ marginTop: 16 }}><b>Note:</b> location and behaviour tracking need driver consent under Sri Lanka&apos;s data protection law.</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead num="02" eyebrow="Owner & driver" title="Hierarchy" >
            Lorries and drivers sit under their owner through the unique user code. Onboarding needs vehicle and licence documents and admin approval.
          </SectionHead>
          <MiniSteps
            items={[
              { t: "Owner registers", d: "Phone OTP, NIC, bank account." },
              { t: "Adds lorries", d: "Vehicle number, capacity, documents." },
              { t: "Adds drivers", d: "Licence details, linked to lorry." },
              { t: "Admin approves", d: "Then jobs start arriving." },
            ]}
          />
        </div>
      </section>

      <Pager k="driver" />
    </div>
  );
}
