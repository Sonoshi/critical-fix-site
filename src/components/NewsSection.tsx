import { useEffect, useRef } from 'react';

export default function NewsSection() {
    const scriptLoaded = useRef(false); // avoids double loading in dev

    useEffect(() => {
        if (scriptLoaded.current) {
            window.twttr?.widgets?.load();
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        script.onload = () => {
            window.twttr?.widgets?.load();
            scriptLoaded.current = true;
        };
        document.body.appendChild(script);
    }, []);

    return (
        <section className="section">
            <h2 className="section-title">News & Updates</h2>
            <a
                className="twitter-timeline"
                data-theme="dark"
                data-height="600"
                href="https://twitter.com/CriticalFix"
            >
                Tweets by @CriticalFix
            </a>
        </section>
    );
}
