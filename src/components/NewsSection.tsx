import { useEffect } from 'react';

interface TwitterWidgets {
    widgets: {
        load: () => void;
    };
}

declare global {
    interface Window {
        twttr?: TwitterWidgets;
    }
}

export default function NewsSection() {
    useEffect(() => {
        window.twttr?.widgets?.load();
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
