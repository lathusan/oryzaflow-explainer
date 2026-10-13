import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Nav from "@/components/Nav";
import { company, docFile, people } from "@/lib/content";

export const metadata: Metadata = {
  title: "OryzaFlow – System Walkthrough",
  description: company.pitch,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("oryza-theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t);}catch(e){}`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        />
      </head>
      <body suppressHydrationWarning>
        <Nav />
        <main>{children}</main>
        <footer className="footer">
          <div className="container footer-inner">
            <div>
              <b>{company.name}</b>
              <p style={{ marginTop: 6, maxWidth: 420 }}>{company.tagline}. Internal team walkthrough, based on the System Understanding of {company.docDate}.</p>
            </div>
            <div>
              <p>Project Owner: {people[0].name}</p>
              <p>Prepared by: {people.find((p) => p.name === "Lathusan")?.name}</p>
              <p style={{ marginTop: 8 }}><a href={docFile} download>Download the System Understanding (PDF) ↓</a></p>
            </div>
            <div>
              <p><Link href="/mill-dashboard">Mill Owner</Link> · <Link href="/dealer-app">Dealers</Link> · <Link href="/driver-app">Drivers</Link></p>
              <p><Link href="/receiver-app">Mill Workers</Link> · <Link href="/iot">IoT</Link></p>
              <p style={{ marginTop: 8 }}>© 2026 {company.name}</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
