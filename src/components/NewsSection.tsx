import { useEffect } from "react";

export default function NewsSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.juicer.io/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* Inject Juicer styles */}
      <link
        rel="stylesheet"
        href="https://assets.juicer.io/embed.css"
        type="text/css"
      />

      {/* Juicer Feed */}
      <div className="juicer-feed" data-feed-id="criticalfix"></div>
    </>
  );
}
