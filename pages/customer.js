/* eslint-disable @next/next/no-img-element */
import { getCustomerContent } from "@/lib/content";
import { contentService } from "@/services/content";
import Image from "next/image";

export default function Customer({ content }) {
  return (
    <main className="flex flex-col min-h-screen mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12">
      {/* <CustomerHeader /> */}
      <HeroSuccessStories
        heroSuccessStories={content.fields.heroSuccessStories.fields}
      />
    </main>
  );
}

function CustomerHeader() {
  return (
    <header className="py-16 sm:text-center mx-auto">
      <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold">
        UiPath Blog
      </h1>
      <p className="text-lg text-slate-700">
        Latest Articles on RPA News and Automation Insights.
      </p>
    </header>
  );
}

function HeroSuccessStories({ heroSuccessStories }) {
  return (
    <div className="py-16 max-w-2xl mx-auto">
      <p className="text-sm mb-3 text-slate-700">
        {heroSuccessStories.resourceCategory}
      </p>
      <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold">
        {heroSuccessStories.title}
      </h2>
      <p className="text-lg mb-3 text-slate-700">
        {heroSuccessStories.resourceTitleWithType}
      </p>
      {heroSuccessStories.thumbnailImage.fields && (
        <img
          src={`http:${heroSuccessStories.thumbnailImage.fields?.file.url}`}
          alt={heroSuccessStories.thumbnailImage.fields.file.fileName}
          width={
            heroSuccessStories.thumbnailImage.fields.file.details.image.width
          }
          height={
            heroSuccessStories.thumbnailImage.fields.file.details.image.height
          }
          className="border-2"
          priority="true"
        />
      )}
    </div>
  );
}

export const getStaticProps = async (context) => {
  let entry = await getCustomerContent(context.preview);
  let stringifyEntry = contentService(JSON.stringify(entry));
  return { props: { content: JSON.parse(stringifyEntry) } };
};
