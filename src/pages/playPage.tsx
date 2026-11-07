import "./Home.css";
import { useEffect, useState } from "react";

type LocationData = {
  city: string;
  region: string;
  country: string;
};

function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="section">
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function PlayPage() {
  const [userLocationData, setUserLocationData] = useState<LocationData | null>(
    null
  );

  useEffect(() => {
    fetch("https://ipinfo.io/json") // popular free IP API
      .then((res) => res.json())
      .then((data) => setUserLocationData(data))
      .catch(console.error);
  }, []);

  function sendDiscordMessage() {
    const webhookUrl = import.meta.env.VITE_DOWNLOAD_DISCORD_WEBHOOK;

    fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: `Someone just downloaded the PnP from:\n${userLocationData?.city}, ${userLocationData?.region}, ${userLocationData?.country}`,
      }),
    })
      .then(() => {
        //nothing
      })
      .catch(console.error);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <h1 className="hero-title">Critical-Fix</h1>
        <p className="hero-subtitle">
          <strong>Critical-Fix</strong> A fast-paced, IT-themed card game where
          you and your coworkers race to fix seven broken servers before anyone
          else. Sabotage rivals, hoard parts, and survive a day’s worth of tech
          nightmares in one chaotic deck.
        </p>
      </section>

      {/* Print and Play Section */}
      <Section id="pnp" title="🖨️ Print & Play Demo">
        <div
          className="section-text"
          style={{
            marginBottom: "30px ",
          }}
        >
          <p>Want to try Critical Fix for yourself?</p>
          <p>
            Our <strong>Print & Play demo</strong> is a bite-sized version of
            the full game. Perfect for getting a feel for the chaos. It’s
            designed to be easy to print at home: just 3 pages, minimal cutting,
            and no special supplies required.
          </p>

          <img
            src="/assets/images/data_center_mess.jpg"
            alt="Tech chaos"
            className="image-break"
            style={{
              maxWidth: "600px",
              maxHeight: "300px",
              objectFit: "cover",
            }}
          />
          <p>
            While it’s not built for long-term replayability, this mini deck is
            a great way to introduce friends, coworkers, or your unlucky
            roommates to the{" "}
            <strong>beautiful disaster that is working in a data center</strong>
            .
          </p>

          <img
            src="/assets/images/pnp_preview.jpg"
            alt="Print & Play Preview"
            className="image-break"
            style={{
              maxWidth: "600px",
              maxHeight: "300px",
              objectFit: "cover",
            }}
          />

          <p>
            Whether you’ve lived through fried CPUs and cable spaghetti
            yourself, or you just want to sabotage your friends’ IT dreams,
            you’ll fit right in.
          </p>

          <p>
            Click below to download the demo and get started!
          </p>

          <a
            href="/assets/Critical_Fix_PnP_v2.zip"
            download
            className="download-button"
            onClick={sendDiscordMessage}
          >
            Download Print & Play ZIP
          </a>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center", // centers the group horizontally
            gap: "1.5rem", // space between buttons
            flexWrap: "wrap", // allows stacking on smaller screens
            width: "100%", // keeps it relative to parent, still centered
            marginBottom: "100px "
          }}
        >
          <a
            href="https://docs.google.com/document/d/1hFIuI4YvcFJqrcJPUr9oDg64I1kzVmUTsQnxahP7GVE/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              textAlign: "center",
              padding: "12px 32px",
              borderRadius: "12px",
              backgroundColor: "#16a34a",
              color: "white",
              fontSize: "1.125rem",
              fontWeight: "600",
              textDecoration: "none",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.15)",
              transition: "background-color 0.2s ease",
              minWidth: "180px",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#15803d")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#16a34a")}
          >
            🎲 Print and Play Rules
          </a>
        </div>
      </Section>

      {/* Tabletopia */}
      <Section id="tts" title="🕹️ Tabletopia">
        <div className="section-text flex flex-col items-center"
          style={{
            gap: "1.5rem",
          }}>
          <p>
            You can now play Critical Fix online on Tabletopia! Jump into the
            chaos, fix Tickets and make management
            happy. For now…
          </p>
          <iframe
            width="680"
            height="340"
            style={{ border: "none" }}
            allowTransparency={true}
            scrolling="no"
            src="https://tabletopia.com/games/critical-fix-psip9r/680x340"
            title="Play Critical Fix on Tabletopia"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center", // centers the group horizontally
              gap: "1.5rem", // space between buttons
              flexWrap: "wrap", // allows stacking on smaller screens
              width: "100%", // keeps it relative to parent, still centered
              marginTop: "30px "
            }}
          >
            <a
              href="https://docs.google.com/document/d/1zc2yBJS2TaYrYqvRyNnaTMWVxcuOj3AliPeCeudOOrI/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                textAlign: "center",
                padding: "12px 32px",
                borderRadius: "12px",
                backgroundColor: "#2563eb",
                color: "white",
                fontSize: "1.125rem",
                fontWeight: "600",
                textDecoration: "none",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.15)",
                transition: "background-color 0.2s ease",
                minWidth: "180px",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1d4ed8")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
            >
              📖 Full Rules
            </a>

            <a
              href="https://docs.google.com/document/d/1hFIuI4YvcFJqrcJPUr9oDg64I1kzVmUTsQnxahP7GVE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                textAlign: "center",
                padding: "12px 32px",
                borderRadius: "12px",
                backgroundColor: "#16a34a",
                color: "white",
                fontSize: "1.125rem",
                fontWeight: "600",
                textDecoration: "none",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.15)",
                transition: "background-color 0.2s ease",
                minWidth: "180px",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#15803d")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#16a34a")}
            >
              🎲 2-Player CF Mini Rules
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
} b