import Image from "next/image";

interface CardImagesProps {
  imageSrc: string;
  imageAlt: string;
}

export default function CardImages({ imageSrc, imageAlt }: CardImagesProps) {
  return (
    <div className="flex w-[200px] h-[454px] mr-4 mb-4 transition duration-300 hover:cursor-pointer hover:scale-105 hover:rotate-12">
      <Image
        src={imageSrc}
        alt={imageAlt}
        className="object-cover rounded-3xl shadow-black shadow-md"
        loading="lazy"
        layout="responsive"
        width={200}
        height={454}
      />
    </div>
  );
}
