import "./Home.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CFShowcase from "../components/CFShowcase";
import CFStaticFeature from "../components/CFStaticFeature";
import CFImageRow from "../components/CFImageRow";

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
      <div className="section-text">{children}</div>
    </section>
  );
}

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-background">
          <h1 className="hero-title">
            The only card game where a "Manager 1 on 1" is a weapon and a
            stripped screw is an act of war.
          </h1>
          <p className="hero-subtitle">
            Finally, a game that lets you show your friends and family why you
            drink... without explaining what a server actually is.
          </p>

          {/* Kickstarter Live CTA */}
          <p className="hero-main-list-text">
            Our Kickstarter is officially LIVE! Back the project today to grab
            your copy of Critical Fix.
          </p>
          <div style={{ marginTop: "1.5rem", marginBottom: "1rem" }}>
            <a
              href="https://www.kickstarter.com/projects/criticalfix/critical-fix"
              target="_blank"
              rel="noopener noreferrer"
              className="kickstarter-cta-button"
              style={{
                display: "inline-block",
                padding: "0.9rem 2.2rem",
                backgroundColor: "#05ce78", // Official Kickstarter green (or swap to #c7a75e for your site's gold)
                color: "#000000",
                fontWeight: "bold",
                fontSize: "1.2rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                boxShadow: "0 0px 20px rgba(5, 206, 120, 0.4)",
                transition: "transform 0.2s ease",
              }}
            >
              Back Us on Kickstarter
            </a>
          </div>
        </div>
      </section>

      {/* YouTube Embed */}
      <Section title="">
        <div
          className="video-container"
          style={{
            maxWidth: "560px",
            boxShadow: "0 0px 25px rgba(199, 167, 94, 0.3)",
            border: "2px solid rgba(199, 167, 94, 0.5)",
            borderRadius: "0.5rem",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/q8T0m5myYO4"
            title="Critical Fix Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Section>
      <Section title="What is Critical Fix?">
        <p>
          Critical Fix is an action packed 2-6 player IT themed card game. Turns
          are fast and games last less than 1 hour. Over 150 cards for
          unlimited combinations!
        </p>
      </Section>

      <CFShowcase
        images={[
          "./assets/images/cards/card1.PNG",
          "./assets/images/cards/card2.PNG",
          "./assets/images/cards/card3.PNG",
        ]}
        title="Repair the Chaos"
        description={
          <>
            You're a tech under pressure.
            <br />
            Use part cards to repair tickets like fried CPUs, loose cables, and
            burnt GPUs.
          </>
        }
      ></CFShowcase>
      <CFShowcase
        images={[
          "./assets/images/cards/card4.jpg",
          "./assets/images/cards/card5.jpg",
          "./assets/images/cards/card6.jpg",
        ]}
        title="Sabotage Your Rivals"
        description={
          <>
            Send fixed tickets into testing, but your coworkers can sabotage
            your progress, reopen tickets, or steal your work. Just like real
            life!
          </>
        }
        reverse
      ></CFShowcase>
      <CFShowcase
        images={[
          "./assets/images/cards/card7.jpg",
          "./assets/images/cards/card8.PNG",
          "./assets/images/cards/card9.PNG",
        ]}
        title="Rule the Data Center"
        description={
          <>
            Battle it out with 2-6 people to see who will rule the data center.
            Only the most cunning, ruthless, and luckiest technician will
            survive the chaos and fix 7 tickets to win the game and make
            management happy.
            <br />
            For now...
          </>
        }
      ></CFShowcase>

      <CFStaticFeature
        image={"./assets/images/whatsinthebox.png"}
        title="Whats in the box?!?!"
        description={`Critical Fix comes with:\n150+ Cards\n6 Server Types\n8 Part Types\n100 Action Cards with Unique Illustrations\n36 Player Token (6 per Player)\n1 6-Sided Die`}
      />
      <CFImageRow
        items={[
          {
            image: "./assets/images/playtest.png",
            description: "Playtest.",
          },
          {
            image: "./assets/images/broke_motherboard.png",
            description: "Sabotage your coworkers.",
          },
          {
            image: "./assets/images/sketches.png",
            description: "Some exclusive sketches of Critical Fix being made.",
          },
          {
            image: "./assets/images/tokens.png",
            description:
              "3D printed tokens. Look for this add-on on the Kickstarter!",
          },
        ]}
      />
    </main>
  );
}