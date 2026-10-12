import type { Metadata } from "next";
import { PageHero, Features, MiniSteps, Pager, SectionHead, Phone, accentStyle } from "@/components/ui";

export const metadata: Metadata = { title: "Receiving Mill Workers App – OryzaFlow" };

export default function ReceiverApp() {
  return (
    <div style={accentStyle("receiver")}>
      <PageHero
        k="receiver"
        title="Mobile app for"
        accentWord="receiving mill workers."
        lead="At the mill gate, workers and the admin officer check in each lorry, take the receiving IoT readings, compare them with what was sent, and confirm receipt. That confirmation is what releases the dealer's payment."
        chips={["Module M5 (+ M6 labour)", "Flutter · Android first", "Payment trigger"]}
      />

      <section className="section" style={{ borderTop: 0, paddingTop: 0 }}>
        <div className="container">
          <div className="phones">
            <Phone>
              <div className="phone-head"><small>Anchor Mill A · Gate 1</small><h5>Gate queue</h5></div>
              <div className="phone-body">
                <div className="p-card hl">
                  <div className="p-row"><div><div className="p-lbl">At gate now</div><div className="p-big">EP-2290</div></div><span style={{ fontWeight: 800 }}>Slot 10:00</span></div>
                  <div className="p-lbl">Vanni Paddy Co. · 9,100 kg sent</div>
                </div>
                {[["LB-4521", "10:40", "On route", ""], ["NC-7714", "11:15", "Loading", "warn"], ["LK-0563", "12:30", "Booked", "warn"]].map((l) => (
                  <div className="p-card" key={l[0]}>
                    <div className="p-row"><b>{l[0]}</b><span className="p-val">{l[1]}</span></div>
                    <div className="p-row"><span className="p-lbl">ETA</span><span className={`p-pill ${l[3]}`}>{l[2]}</span></div>
                  </div>
                ))}
                <div className="p-btn">Scan lorry / booking code</div>
              </div>
              <div className="p-tabs"><span className="on">Queue</span><span>Receive</span><span>Crew</span><span>History</span></div>
            </Phone>

            <Phone>
              <div className="phone-head"><small>Booking #OF-20412 · EP-2290</small><h5>Receiving readings</h5></div>
              <div className="phone-body">
                <div className="p-card">
                  <div className="p-row" style={{ fontSize: 11, color: "#5b7368", fontWeight: 700 }}><span>Reading</span><span>Sent → Received</span></div>
                  <div className="p-row" style={{ marginTop: 6 }}><span>Weight</span><b>9,100 → 9,060 kg</b></div>
                  <div className="p-row"><span>Moisture</span><b>13.9 → 14.1%</b></div>
                  <div className="p-row"><span>Bags</span><b>182 → 182</b></div>
                  <div className="p-row"><span>Quality</span><b>A → A</b></div>
                </div>
                <div className="p-card">
                  <div className="p-row"><span className="p-lbl">Weight difference</span><span className="p-pill">−0.4% · OK</span></div>
                  <div className="p-row"><span className="p-lbl">Moisture difference</span><span className="p-pill">+0.2 · OK</span></div>
                </div>
                <div className="p-card">
                  <div className="p-row"><span className="p-lbl">Unloading crew</span><b>6 workers · ready</b></div>
                </div>
                <div className="p-btn">Raise an issue</div>
              </div>
            </Phone>

            <Phone>
              <div className="phone-head"><small>Booking #OF-20412</small><h5>Confirm receipt</h5></div>
              <div className="phone-body">
                <div className="p-card hl" style={{ textAlign: "center", padding: "22px 14px" }}>
                  <div style={{ fontSize: 34 }}>✓</div>
                  <div className="p-val" style={{ fontSize: 18 }}>Paddy received</div>
                  <div className="p-lbl">9,060 kg · 14.1% moisture</div>
                </div>
                <div className="p-card">
                  <div className="p-row"><span className="p-lbl">Confirmed by</span><b>Admin officer · code MO-A-012</b></div>
                  <div className="p-row"><span className="p-lbl">Time</span><b>10:52</b></div>
                </div>
                <div className="p-card">
                  <div className="p-row"><span className="p-lbl">Payment to dealer</span><span className="p-pill">Released</span></div>
                  <div className="p-big" style={{ fontSize: 22 }}>LKR 1,141,560</div>
                </div>
                <div className="p-btn alt">Next lorry</div>
              </div>
            </Phone>
          </div>
          <p className="note" style={{ textAlign: "center" }}>Mock-up screens with sample names and numbers.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <SectionHead num="01" eyebrow="What mill workers do" title="Main features" />
            <Features
              items={[
                { t: "Gate queue", d: "See which lorry is next by booked slot and live ETA." },
                { t: "Check in lorry", d: "Scan the booking code; driver and lorry are verified against the booking." },
                { t: "Receiving IoT readings", d: "Weigh and measure moisture at the mill; readings attach to the same booking." },
                { t: "Sent vs received", d: "Differences beyond the agreed tolerance are flagged before confirming." },
                { t: "Confirm receipt", d: "The admin officer confirms, which releases the dealer's payment immediately." },
                { t: "Unloading crew", d: "Crew is scheduled to arrivals; attendance and work history recorded." },
              ]}
            />
          </div>
          <div className="card">
            <h3 style={{ fontSize: 20, marginBottom: 12 }}>Why this app matters</h3>
            <p style={{ color: "var(--text-2)", fontSize: 14.5 }}>
              It closes the loop. The receipt confirmation is the verified event the bank needs to release funds, and the second set of readings is what settles weight and moisture disputes.
            </p>
            <div className="callout" style={{ marginTop: 18 }}>
              <b>To decide:</b> what tolerance is acceptable between sent and received weight and moisture, and who handles a dispute when it is exceeded?
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead num="02" eyebrow="At the gate" title="Receiving in five steps" />
          <MiniSteps
            items={[
              { t: "Lorry arrives", d: "In its booked slot." },
              { t: "Check in", d: "Scan booking code." },
              { t: "Unload & measure", d: "Weight, moisture, quality." },
              { t: "Compare", d: "Sent vs received." },
              { t: "Confirm", d: "Payment released." },
            ]}
          />
        </div>
      </section>

      <Pager k="receiver" />
    </div>
  );
}
