// src/components/NewsSection.tsx
import { useEffect } from 'react';

export default function NewsSection() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://tracker.metricool.com/resources/be.js';
        script.async = true;
        script.onload = () => {
            if ((window as any).beTracker) {
                (window as any).beTracker.t({ hash: '9f3a7e13ce61cd3d106c065e58cd3b81' });
            }
        };
        document.head.appendChild(script);
    }, []);

    return (
        <section className="section">
            <h2 className="section-title"></h2>
            <div id="be-tracker-container"></div>
        </section>
    );
}
