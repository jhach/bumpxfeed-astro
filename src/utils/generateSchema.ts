export function generateSchema({
  schemaType = "BlogPosting",
  siteUrl = "",
  url = "",
  ...data
}: {
  schemaType?: string;
  siteUrl?: string;
  url?: string;
  [key: string]: any;
}) {
  switch (schemaType) {
    case "BlogPosting":
      return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: data.title,
        description: data.description,
        datePublished: data.publishDate,
        dateModified: data.updatedDate,
        image: data.heroImage,
        author: {
          "@type": "Person",
          name: data.author?.name || "Unknown Author",
          url: data.author?.url || `${siteUrl}/author/unknown`,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteUrl}${url}`,
        },
      };
    default:
      console.warn(`Unsupported schema type: ${schemaType}`);
      return null;
  }
}
