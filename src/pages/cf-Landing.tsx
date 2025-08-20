import "./Home.css";
import NewsSection from "../components/NewsSection";
import MailingListForm from "../components/MailingListForm";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
        <h1 className="hero-title">Critical-Fix</h1>
        <p className="hero-subtitle">
          <strong>Critical-Fix</strong> A fast-paced, IT-themed card game where
          you and your coworkers race to fix seven broken servers before anyone
          else. Sabotage rivals, hoard parts, and survive a day’s worth of tech
          nightmares in one chaotic deck.
        </p>

        {/* Email Sign-up */}
        <p className="hero-main-list-text">
          Interested in getting updates? Join our mailing list!
        </p>
        <MailingListForm />
      </section>
      {/* What is Critical Fix? */}
      <Section id="whatDis" title="What is Critical Fix?">
        <div className="section-text">
          <div
            className="video-placeholder"
            title="Coming Soon"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "560px",
              margin: "0 auto 2rem",
              cursor: "not-allowed",
            }}
          >
            <img
              src="/assets/images/video_coming_soon.png"
              alt="Critical Fix video coming soon"
              style={{
                width: "100%",
                borderRadius: "8px",
                opacity: 0.8,
              }}
            />
          </div>
          {/* YouTube Embed */}
          {/* <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Critical Fix Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> */}
          <p>
            In <strong>Critical Fix</strong>, you're a data center technician
            racing to fix <strong>7 server tickets</strong> before anyone else.
          </p>
          <ul>
            <li>
              Use <strong>Part cards</strong> to repair hardware failures
            </li>
            <li>
              <strong>Outsmart opponents</strong> with clever plays
            </li>
            <li>
              <strong>Reopen their Tickets</strong> to stall their progress
            </li>
            <li>
              <strong>Stack new problems</strong> for more points and chaos
            </li>
          </ul>
          <p>
            Every Ticket goes into <strong>Testing and Resolves</strong> —
            unless someone reopens it first. The more a Ticket gets reopened,
            the more it's worth.
          </p>
          <p>
            Only the most cunning, ruthless, and lucky technician will survive
            the chaos and fix 7 Tickets to win the game and make management
            happy. For now…
          </p>
        </div>
      </Section>
      {/* News */}
      <Section id="news" title="News & Updates">
        <NewsSection />
      </Section>

      {/* Community */}
      <Section id="community" title="Community">
        <p className="section-text">
          Be part of the community! Join our Discord to meet fellow players and
          share feedback.
        </p>
        <a
          href="https://discord.com/invite/wRDDjPkr"
          target="_blank"
          rel="noopener noreferrer"
          className="discord-button"
        >
          Join our Discord
        </a>

        <style>{`
    .discord-button {
      display: inline-block;
      padding: 16px 28px;
      border-radius: 12px;
      background: #5865F2;
      color: #fff;
      font-size: 18px;
      font-weight: 600;
      text-decoration: none;
      transition: background 0.2s ease, transform 0.15s ease;
      box-shadow: 0 4px 10px rgba(88,101,242,0.4);
    }
    .discord-button:hover {
      background: #4752c4;
      transform: translateY(-2px);
    }
    .discord-button:active {
      transform: translateY(0);
    }
  `}</style>

        {/* <iframe
          src="https://discord.com/widget?id=1383011396127559730&theme=dark"
          width="350"
          height="500"
          // allowTransparency={true}
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe> */}
      </Section>

      {/* Featured Cards
      <Section title="Featured Cards">
        <div className="card-grid">
          {featuredCards.map((i) => (
            <img
              key={i}
              src={`/cards/card${i}.PNG`}
              alt={`Card ${i}`}
              className="card-image"
            />
          ))}
        </div>
      </Section> */}
    </main>
  );
}
