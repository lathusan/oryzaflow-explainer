import type { Metadata } from "next";
import { PageHero, Features, MiniSteps, Pager, SectionHead, Phone, accentStyle } from "@/components/ui";

export const metadata: Metadata = { title: "Sending Dealers App – OryzaFlow" };

export default function DealerApp() {
  return (
    <div style={accentStyle("dealer")}>
      <PageHero
        k="dealer"
        title="Mobile app for"
        accentWord="sending dealers."
        lead="The dealer (muthali) buys paddy from farmers and sends it to the mill. In one app they see which mill wants what and at what price, book a slot, lorry and crew, check the IoT readings, track the lorry and get paid."
        chips={["Modules M2 + M3 + M4", "Flutter · Android first", "Tamil · Sinhala · English"]}
      />

      <section className="section" style={{ borderTop: 0, paddingTop: 0 }}>
        <div className="container">
          <div className="phones">
            <Phone>
              <div className="phone-head"><small>வணக்கம், Kumar</small><h5>Mill demand today</h5></div>
              <div className="phone-body">
                <div className="p-card hl">
                  <div className="p-lbl">Best price near you</div>
                  <div className="p-big">LKR 128 / kg</div>
                  <div className="p-lbl">Nadu · ≤15% moisture · 60 t wanted</div>
                </div>
                {[["Anchor Mill A", "Samba", "LKR 142", "40 t"], ["Anchor Mill B", "Nadu", "LKR 126", "25 t"], ["East Mill", "Keeri Samba", "LKR 165", "10 t"]].map((m) => (
                  <div className="p-card" key={m[0]}>
                    <div className="p-row"><b>{m[0]}</b><span className="p-val">{m[2]}</span></div>
                    <div className="p-row"><span className="p-lbl">{m[1]} · {m[3]}</span><span className="p-pill">Slots open</span></div>
                  </div>
                ))}
                <div className="p-btn alt">+ Book a delivery</div>
              </div>
              <div className="p-tabs"><span className="on">Demand</span><span>Bookings</span><span>Track</span><span>Payments</span></div>
            </Phone>

            <Phone>
              <div className="phone-head"><small>New booking · step 3 of 4</small><h5>Check readings</h5></div>
              <div className="phone-body">
                <div className="p-card">
                  <div className="p-lbl">IoT reading at loading · auto-synced</div>
                  <div className="p-two" style={{ marginTop: 8 }}>
                    <div><div className="p-lbl">Weight</div><div className="p-val">8,200 kg</div></div>
                    <div><div className="p-lbl">Moisture</div><div className="p-val">14.2%</div></div>
                    <div><div className="p-lbl">Bags</div><div className="p-val">164</div></div>
                    <div><div className="p-lbl">Quality</div><div className="p-val">Grade A</div></div>
                  </div>
                </div>
                <div className="p-card">
                  <div className="p-row"><span className="p-lbl">Mill limit ≤15%</span><span className="p-pill">Within limit</span></div>
                  <div className="p-bar"><i style={{ width: "72%" }} /></div>
                </div>
                <div className="p-card">
                  <div className="p-row"><span className="p-lbl">Slot</span><b>Today 11:00</b></div>
                  <div className="p-row"><span className="p-lbl">Lorry</span><b>LB-4521</b></div>
                  <div className="p-row"><span className="p-lbl">Loading crew</span><b>4 workers</b></div>
                  <div className="p-row"><span className="p-lbl">Estimated value</span><b>LKR 1,049,600</b></div>
                </div>
                <div className="p-btn">Confirm & dispatch</div>
              </div>
            </Phone>

            <Phone>
              <div className="phone-head"><small>Booking #OF-20418</small><h5>On the way</h5></div>
              <div className="phone-body">
                <div className="p-map">
                  <svg viewBox="0 0 252 150" width="100%" height="150">
                    <path d="M0 110 C60 90 80 130 130 100 S210 40 252 50" stroke="#b9d3c5" strokeWidth="10" fill="none" />
                    <path d="M20 104 C60 90 80 128 130 100 S190 54 220 46" stroke="#22c58b" strokeWidth="4" fill="none" strokeDasharray="0" />
                    <circle cx="20" cy="104" r="6" fill="#0d1f17" />
                    <circle cx="130" cy="100" r="9" fill="#22c58b" stroke="#fff" strokeWidth="3" />
                    <rect x="200" y="30" width="34" height="22" rx="5" fill="#f4b740" />
                  </svg>
                </div>
                <div className="p-card">
                  <div className="p-row"><span className="p-lbl">ETA at mill</span><span className="p-val">10:40</span></div>
                  <div className="p-row"><span className="p-lbl">Driver</span><b>Nimal · LB-4521</b></div>
                  <div className="p-row"><span className="p-lbl">Driving</span><span className="p-pill">Normal</span></div>
                </div>
                <div className="p-card hl">
                  <div className="p-lbl">Payment</div>
                  <div className="p-row"><span className="p-val">Blocked by bank</span><span>🔒</span></div>
                  <div className="p-lbl">Released when the mill confirms receipt</div>
                </div>
              </div>
              <div className="p-tabs"><span>Demand</span><span>Bookings</span><span className="on">Track</span><span>Payments</span></div>
            </Phone>
          </div>
          <p className="note" style={{ textAlign: "center" }}>Mock-up screens with sample names and numbers.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <SectionHead num="01" eyebrow="What the dealer does" title="Main features" />
            <Features
              items={[
                { t: "See mill demand & price", d: "Live list of what each mill wants, quality limits and price per kg." },
                { t: "Book slot, lorry & crew", d: "One request books a mill slot, a nearby lorry and a loading crew to the farmer's field." },
                { t: "Check IoT readings", d: "Weight, moisture and quality from the loading device appear automatically; the dealer confirms them." },
                { t: "Track the lorry", d: "Live map, ETA and driver behaviour until the paddy reaches the mill." },
                { t: "Get paid fast", d: "See the payment blocked by the bank, then released to their account on receipt." },
                { t: "History & disputes", d: "Every booking keeps its readings, photos and timestamps for any disagreement." },
              ]}
            />
          </div>
          <div className="card">
            <h3 style={{ fontSize: 20, marginBottom: 12 }}>Built for the field</h3>
            <div className="feat">
              <div className="feat-item"><div className="ic">அ</div><div><h4>Three languages</h4><p>Tamil, Sinhala and English, with large buttons and icons.</p></div></div>
              <div className="feat-item"><div className="ic">⚡</div><div><h4>Works offline</h4><p>Bookings and readings are saved on the phone and sync when signal returns.</p></div></div>
              <div className="feat-item"><div className="ic">✉</div><div><h4>SMS & voice alerts</h4><p>Status updates reach users even on basic phones.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead num="02" eyebrow="Dealer journey" title="From farmer to payment" />
          <MiniSteps
            items={[
              { t: "Buy from farmer", d: "Paddy bought at the field." },
              { t: "Pick a mill", d: "Compare demand and price." },
              { t: "Book", d: "Slot + lorry + loading crew." },
              { t: "Measure & confirm", d: "IoT readings checked, dispatched." },
              { t: "Track", d: "Watch the lorry to the mill." },
              { t: "Get paid", d: "Released on mill receipt." },
            ]}
          />
        </div>
      </section>

      <Pager k="dealer" />
    </div>
  );
}
