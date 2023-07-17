import { getAllBlogContent } from "@/lib/content";
import Link from "next/link";

export default function BLogIndex({ content }) {
  return (
    <main className="max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
      <BlogHeader />
      <div className="space-y-16">
        {content.map((post) => {
          return <Post key={post.sys.id} {...post.fields} />;
        })}
      </div>
    </main>
  );
}

function BlogHeader() {
  return (
    <header className="py-16 sm:text-center">
      <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold">
        UiPath Blog
      </h1>
      <p className="text-lg text-slate-700">
        Latest Articles on RPA News and Automation Insights.
      </p>
    </header>
  );
}

function Post({ slug, title, categoryTag, publishedDate }) {
  return (
    <Link href={`/blog/${slug}`} className="relative group">
      <article className="relative p-4 -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50">
        <h3 className="text-base font-semibold tracking-tight text-slate-900 pt-8 lg:pt-0">
          {title}
        </h3>
        <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 line-clamp-2">
          <p>{categoryTag}</p>
        </div>
      </article>
    </Link>
  );
}

export const getStaticProps = async () => {
  let { items } = await getAllBlogContent();
  return { props: { content: items } };
};
