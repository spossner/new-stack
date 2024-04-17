import Image from "next/image";
import { images } from "~/data/mock";
import { shuffle } from "~/lib/utils";
import { db } from "~/server/db";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">Hello World</h1>
      <div className="flex flex-wrap gap-4 ">
        <div className="flex w-full flex-col gap-2">
          {posts.map((post) => (
            <div key={post.id}>{post.name}</div>
          ))}
        </div>
        {shuffle([...images, ...images, ...images]).map((image, index) => (
          <Image
            key={`${image.id}-${index}`}
            src={image.src}
            className="h-48 w-48 object-cover"
            width={192}
            height={192}
            alt={image.name}
          />
        ))}
      </div>
    </>
  );
}
