import { useState, useRef } from "react";
import CardPreview from "../components/CardGenerator/CardPreview";
import ImageUploader from "../components/CardGenerator/ImageUploader";
import CardForm from "../components/CardGenerator/CardForm";
import ExportButtons from "../components/CardGenerator/ExportButtons";

import "./CardGen.css";

export default function CardCreator() {
  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [flavor, setFlavor] = useState("");

  const [imageScale, setImageScale] = useState(1);
  const [imageOffsetX, setImageOffsetX] = useState(0);
  const [imageOffsetY, setImageOffsetY] = useState(0);

  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleSetImage = (img: string) => {
    setImage(img);
    setImageScale(1);
    setImageOffsetX(0);
    setImageOffsetY(0);
  };

  const handleImageMove = (dx: number, dy: number) => {
    setImageOffsetX((prev) => prev + dx);
    setImageOffsetY((prev) => prev + dy);
  };

  const resetImageAdjust = () => {
    setImageScale(1);
    setImageOffsetX(0);
    setImageOffsetY(0);
  };

  return (
    <div className="create-page">
      <section className="shareSection">
        <h2>Share Your Critical Fix Cards</h2>

        <p>
          Create ridiculous action cards, meme cards, cursed IT disasters, and
          sabotage ideas and then share them with your friends and us on social
          media.
        </p>

        <p>Tag us so we can feature the best creations!</p>

        <div className="socialLinks">
          <a href="https://x.com/CriticalFix" target="_blank" rel="noreferrer">
            <span style={{ fontWeight: "bold" }}>𝕏</span> @CriticalFixGame
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61577106580801"
            target="_blank"
            rel="noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            Facebook
          </a>

          <a
            href="https://www.instagram.com/criticalfixgame/"
            target="_blank"
            rel="noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            Instagram
          </a>
        </div>
      </section>
      <div className="generatorLayout">
        <div className="generatorControls">
          <ImageUploader setImage={handleSetImage} />

          {image && (
            <div className="imageAdjust">
              <div className="imageAdjustHeader">
                <span className="imageAdjustLabel">Image Adjustment</span>
                <button className="resetBtn" onClick={resetImageAdjust}>
                  Reset
                </button>
              </div>
              <label className="sliderLabel">
                Zoom
                <input
                  type="range"
                  min="0.2"
                  max="3"
                  step="0.05"
                  value={imageScale}
                  onChange={(e) => setImageScale(parseFloat(e.target.value))}
                />
              </label>
              <p className="imageAdjustHint">
                Drag the image on the card to reposition it.
              </p>
            </div>
          )}

          <CardForm
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            flavor={flavor}
            setFlavor={setFlavor}
          />

          <ExportButtons cardRef={cardRef} title={title} />
        </div>

        <div className="generatorPreview">
          <CardPreview
            ref={cardRef}
            cardType="action"
            image={image}
            title={title}
            description={description}
            flavor={flavor}
            extraData={{}}
            imageScale={imageScale}
            imageOffsetX={imageOffsetX}
            imageOffsetY={imageOffsetY}
            onImageMove={handleImageMove}
          />
        </div>
      </div>
    </div>
  );
}
