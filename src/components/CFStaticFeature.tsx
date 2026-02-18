import "./CFStaticFeature.css";

interface CFStaticFeatureProps {
  image: string;
  title: string;
  description: React.ReactNode;
}

export default function CFStaticFeature({
  image,
  title,
  description,
}: CFStaticFeatureProps) {
  return (
    <section className="cfStaticFeature">
      <div className="cfStaticFeature-imageWrapper">
        <img src={image} alt={title} className="cfStaticFeature-image" />
      </div>

      <div className="cfStaticFeature-content">
        <h2 className="cfStaticFeature-title">{title}</h2>
        <p className="cfStaticFeature-description">{description}</p>
      </div>
    </section>
  );
}
