import React from "react";

interface ImageUploaderProps {
  setImage: (image: string) => void;
}

export default function ImageUploader({ setImage }: ImageUploaderProps) {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="imageUploader">
      <label className="uploadLabel">Upload Artwork</label>

      <input
        className="uploadInput"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
    </div>
  );
}
