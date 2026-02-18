import "./CFImageRow.css";

interface ImageItem {
  image: string;
  title?: string;
  description?: React.ReactNode;
}

interface Props {
  items: ImageItem[];
}

export default function CFImageRow({ items }: Props) {
  return (
    <section className="cfRow">
      {items.map((item, i) => (
        <div key={i} className="cfCard">
          <img src={item.image} alt={item.title || ""} />
          {item.description && <p>{item.description}</p>}
        </div>
      ))}
    </section>
  );
}
