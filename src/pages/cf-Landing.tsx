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
            Critical Fix is a fast-paced, IT-themed card game where 2–6 players
            compete as Technicians racing to resolve support tickets before
            their coworkers do. On your turn, you’ll open server Tickets, apply
            Repair cards to fix broken parts, and send your work into Testing.
            If your fix survives a full round without interference, the Ticket
            Resolves and earns you points.
          </p>
          <p>
            But in this office, your coworkers are your biggest obstacle.
            Opponents can sabotage your progress, reopen your Tickets while
            they’re in Testing, or stack new problems on top — increasing the
            value of the Ticket but forcing it to be repaired again. The bigger
            the stack, the bigger the reward… if you can protect it long enough.
          </p>
          <p>
            Do you play it safe with quick fixes, or risk building high-value
            Ticket stacks while fending off sabotage? The first Technician to
            Resolve 7 Tickets proves they’re the ultimate problem-solver in
            Critical Fix.
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

        <p>
          <a
            href="https://discord.gg/tkVWV5CBzh"
            target="_blank"
            rel="noopener noreferrer"
            className="discord-button"
          >
            Join our Discord
          </a>
        </p>

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
