interface CardFormProps {
  title: string;
  setTitle: (v: string) => void;
  description: string;
  setDescription: (v: string) => void;
  flavor: string;
  setFlavor: (v: string) => void;
}

export default function CardForm({
  title,
  setTitle,
  description,
  setDescription,
  flavor,
  setFlavor,
}: CardFormProps) {
  return (
    <div className="cardForm">
      <input
        className="formInput"
        placeholder="Card Title"
        maxLength={20}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="charCount">{title.length}/20</div>

      <textarea
        className="formTextarea"
        placeholder="Description"
        maxLength={150}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="charCount">{description.length}/150</div>

      <input
        className="formInput"
        placeholder="Flavor Text"
        maxLength={75}
        value={flavor}
        onChange={(e) => setFlavor(e.target.value)}
      />
      <div className="charCount">{flavor.length}/75</div>
    </div>
  );
}
