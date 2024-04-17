import Image from "next/image";
import { db } from "~/server/db";

export default async function HomePage() {
  const dbImages = await db.query.images.findMany({
    orderBy: (image, { desc }) => desc(image.id),
  });
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold text-zinc-200">Gallery</h1>
      <div className="flex flex-wrap gap-4 ">
        {dbImages.map((image) => (
          <div key={image.id} className="flex flex-col gap-1">
            <Image
              src={image.url}
              className="h-48 w-48 object-cover"
              width={192}
              height={192}
              alt={image.name}
            />
            <div className="text-xs text-zinc-500">{image.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
