import { forwardRef, useRef } from "react";
import ticketTemplate from "../../assets/card_creator/ticket.png";
import partTemplate from "../../assets/card_creator/part.png";
import actionTemplate from "../../assets/card_creator/action.png";

export type CardType = "ticket" | "part" | "action";

interface CardPreviewProps {
  cardType: CardType;
  image: string | null;
  title: string;
  description: string;
  flavor: string;
  extraData: any;
  imageScale?: number;
  imageOffsetX?: number;
  imageOffsetY?: number;
  onImageMove?: (dx: number, dy: number) => void;
}

// Pixel coordinates of the artwork frame inside each card template (at 400×672 render size)
const FRAME: Record<
  CardType,
  { top: number; left: number; right: number; bottom: number }
> = {
  action: { top: 90, left: 25, right: 25, bottom: 155 },
  ticket: { top: 86, left: 17, right: 17, bottom: 174 },
  part: { top: 86, left: 17, right: 17, bottom: 174 },
};

const CardPreview = forwardRef<HTMLDivElement, CardPreviewProps>(
  (
    {
      cardType,
      image,
      title,
      description,
      flavor,
      imageScale = 1,
      imageOffsetX = 0,
      imageOffsetY = 0,
      onImageMove,
    },
    ref,
  ) => {
    const artworkRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const lastPos = useRef({ x: 0, y: 0 });

    const getTemplate = () => {
      switch (cardType) {
        case "ticket":
          return ticketTemplate;
        case "part":
          return partTemplate;
        case "action":
          return actionTemplate;
        default:
          return actionTemplate;
      }
    };

    const titleColor = cardType === "action" ? "#000" : "#fff";
    const frame = FRAME[cardType];

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
      if (!image || !onImageMove) return;
      isDragging.current = true;
      lastPos.current = { x: e.clientX, y: e.clientY };
      e.currentTarget.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging.current || !onImageMove) return;
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      lastPos.current = { x: e.clientX, y: e.clientY };
      onImageMove(dx, dy);
    };

    const handlePointerUp = () => {
      isDragging.current = false;
    };

    return (
      <div
        ref={ref}
        style={{
          width: "400px",
          height: "672px",
          position: "relative",
          borderRadius: "18px",
          overflow: "hidden",
          fontFamily: "'ActionMan', Arial, sans-serif",
          color: "#000",
        }}
      >
        {/* Artwork — behind the template, shows through the transparent cutout */}
        {image && (
          <div
            ref={artworkRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            style={{
              position: "absolute",
              top: `${frame.top}px`,
              left: `${frame.left}px`,
              right: `${frame.right}px`,
              bottom: `${frame.bottom}px`,
              backgroundImage: `url(${image})`,
              backgroundSize: `${imageScale * 100}%`,
              backgroundPosition: `calc(50% + ${imageOffsetX}px) calc(50% + ${imageOffsetY}px)`,
              backgroundRepeat: "no-repeat",
              cursor: "grab",
              touchAction: "none",
            }}
          />
        )}

        {/* Template — on top so its opaque frame covers artwork edges */}
        <img
          src={getTemplate()}
          alt="Card Template"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 5,
            left: 0,
            pointerEvents: "none",
          }}
        />

        {/* Title */}
        <div
          style={{
            position: "absolute",
            top: "35px",
            left: "40px",
            right: "40px",
            textAlign: "center",
            fontFamily: "'PotatoSans', Impact, fantasy",
            fontSize: "32px",
            fontWeight: "bold",
            color: titleColor,
            pointerEvents: "none",
          }}
        >
          {title || "Card Title"}
        </div>

        {/* Description */}
        <div
          style={{
            position: "absolute",
            top: "538px",
            left: "50px",
            right: "50px",
            fontFamily: "'ActionMan', Arial, sans-serif",
            fontSize: "14px",
            lineHeight: "1.4",
            color: "#000",
            pointerEvents: "none",
          }}
        >
          {description}
        </div>

        {/* Flavor */}
        {flavor && (
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50px",
              right: "50px",
              textAlign: "center",
              fontFamily: "'ActionMan', Arial, sans-serif",
              fontSize: "12px",
              fontStyle: "italic",
              opacity: 1,
              color: "#000",
              pointerEvents: "none",
            }}
          >
            "{flavor}"
          </div>
        )}

        {/* Watermark */}
        <div
          style={{
            position: "absolute",
            bottom: "3px",
            right: "30px",
            fontFamily: "'ActionMan', Arial, sans-serif",
            fontSize: "11px",
            opacity: 0.5,
            fontWeight: "bold",
            color: "#000",
            pointerEvents: "none",
          }}
        >
          Created with Critical Fix card generator
        </div>

        {/* Watermark 2 */}
        <div
          style={{
            position: "absolute",
            top: "70px",
            right: "60px",
            fontFamily: "'ActionMan', Arial, sans-serif",
            fontSize: "11px",
            opacity: 0.5,
            fontWeight: "bold",
            color: "#000",
            pointerEvents: "none",
          }}
        >
          Unofficial Critical Fix card
        </div>

        {/* Watermark 3 */}
        <div
          style={{
            position: "absolute",
            top: "23px",
            left: "60px",
            fontFamily: "'ActionMan', Arial, sans-serif",
            fontSize: "11px",
            opacity: 0.5,
            fontWeight: "bold",
            color: "#000",
            pointerEvents: "none",
          }}
        >
          www.critical-fix.com/create-a-card
        </div>
      </div>
    );
  },
);

CardPreview.displayName = "CardPreview";
export default CardPreview;
