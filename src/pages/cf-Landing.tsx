
import replaceMe from '../assets/replace_Me.png';
import './Home.css';
import NewsSection from '../components/NewsSection';

function Section({
    title,
    children,
}:
    {
        title: string;
        children?: React.ReactNode;
    }) {
    return (
        <section className="section">
            <h2 className="section-title">{title}</h2>
            {children}
        </section>
    );
}

export default function Home() {
    const featuredCards = Array.from({ length: 9 }, (_, i) => i + 1);

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
                <h1 className="hero-title">Critical Fix</h1>
                <p className="hero-subtitle">
                    A chaotic card game for IT pros and disaster-prone data centers. The
                    first to fix 7 servers wins.
                </p>
                <a href="#preorder" className="cta-button">
                    Preorder Now
                </a>
            </section>

            {/* News */}
            <NewsSection />


            {/* Featured Cards */}
            <Section title="Featured Cards">
                <div className="card-grid">
                    {featuredCards.map(i => (
                        <img
                            key={i}
                            src={`/cards/card${i}.PNG`}
                            alt={`Card ${i}`}
                            className="card-image"
                        />
                    ))}
                </div>
            </Section>

            {/* How to Play */}
            <Section title="How to Play">
                <ol className="how-to-play">
                    <li>Draw and play cards to fix broken servers.</li>
                    <li>Sabotage your opponents with traps and reroutes.</li>
                    <li>Be the first to resolve 7 server tickets to win!</li>
                </ol>
            </Section>

            {/* Lore Section
            <Section title="The Lore">
                <p className="section-text">
                    In a world where every ticket is a potential meltdown, only the savviest techs survive. From office
                    poltergeists to unplugged cables, Critical Fix is based on real-life IT horror stories.
                </p>
            </Section> */}

            {/* Events */}
            <Section title="Upcoming Events">
                <p className="section-text">
                    Catch us at Tokyo Game Market and join our online playtests every
                    weekend.
                </p>
            </Section>

            {/* About the Creators */}
            <Section title="About Us">
                <p className="section-text">
                    We're three data center techs who turned our daily chaos into a card
                    game. Critical Fix is our love letter to tech support culture.
                </p>
            </Section>

            {/* Contact */}
            <Section title="Contact Us">
                <p className="section-text">
                    Want to collaborate, review the game, or ask questions? Reach out at
                    hello@criticalfixgame.com
                </p>
            </Section>

            {/* Preorder Section */}
            <Section title="Preorder Critical Fix">
                <img
                    src={replaceMe}
                    alt="Box product shot"
                    className="preorder-image"
                />
                <a href="#" className="reserve-button">
                    Reserve Your Deck
                </a>
            </Section>
        </main>
    );
}
