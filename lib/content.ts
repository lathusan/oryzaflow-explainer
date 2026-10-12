// All project facts in one place, taken from:
//  - "OrizaFlow – Business Description and Business Model" (Draft v1, Oct 2026)
//  - "OryzaFlow – Project Proposal" (12 Oct 2026)
//  - "OryzaFlow – System Understanding" (12 Oct 2026)

export const company = {
  name: "OryzaFlow",
  product: "OryzaFlow Connect",
  altSpelling: "OrizaFlow",
  tagline: "Sri Lanka's digital bridge from paddy field to rice mill",
  pitch:
    "One platform that connects paddy dealers, lorry owners, loaders and major rice mills, so every delivery is booked, measured, tracked and paid in one flow.",
  pitchTamil:
    "விவசாயிகளிடம் நெல் வாங்கும் ரீடெய்லர்கள், லொறி உரிமையாளர்கள், கூலியாட்கள் மற்றும் பெரிய அரிசி ஆலைகள் அனைவரையும் ஒரே தளத்தில் இணைக்கும் இலங்கையின் முதன்மை டிஜிட்டல் பாலம்.",
  country: "Sri Lanka",
  docDate: "12 October 2026",
};

export const people = [
  { name: "Kobisan", role: "Project Owner", note: "Vision, stakeholder relations, final approvals" },
  { name: "Priyanthan", role: "Business model stakeholder", note: "Business description prepared for him" },
  { name: "Sanjee", role: "IoT Specialist", note: "IoT devices, sensors and measurement" },
  { name: "Lathusan", role: "System Architect & Engineer", note: "Project system understanding and development" },
];

export const keyFacts = [
  { label: "Delivery", value: "Android app + mill web portal + admin console" },
  { label: "Languages", value: "Tamil · Sinhala · English" },
  { label: "Timeline", value: "Nov 2026 → Aug 2027" },
  { label: "Go-live", value: "5 July 2027, before Yala harvest" },
  { label: "Budget", value: "LKR 19.8 M (incl. 10% contingency)" },
  { label: "Pilot districts", value: "Ampara · Polonnaruwa · Batticaloa" },
];

export const problems = [
  { who: "Paddy dealers (muthalies)", pain: "No own lorry, weak view of which mill needs what and at what price, wait days for payment." },
  { who: "Rice mills", pain: "Unpredictable arrivals, congested yards, weight and moisture disputes at the gate." },
  { who: "Lorry owners & drivers", pain: "Find loads only through contacts, wait in queues, return empty." },
  { who: "Loaders & mill labour", pain: "Work found by word of mouth, idle or overwhelmed, no work record." },
  { who: "Banks", pain: "No verifiable trigger to release payment tied to a real delivery." },
  { who: "Everyone", pain: "No neutral record of weight, moisture, route and delivery, the root of most disputes." },
];

export const flowSteps = [
  { n: 1, title: "Mill posts demand & price", text: "Dealers see paddy demand, specs and price in real time.", who: "Mill owner" },
  { n: 2, title: "Dealer books slot, lorry & crew", text: "One request books a mill delivery slot, a lorry and a loading crew.", who: "Dealer" },
  { n: 3, title: "IoT measures at loading", text: "Weight, moisture and quality are captured and saved to the booking.", who: "IoT" },
  { n: 4, title: "Dealer verifies & dispatches", text: "Dealer checks readings and confirms; mill and driver get the booking.", who: "Dealer" },
  { n: 5, title: "Bank blocks the payment", text: "Agreed amount is blocked in the mill's account. The bank holds the money.", who: "Bank" },
  { n: 6, title: "Live GPS tracking", text: "Route, ETA and driver behaviour (speed, harsh braking, route deviation).", who: "Driver" },
  { n: 7, title: "Receive, confirm, release", text: "Unloaded in the booked slot, re-measured, confirmed by the mill worker. Payment released immediately.", who: "Mill worker" },
];

export type FaceKey = "mill" | "dealer" | "driver" | "receiver" | "iot";

export const faces: {
  key: FaceKey;
  href: string;
  short: string;
  title: string;
  platform: string;
  inDocs: string;
  jobs: string[];
  color: string;
}[] = [
  {
    key: "mill",
    href: "/mill-dashboard",
    short: "Mill Owner",
    title: "PC Dashboard – Mill Owner",
    platform: "Web · Desktop",
    inDocs: "Mill intake portal + analytics (M5, M8)",
    jobs: ["Post demand and price", "Manage delivery slots", "See incoming lorries and ETAs", "Compare dispatch vs received readings", "Approve payments", "Season reports"],
    color: "var(--c-gold)",
  },
  {
    key: "dealer",
    href: "/dealer-app",
    short: "Sending Dealer",
    title: "Mobile – Sending Dealers",
    platform: "Android app",
    inDocs: "Muthali / paddy retailer",
    jobs: ["Post paddy loads", "Book slot, lorry and crew", "View and confirm IoT readings", "Track the lorry live", "Payment status"],
    color: "var(--c-emerald)",
  },
  {
    key: "driver",
    href: "/driver-app",
    short: "Transport Driver",
    title: "Mobile – Transport Drivers",
    platform: "Android app",
    inDocs: "Truck owners / drivers",
    jobs: ["Accept or reject jobs", "Navigate to field and mill", "Live GPS tracking", "Photo proof of loading", "Trip status updates"],
    color: "var(--c-sky)",
  },
  {
    key: "receiver",
    href: "/receiver-app",
    short: "Mill Worker",
    title: "Mobile – Receiving Mill Workers",
    platform: "Android app",
    inDocs: "Mill admin officer / unloading labour",
    jobs: ["Gate queue", "Check in arriving lorries", "Take receiving IoT readings", "Confirm receipt → payment released"],
    color: "var(--c-coral)",
  },
  {
    key: "iot",
    href: "/iot",
    short: "IoT",
    title: "IoT Measurement Layer",
    platform: "Devices + cloud",
    inDocs: "IoT layer",
    jobs: ["Weight (kg)", "Moisture %", "Quality", "GPS position", "Driver behaviour", "Linked to booking ID"],
    color: "var(--c-violet)",
  },
];

export const observations = [
  { title: "The two documents disagree on payment", text: "The Business Model has the bank block and release funds (escrow). The Proposal uses a simpler digital ledger with wallet and bank-transfer links. One must be picked for version 1." },
  { title: "Brokers and loading crews", text: "Both appear in the documents but not in the 4 faces. Leave out for now, or add later?" },
  { title: "Tech stack in the Proposal", text: "Flutter (mobile), React + TypeScript (web), NestJS + PostgreSQL/PostGIS + Redis, Google Maps, SMS gateway, Firebase push. Trilingual and offline-capable." },
  { title: "Measure twice", text: "Readings at dispatch and again at receiving. Comparing the two is what settles disputes." },
];

export const openQuestions = [
  "“Inunity” of the paddy: is this humidity, i.e. moisture content %? What other readings are needed (foreign matter, broken grains, grain temperature, bag count)?",
  "IoT placement: at the dealer's loading point, on the lorry, at the mill gate, or more than one?",
  "Hardware: build our own (e.g. ESP32 + load cell + moisture sensor) or use ready-made scales and meters?",
  "Stack: stick with Flutter / React / NestJS / PostgreSQL from the Proposal?",
  "Payments: bank-blocked escrow or a simpler digital ledger for version 1?",
  "Scope: include brokers and loading crews now, or later?",
];

export const stack = [
  { layer: "Mobile app", tech: "Flutter (Android first, iOS later)" },
  { layer: "Web portal & admin", tech: "React + TypeScript" },
  { layer: "Backend", tech: "Node.js (NestJS), REST APIs, Docker" },
  { layer: "Database", tech: "PostgreSQL + PostGIS, Redis" },
  { layer: "Integrations", tech: "Google Maps, SMS gateway, payment gateway, Firebase push" },
  { layer: "Security", tech: "OTP login, role-based access, TLS, audit logs" },
];

export const modules = [
  { id: "M1", name: "User onboarding & KYC", release: "Pilot" },
  { id: "M2", name: "Load posting & booking", release: "Pilot" },
  { id: "M3", name: "Smart matching & dispatch", release: "Pilot" },
  { id: "M4", name: "Trip tracking", release: "Pilot" },
  { id: "M5", name: "Mill intake portal", release: "Pilot" },
  { id: "M6", name: "Labour management", release: "Launch" },
  { id: "M7", name: "Payments & digital ledger", release: "Launch" },
  { id: "M8", name: "Analytics & admin", release: "Launch" },
];

export const phases = [
  { name: "Plan", when: "Nov 2026", gate: "Scope sign-off" },
  { name: "Design", when: "Dec 2026", gate: "Design review" },
  { name: "Build", when: "Jan – Apr 2027", gate: "Feature-complete demo" },
  { name: "Test", when: "Apr – May 2027", gate: "UAT sign-off" },
  { name: "Pilot", when: "May – Jun 2027", gate: "Go / no-go" },
  { name: "Launch", when: "5 Jul 2027", gate: "Closure report" },
];

export const revenue = [
  { stream: "Mill subscription", who: "Rice mills", price: "LKR 15,000 / mo Basic · 35,000 / mo Pro" },
  { stream: "Trip booking fee", who: "Dealer", price: "2% of fare, capped at LKR 1,000" },
  { stream: "Labour booking fee", who: "Dealer or mill", price: "LKR 50 per labourer per job" },
  { stream: "Premium listing", who: "Truck owners", price: "LKR 1,500 / mo priority matching" },
  { stream: "IoT service fee", who: "Mill / dealer", price: "Per reading, monthly or device rental (TBC)" },
  { stream: "Data insights", who: "Mills, banks, agencies", price: "Per report (later)" },
];

export const kpis = [
  { value: "25", label: "Rice mills" },
  { value: "500", label: "Paddy dealers" },
  { value: "400", label: "Verified trucks" },
  { value: "1,500", label: "Loaders & labourers" },
  { value: "10,000", label: "Completed trips" },
  { value: "<30 min", label: "To find a truck" },
];

export const docFile = "/docs/OryzaFlow-System-Understanding.pdf";
export const docLink = "https://claude.ai/code/artifact/1934ddfb-4087-4d20-b239-31e8a92e5826";
