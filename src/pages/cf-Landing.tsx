import "./Home.css";
import NewsSection from "../components/NewsSection";

import MailingListForm from "../components/MailingListForm";

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
  return (
    <main className="home">
      {/* Hero */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(24, 24, 24, 1) 0rem, rgba(0, 0, 0, 0) 4rem), url('/top-background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <h1 className="hero-title">Critical-Fix</h1>
        <p className="hero-subtitle">
          <strong>Critical-Fix</strong> A fast-paced, IT-themed card game where you and your coworkers race to fix seven broken servers before anyone else.
          Sabotage rivals, hoard parts, and survive a day’s worth of tech nightmares in one chaotic deck.
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
          {/* YouTube Embed */}
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Critical Fix Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p>
            In <strong>Critical Fix</strong>, you're a data center technician racing to fix <strong>7 server tickets</strong> before anyone else.
          </p>
          <ul>
            <li>Use <strong>Part cards</strong> to repair hardware failures</li>
            <li><strong>Outsmart opponents</strong> with clever plays</li>
            <li><strong>Reopen their Tickets</strong> to stall their progress</li>
            <li><strong>Stack new problems</strong> for more points and chaos</li>
          </ul>
          <p>
            Every Ticket goes into <strong>Testing and Resolves</strong> — unless someone reopens it first. The more a Ticket gets reopened, the more it's worth.
          </p>

          <p>
            Only the most cunning, ruthless, and lucky technician will survive the chaos and fix 7 Tickets to win the game and make management happy. For now…
          </p>
          <p>
            .
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
        <iframe
          src="https://discord.com/widget?id=1383011396127559730&theme=dark"
          width="350"
          height="500"
          // allowTransparency={true}
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
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
