import "./Home.css";
import MailingListForm from "../components/MailingListForm";
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
  const [signedUp, setSignedUp] = useState(false);
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

    const alreadySignedUp = localStorage.getItem("cf_signed_up") === "true";
    if (alreadySignedUp) {
      setSignedUp(true);
    }
  }, []);

  function handleSignupSuccess() {
    setSignedUp(true);
    sendDiscordMessage();

    // Automatically trigger file download
    const link = document.createElement("a");
    link.href = "/assets/Critical_Fix_PnP_v2.zip";
    link.download = "Critical_Fix_PnP_v2.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

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
        <div className="section-text">
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
            Drop your email below to get access to the demo and join our dev
            mailing list! You’ll be the first to hear about updates,
            behind-the-scenes chaos, and when the full game goes live.
          </p>

          {!signedUp && <MailingListForm onSuccess={handleSignupSuccess} />}

          {signedUp && (
            <>
              <p className="form-status success">
                You're in! Here's your download:
              </p>
              <a
                href="/assets/Critical_Fix_PnP_v2.zip"
                download
                className="download-button"
                onClick={sendDiscordMessage}
              >
                Download Print & Play ZIP
              </a>
            </>
          )}
        </div>
      </Section>

      {/* Tabletop Simulator */}
      <Section id="tts" title="🕹️ Tabletop Simulator (Coming Soon)">
        <div className="section-text">
          <p>
            We’re working on a digital Tabletop Simulator version so you can try
            the game online with friends. Stay tuned!
          </p>
        </div>
      </Section>
    </main>
  );
}
