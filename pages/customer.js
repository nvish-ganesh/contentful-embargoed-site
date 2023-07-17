/* eslint-disable @next/next/no-img-element */
import { getCustomerContent } from "@/lib/content";
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
      <img
        src={`http:${heroSuccessStories.thumbnailImage.fields.file.url}`}
        alt={heroSuccessStories.thumbnailImage.fields.file.fileName}
        width={
          heroSuccessStories.thumbnailImage.fields.file.details.image.width
        }
        height={
          heroSuccessStories.thumbnailImage.fields.file.details.image.height
        }
        className="border"
        priority="true"
      />
    </div>
  );
}

export const getStaticProps = async () => {
  let entry = await getCustomerContent();
  let dummyEntry = {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: "Link",
          linkType: "Space",
          id: "2f3meiv6rg5s",
        },
      },
      id: "2kH71Wu7coFa7VqjKea2gt",
      type: "Entry",
      createdAt: "2023-02-13T14:12:17.298Z",
      updatedAt: "2023-02-23T12:47:36.670Z",
      environment: {
        sys: {
          id: "Staging",
          type: "Link",
          linkType: "Environment",
        },
      },
      revision: 8,
      contentType: {
        sys: {
          type: "Link",
          linkType: "ContentType",
          id: "customerOverview",
        },
      },
      locale: "en-US",
    },
    fields: {
      title: "Customer Overview",
      heroTitle: "Say Hello to Our Happy Customers ",
      heroLogoCard: [
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "2f3meiv6rg5s",
              },
            },
            id: "573FIVlVpkCLTjXs65mLo1",
            type: "Entry",
            createdAt: "2022-12-23T19:42:03.345Z",
            updatedAt: "2023-03-01T04:32:00.934Z",
            environment: {
              sys: {
                id: "Staging",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 5,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "logo",
              },
            },
            locale: "en-US",
          },
          fields: {
            entryTitle: "TAT Productions",
            image: {
              metadata: {
                tags: [],
              },
              sys: {
                space: {
                  sys: {
                    type: "Link",
                    linkType: "Space",
                    id: "2f3meiv6rg5s",
                  },
                },
                id: "3xss7NfZT8pMJdRrbe3mIA",
                type: "Asset",
                createdAt: "2023-03-01T04:31:58.140Z",
                updatedAt: "2023-03-01T04:31:58.140Z",
                environment: {
                  sys: {
                    id: "Staging",
                    type: "Link",
                    linkType: "Environment",
                  },
                },
                revision: 1,
                locale: "en-US",
              },
              fields: {
                title: "TAT Productions",
                description: "TAT Productions",
                file: {
                  url: "//images.ctfassets.net/2f3meiv6rg5s/3xss7NfZT8pMJdRrbe3mIA/51b7bcf2b9a69f21ea034c4e6a341454/logo-tat-productions.svg",
                  details: {
                    size: 4733,
                    image: {
                      width: 90,
                      height: 16,
                    },
                  },
                  fileName: "logo-tat-productions.svg",
                  contentType: "image/svg+xml",
                },
              },
            },
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "2f3meiv6rg5s",
              },
            },
            id: "4RqSW5DLCr2EduU2fcv1tg",
            type: "Entry",
            createdAt: "2022-12-23T19:55:32.106Z",
            updatedAt: "2023-03-01T04:33:21.027Z",
            environment: {
              sys: {
                id: "Staging",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 5,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "logo",
              },
            },
            locale: "en-US",
          },
          fields: {
            entryTitle: "The Oscars",
            image: {
              metadata: {
                tags: [],
              },
              sys: {
                space: {
                  sys: {
                    type: "Link",
                    linkType: "Space",
                    id: "2f3meiv6rg5s",
                  },
                },
                id: "3eKlLsz75gDAtpKmRDGwWK",
                type: "Asset",
                createdAt: "2023-03-01T04:33:17.984Z",
                updatedAt: "2023-03-01T04:33:17.984Z",
                environment: {
                  sys: {
                    id: "Staging",
                    type: "Link",
                    linkType: "Environment",
                  },
                },
                revision: 1,
                locale: "en-US",
              },
              fields: {
                title: "The Oscars",
                description: "The Oscars",
                file: {
                  url: "//images.ctfassets.net/2f3meiv6rg5s/3eKlLsz75gDAtpKmRDGwWK/5774b7772b83f3c0dab4e7ab69de0a0e/logo-the-oscars.svg",
                  details: {
                    size: 7066,
                    image: {
                      width: 88,
                      height: 27,
                    },
                  },
                  fileName: "logo-the-oscars.svg",
                  contentType: "image/svg+xml",
                },
              },
            },
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "2f3meiv6rg5s",
              },
            },
            id: "7pLWL9dPTan7HtqKuoc4XX",
            type: "Entry",
            createdAt: "2022-12-23T19:53:52.675Z",
            updatedAt: "2023-05-20T00:18:17.996Z",
            environment: {
              sys: {
                id: "Staging",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 10,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "logo",
              },
            },
            locale: "en-US",
          },
          fields: {
            entryTitle: "Ingenuity (No Link)",
            image: {
              metadata: {
                tags: [],
              },
              sys: {
                space: {
                  sys: {
                    type: "Link",
                    linkType: "Space",
                    id: "2f3meiv6rg5s",
                  },
                },
                id: "11jwlk7l7UiEnyCqSLRXjz",
                type: "Asset",
                createdAt: "2023-03-01T04:32:44.906Z",
                updatedAt: "2023-05-20T00:18:04.382Z",
                environment: {
                  sys: {
                    id: "Staging",
                    type: "Link",
                    linkType: "Environment",
                  },
                },
                revision: 2,
                locale: "en-US",
              },
              fields: {
                title: "Ingenuity",
                description: "Ingenuity",
                file: {
                  url: "//images.ctfassets.net/2f3meiv6rg5s/11jwlk7l7UiEnyCqSLRXjz/84f7b021fccdf3eaf9144e66c7409184/logo-ingenuity.svg",
                  details: {
                    size: 3753,
                    image: {
                      width: 90,
                      height: 21,
                    },
                  },
                  fileName: "logo-ingenuity.svg",
                  contentType: "image/svg+xml",
                },
              },
            },
            description:
              "Ingenuity Studios Reinvents Its Pipeline with Universal Storage",
          },
        },
      ],
      heroSuccessStories: {
        metadata: {
          tags: [
            {
              sys: {
                type: "Link",
                linkType: "Tag",
                id: "resource_type_success_stories",
              },
            },
          ],
        },
        sys: {
          space: {
            sys: {
              type: "Link",
              linkType: "Space",
              id: "2f3meiv6rg5s",
            },
          },
          id: "1qlNqhuc7fFonI8E1mzj3v",
          type: "Entry",
          createdAt: "2023-02-18T09:18:53.398Z",
          updatedAt: "2023-05-17T06:45:22.337Z",
          environment: {
            sys: {
              id: "Staging",
              type: "Link",
              linkType: "Environment",
            },
          },
          revision: 8,
          contentType: {
            sys: {
              type: "Link",
              linkType: "ContentType",
              id: "videoResource",
            },
          },
          locale: "en-US",
        },
        fields: {
          resourceTitleWithType:
            "Success Story: The VAST Experience – San Diego Supercomputer Center",
          title: "The VAST Experience – San Diego Supercomputer Center",
          slug: "the-vast-experience-san-diego-supercomputer-center-success-stories",
          publishedDate: "2023-02-09T21:40-06:00",
          thumbnailImage: {
            metadata: {
              tags: [],
            },
            sys: {
              space: {
                sys: {
                  type: "Link",
                  linkType: "Space",
                  id: "2f3meiv6rg5s",
                },
              },
              id: "4cXlSraBJ4X2k3MpAku3pI",
              type: "Asset",
              createdAt: "2023-02-17T16:07:45.486Z",
              updatedAt: "2023-03-11T03:55:04.461Z",
              environment: {
                sys: {
                  id: "Staging",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 3,
              locale: "en-US",
            },
            fields: {
              title: "Placeholder",
              file: {
                url: "//localhost:8080/images/2f3meiv6rg5s/4cXlSraBJ4X2k3MpAku3pI/b2c54d2e0137f5ecec07c9245341857a/background-logo-vast.webp",
                details: {
                  size: 55622,
                  image: {
                    width: 1920,
                    height: 1080,
                  },
                },
                fileName: "background-logo-vast.webp",
                contentType: "image/webp",
              },
            },
          },
          resourceCategory: "Success Story",
          type: "No",
          resourceType: "Video",
          successStories: "https://youtu.be/0nCbInFis-I",
          seo: {
            sys: {
              type: "Link",
              linkType: "Entry",
              id: "6ECyfkJhymZy0rRCWcCz5Y",
            },
          },
        },
      },
      middleContent: [
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "2f3meiv6rg5s",
              },
            },
            id: "3DRaUqn2v2S8r7AI7zZBaD",
            type: "Entry",
            createdAt: "2023-02-14T14:44:38.824Z",
            updatedAt: "2023-02-27T06:58:30.737Z",
            environment: {
              sys: {
                id: "Staging",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 8,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "section",
              },
            },
            locale: "en-US",
          },
          fields: {
            entryTitle: "Customer Overview: Section 1",
            theme: "Dark",
            blocks: [
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "4fcDPAP8zs8VdMVqHl3H4w",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "4gdkAcGZfUJu3HAJbP1chP",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "US7fuBRxkxHGtapsYd5Bd",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "689e60PStwkeETylQTxzRM",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "4TebLoSN6ekRKZ6MIk8K99",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "3KkVnI5i040gTrM4al6M05",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "1EpAezk58w7O5NKnd03Qq7",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "6fU8ccgbmDDJOGcSFGU7Rc",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "6QMltuHbHMMHZ919eA9KBM",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "49bhOdRpCCzGM1J04lG3h4",
                },
              },
            ],
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "2f3meiv6rg5s",
              },
            },
            id: "3QboelFRtCLIvGzjUAieql",
            type: "Entry",
            createdAt: "2023-02-15T14:18:57.141Z",
            updatedAt: "2023-02-20T23:31:48.227Z",
            environment: {
              sys: {
                id: "Staging",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 2,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "section",
              },
            },
            locale: "en-US",
          },
          fields: {
            entryTitle: "Customer Overview: Section 2",
            theme: "Dark",
            blocks: [
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "7fS9R4RfrTqlLOU3oJ8urR",
                },
              },
            ],
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "2f3meiv6rg5s",
              },
            },
            id: "3DRaUqn2v2S8r7AI7zZBaD",
            type: "Entry",
            createdAt: "2023-02-14T14:44:38.824Z",
            updatedAt: "2023-02-27T06:58:30.737Z",
            environment: {
              sys: {
                id: "Staging",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 8,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "section",
              },
            },
            locale: "en-US",
          },
          fields: {
            entryTitle: "Customer Overview: Section 1",
            theme: "Dark",
            blocks: [
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "4fcDPAP8zs8VdMVqHl3H4w",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "4gdkAcGZfUJu3HAJbP1chP",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "US7fuBRxkxHGtapsYd5Bd",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "689e60PStwkeETylQTxzRM",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "4TebLoSN6ekRKZ6MIk8K99",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "3KkVnI5i040gTrM4al6M05",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "1EpAezk58w7O5NKnd03Qq7",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "6fU8ccgbmDDJOGcSFGU7Rc",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "6QMltuHbHMMHZ919eA9KBM",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "49bhOdRpCCzGM1J04lG3h4",
                },
              },
            ],
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "2f3meiv6rg5s",
              },
            },
            id: "3QboelFRtCLIvGzjUAieql",
            type: "Entry",
            createdAt: "2023-02-15T14:18:57.141Z",
            updatedAt: "2023-02-20T23:31:48.227Z",
            environment: {
              sys: {
                id: "Staging",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 2,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "section",
              },
            },
            locale: "en-US",
          },
          fields: {
            entryTitle: "Customer Overview: Section 2",
            theme: "Dark",
            blocks: [
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "7fS9R4RfrTqlLOU3oJ8urR",
                },
              },
            ],
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "2f3meiv6rg5s",
              },
            },
            id: "3DRaUqn2v2S8r7AI7zZBaD",
            type: "Entry",
            createdAt: "2023-02-14T14:44:38.824Z",
            updatedAt: "2023-02-27T06:58:30.737Z",
            environment: {
              sys: {
                id: "Staging",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 8,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "section",
              },
            },
            locale: "en-US",
          },
          fields: {
            entryTitle: "Customer Overview: Section 1",
            theme: "Dark",
            blocks: [
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "4fcDPAP8zs8VdMVqHl3H4w",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "4gdkAcGZfUJu3HAJbP1chP",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "US7fuBRxkxHGtapsYd5Bd",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "689e60PStwkeETylQTxzRM",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "4TebLoSN6ekRKZ6MIk8K99",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "3KkVnI5i040gTrM4al6M05",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "1EpAezk58w7O5NKnd03Qq7",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "6fU8ccgbmDDJOGcSFGU7Rc",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "6QMltuHbHMMHZ919eA9KBM",
                },
              },
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "49bhOdRpCCzGM1J04lG3h4",
                },
              },
            ],
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: "Link",
                linkType: "Space",
                id: "2f3meiv6rg5s",
              },
            },
            id: "3QboelFRtCLIvGzjUAieql",
            type: "Entry",
            createdAt: "2023-02-15T14:18:57.141Z",
            updatedAt: "2023-02-20T23:31:48.227Z",
            environment: {
              sys: {
                id: "Staging",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 2,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "section",
              },
            },
            locale: "en-US",
          },
          fields: {
            entryTitle: "Customer Overview: Section 2",
            theme: "Dark",
            blocks: [
              {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "7fS9R4RfrTqlLOU3oJ8urR",
                },
              },
            ],
          },
        },
      ],
    },
  };
  return { props: { content: dummyEntry } };
};
