export function generateSchema({ schemaType = "BlogPosting", ...data }) {
  switch (schemaType) {
    case "BlogPosting":
      return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: data.title,
        description: data.description,
        datePublished: data.publishDate,
        author: {
          "@type": "Person",
          name: data.author.name, // Directly use author.name
          url: data.author.url,  // Directly use author.url
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": data.url,
        },
      };

    default:
      console.warn(`Unsupported schema type: ${schemaType}`);
      return null;
  }
}