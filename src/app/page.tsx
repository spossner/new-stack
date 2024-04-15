import { images } from "~/data/mock";
import { shuffle } from "~/lib/utils";

export default function HomePage() {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">Hello World</h1>
      <div className="flex flex-wrap gap-4 ">
        {shuffle([...images, ...images, ...images]).map((image) => (
          <img
            key={image.id}
            src={image.src}
            className="h-48 w-48 object-cover"
          />
        ))}
      </div>
    </>
  );
}
