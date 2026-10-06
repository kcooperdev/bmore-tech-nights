import Link from "next/link";
import "@/app/folx-scroll.css";

export default function NotFound() {
  return (
    <main className="folx-scroll">
      <section className="hero">
        <div className="copy-container hero-frame">
          <div className="hero-copy">
            <h1>This page isn’t here.</h1>
            <div className="cta-stack">
              <Link className="hero-cta" href="/">
                Bmore Tech Nights
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
