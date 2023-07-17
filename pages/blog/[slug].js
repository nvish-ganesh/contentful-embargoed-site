import { getAllBlogContent, getBlogContent } from "@/lib/content";
import Image from "next/image";

export default function Blob({ content }) {
  return (
    <main className="max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
      <BlogHeader {...content.fields} />
      <ThumbnailImage {...content.fields} />
    </main>
  );
}

function BlogHeader({ title, categoryTag }) {
  return (
    <header className="py-16 sm:text-left">
      <p className="text-lg text-slate-700 dark:text-slate-400">
        {categoryTag}
      </p>
      <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">
        {title}
      </h1>
    </header>
  );
}

function ThumbnailImage({ thumbnailImage }) {
  console.log("thumbnailImage", thumbnailImage);
  return (
    <Image
      src={`https:${thumbnailImage.fields.image.fields.file.url}`}
      alt={thumbnailImage.fields.image.fields.title}
      width={thumbnailImage.fields.image.fields.file.details.image.width}
      height={thumbnailImage.fields.image.fields.file.details.image.height}
    />
  );
}

export const getStaticPaths = async (context) => {
  let { items } = await getAllBlogContent();
  // console.log("content here", items);

  const paths = items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  let slug = context.params.slug;
  const entries = await getBlogContent(slug);
  console.log("getStaticProps content", entries.items[0]);
  return { props: { content: entries.items[0] } };
};
