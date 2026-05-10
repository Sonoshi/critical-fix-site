import { type RefObject } from "react";
import * as htmlToImage from "html-to-image";
import { Download, Share2 } from "lucide-react";

interface ExportButtonsProps {
  cardRef: RefObject<HTMLDivElement | null>;
  title?: string;
}

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export default function ExportButtons({ cardRef, title }: ExportButtonsProps) {
  const generateImage = async () => {
    if (!cardRef.current) return null;

    try {
      return await htmlToImage.toPng(cardRef.current, {
        pixelRatio: 3,
        cacheBust: true,
      });
    } catch (err) {
      console.error("Image generation failed", err);
      return null;
    }
  };

  const downloadImage = async () => {
    const dataUrl = await generateImage();
    if (!dataUrl) return;

    const link = document.createElement("a");
    const slug = title?.trim().replace(/\s+/g, "-") || "critical-fix-card";
    link.download = `${slug}.png`;
    link.href = dataUrl;
    link.click();
  };

  const nativeShare = async () => {
    if (!("share" in navigator)) return false;
    const share = (
      navigator as Navigator & { share: (data: ShareData) => Promise<void> }
    ).share;

    try {
      const dataUrl = await generateImage();
      if (!dataUrl) return false;

      const response = await fetch(dataUrl);
      const blob = await response.blob();

      const file = new File([blob], "critical-fix-card.png", {
        type: blob.type,
      });

      await share({
        title: "Critical Fix Card",
        text: "I made a custom Critical Fix action card! #CriticalFixGame",
        files: [file],
      });

      return true;
    } catch (err) {
      console.error("Native share failed", err);
      return false;
    }
  };

  const shareOnTwitter = async () => {
    if ("share" in navigator) {
      const success = await nativeShare();
      if (success) return;
    }

    await downloadImage();

    const text = encodeURIComponent(
      "I made a custom Critical Fix action card! #CriticalFixGame",
    );

    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
  };

  const shareOnFacebook = async () => {
    if ("share" in navigator) {
      const success = await nativeShare();
      if (success) return;
    }

    await downloadImage();
    window.open("https://www.facebook.com/", "_blank");
  };

  const shareOnInstagram = async () => {
    if ("share" in navigator) {
      const success = await nativeShare();
      if (success) return;
    }

    await downloadImage();
    window.open("https://www.instagram.com/", "_blank");
  };

  return (
    <div className="exportSection">
      <p className="exportHint">
        Download your card or share it directly to social media:
      </p>
      <div className="exportButtons">
        <button
          className="exportButton downloadBtn"
          onClick={downloadImage}
          title="Download"
        >
          <Download size={18} />
          <span>Download</span>
        </button>

        <button
          className="exportButton twitterBtn"
          onClick={shareOnTwitter}
          title="Share on X"
        >
          <span style={{ fontWeight: "bold" }}>𝕏</span>
        </button>

        <button
          className="exportButton facebookBtn"
          onClick={shareOnFacebook}
          title="Share on Facebook"
        >
          <FacebookIcon />
        </button>

        <button
          className="exportButton instagramBtn"
          onClick={shareOnInstagram}
          title="Share on Instagram"
        >
          <InstagramIcon />
        </button>

        {"share" in navigator && (
          <button
            className="exportButton shareBtn"
            onClick={nativeShare}
            title="Share"
          >
            <Share2 size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
