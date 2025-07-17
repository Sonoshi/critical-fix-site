import "./Home.css";
import MailingListForm from "../components/MailingListForm";
import { useEffect, useState } from "react";

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function handleSignupSuccess() {
        setSignedUp(true);

        // Automatically trigger file download
        const link = document.createElement("a");
        link.href = "/assets/Critical-Fix_pnp.zip";
        link.download = "Critical-Fix_pnp.zip";
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
                        Our <strong>Print & Play demo</strong> is a bite-sized version of the full game.
                        Perfect for getting a feel for the chaos. It’s designed to be easy to print at home:
                        just 3 pages, minimal cutting, and no special supplies required.
                    </p>

                    <img src="/assets/images/pnp_preview.png" alt="Print & Play Preview" className="image-break" />

                    <p>
                        While it’s not built for long-term replayability, this mini deck is a great way to
                        introduce friends, coworkers, or your unlucky roommates to the <strong>beautiful
                            disaster that is working in a data center</strong>.
                    </p>

                    <img src="/assets/images/data_center_mess.png" alt="Tech chaos" className="image-break" />

                    <p>
                        Whether you’ve lived through fried CPUs and cable spaghetti yourself, or you just want
                        to sabotage your friends’ IT dreams, you’ll fit right in.
                    </p>

                    <p>
                        Drop your email below to get access to the demo and join our dev mailing list! You’ll
                        be the first to hear about updates, behind-the-scenes chaos, and when the full game
                        goes live.
                    </p>

                    {!signedUp && <MailingListForm onSuccess={handleSignupSuccess} />}

                    {signedUp && (
                        <>
                            <p className="form-status success">You're in! Here's your download:</p>
                            <a
                                href="/assets/Critical-Fix_pnp.zip"
                                download
                                className="download-button"
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
                        We’re working on a digital Tabletop Simulator version so you can try the
                        game online with friends. Stay tuned!
                    </p>
                </div>
            </Section>
        </main>
    );
}
