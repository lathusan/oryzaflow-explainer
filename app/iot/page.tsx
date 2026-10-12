import type { Metadata } from "next";
import { PageHero, Pager, SectionHead, accentStyle } from "@/components/ui";

export const metadata: Metadata = { title: "IoT Layer – OryzaFlow" };

const sensors = [
  { big: "kg", t: "Weight", d: "Total paddy weight at loading and again at the mill. The base of the price.", hw: "Example options: load cells + HX711 on a platform scale, or an existing weighbridge with a serial/Modbus output.", c: "var(--c-gold)" },
  { big: "%", t: "Moisture (humidity)", d: "Moisture content of the paddy. Wet paddy weighs more and stores badly, so it affects quality and price.", hw: "Example options: capacitive grain-moisture probe, or a ready-made grain moisture meter with Bluetooth/serial.", c: "var(--c-emerald)" },
  { big: "A·B·C", t: "Quality", d: "Grade of the paddy. Exactly what is measured (foreign matter, broken grains, variety) is still open.", hw: "Example options: manual grade entry at first; camera-based grain analysis later.", c: "var(--c-violet)" },
  { big: "GPS", t: "Location & route", d: "Live position of the lorry, ETA to the mill and the full route for the trip record.", hw: "Example options: driver's phone GPS, or a GPS + 4G tracker fixed in the lorry.", c: "var(--c-sky)" },
  { big: "g", t: "Driver behaviour", d: "Speed, harsh braking and route deviation, linked to the booking.", hw: "Example options: accelerometer (IMU) in the tracker, or phone sensors.", c: "var(--c-coral)" },
  { big: "+", t: "More (to confirm)", d: "Possible extras: bag count, grain temperature, photos of the load.", hw: "Depends on the answers to the open questions below.", c: "var(--text-2)" },
];

export default function IoT() {
  return (
    <div style={accentStyle("iot")}>
      <PageHero
        k="iot"
        title="The IoT layer:"
        accentWord="measure, don't argue."
        lead="Connected devices capture weight, moisture, quality, location and driving behaviour, and attach every reading to the booking ID automatically. Both sides see the same numbers, so most gate disputes disappear."
        chips={["Every reading → booking ID", "Offline store & sync", "Calibrated devices"]}
      />

      <section className="section" style={{ borderTop: 0, paddingTop: 0 }}>
        <div className="container">
          <SectionHead num="01" eyebrow="What we measure" title="Readings for every load">
            The pilot starts with weight and moisture; the full stack adds quality and driver behaviour (from the go-to-market plan).
          </SectionHead>
          <div className="grid-3">
            {sensors.map((s) => (
              <div className="card sensor" key={s.t} style={{ ["--accent" as string]: s.c } as React.CSSProperties}>
                <div className="big">{s.big}</div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
                <div className="hw">{s.hw}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead num="02" eyebrow="How data flows" title="From sensor to screen">
            Devices send readings to the cloud backend, which links them to the booking and pushes them to every app that needs them.
          </SectionHead>
          <div className="arch">
            <div className="arch-col">
              <h4>Devices</h4>
              <div className="arch-box"><b>Scale + moisture probe</b><span>at loading point</span></div>
              <div className="arch-box"><b>Scale + moisture probe</b><span>at mill gate</span></div>
              <div className="arch-box"><b>GPS / IMU tracker</b><span>in the lorry</span></div>
            </div>
            <div className="arch-col">
              <h4>Edge</h4>
              <div className="arch-box"><b>Controller</b><span>e.g. ESP32 or the phone app</span></div>
              <div className="arch-box"><b>Store &amp; forward</b><span>keeps readings when there is no signal</span></div>
            </div>
            <div className="arch-col">
              <h4>Cloud</h4>
              <div className="arch-box"><b>IoT ingest</b><span>e.g. MQTT / REST over 4G</span></div>
              <div className="arch-box"><b>Booking service</b><span>reading → booking ID, time-stamped</span></div>
              <div className="arch-box"><b>PostgreSQL + PostGIS</b><span>readings, routes, audit log</span></div>
            </div>
            <div className="arch-col">
              <h4>Apps</h4>
              <div className="arch-box"><b>Dealer app</b><span>confirm dispatch readings</span></div>
              <div className="arch-box"><b>Mill dashboard</b><span>sent vs received</span></div>
              <div className="arch-box"><b>Worker app</b><span>receiving readings</span></div>
            </div>
          </div>
          <p className="note">Architecture is a starting sketch; the exact devices and protocol depend on the hardware decision.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead num="03" eyebrow="Measure twice" title="Sent vs received settles disputes">
            Readings are taken once when the lorry is loaded and again at the mill. The system compares them against an agreed tolerance.
          </SectionHead>
          <div className="compare">
            <div className="card">
              <div className="eyebrow" style={{ color: "var(--c-emerald)" }}>At dispatch · dealer</div>
              <div className="reading"><span>Weight</span><b>9,100 kg</b></div>
              <div className="reading"><span>Moisture</span><b>13.9%</b></div>
              <div className="reading"><span>Quality</span><b>Grade A</b></div>
              <div className="reading"><span>Time</span><b>07:45 · field</b></div>
            </div>
            <div className="mid">vs</div>
            <div className="card">
              <div className="eyebrow" style={{ color: "var(--c-coral)" }}>At receiving · mill</div>
              <div className="reading"><span>Weight</span><b>9,060 kg</b></div>
              <div className="reading"><span>Moisture</span><b>14.1%</b></div>
              <div className="reading"><span>Quality</span><b>Grade A</b></div>
              <div className="reading"><span>Time</span><b>10:48 · gate 1</b></div>
            </div>
          </div>
          <p className="note">Sample numbers. Tolerance limits are still to be agreed with the mills.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3 style={{ fontSize: 20, marginBottom: 14 }}>Requirements from the documents</h3>
            <div className="reading"><span>Every reading linked to</span><b>Booking ID</b></div>
            <div className="reading"><span>Low-signal areas</span><b>Offline capture + sync</b></div>
            <div className="reading"><span>Legal acceptance</span><b>Calibrated, certified devices</b></div>
            <div className="reading"><span>Visibility</span><b>Both parties see same reading</b></div>
            <div className="reading"><span>Business model</span><b>Per reading / monthly / rental</b></div>
          </div>
          <div className="card">
            <h3 style={{ fontSize: 20, marginBottom: 14 }}>Open IoT questions</h3>
            <ul className="q-list">
              <li><span className="q-box" /><span>&ldquo;Inunity&rdquo;: confirm this means moisture content %.</span></li>
              <li><span className="q-box" /><span>Device placement: loading point, lorry, mill gate, or all?</span></li>
              <li><span className="q-box" /><span>Build our own (ESP32 + sensors) or buy ready-made meters?</span></li>
              <li><span className="q-box" /><span>Which extra readings: bag count, temperature, foreign matter, broken grains?</span></li>
            </ul>
          </div>
        </div>
      </section>

      <Pager k="iot" />
    </div>
  );
}
