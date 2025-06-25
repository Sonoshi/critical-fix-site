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
          <strong>Critical-Fix</strong> is a fast-paced, IT-themed card game
          where you and your fellow data center techs compete to resolve seven
          tickets before anyone else.
          <br />
          Juggle hardware parts, sabotage your rivals, and outsmart the queue in
          a chaotic race to keep the data center running. With a day’s worth of
          tech headaches packed into one deck, it’s every IT war story you’ve
          ever told, now in card form.
          <br />
          Whether you work in tech or just enjoy competitive games with a bit of
          friendly sabotage, <strong>Critical-Fix</strong> is built to make you
          laugh, groan, and maybe even rage-quit. It’s basically a normal day
          on-call... just more fun.
        </p>

        {/* Email Sign-up */}
        <p className="hero-main-list-text">
          Interested in getting updates? Join our mailing list!
        </p>
        <MailingListForm />
      </section>

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
          allowTransparency={true}
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
