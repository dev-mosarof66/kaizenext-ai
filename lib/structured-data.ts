export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kaizenext",
    url: "https://kaizenext.ai",
    logo: "https://kaizenext.ai/logo.png",
    description: "AI engineering consultancy building custom AI solutions and automation products",
    sameAs: [
      "https://linkedin.com/company/kaizenext",
      "https://twitter.com/kaizenext",
      "https://github.com/kaizenext",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
      addressLocality: "Dhaka",
      streetAddress: "Gulshan, Dhaka",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "hello@kaizenext.ai",
      areaServed: "Worldwide",
    },
  };
}

export function generateBlogPostSchema(
  title: string,
  excerpt: string,
  author: string,
  date: string,
  imageUrl: string,
  slug: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: excerpt,
    image: imageUrl,
    datePublished: date,
    author: {
      "@type": "Person",
      name: author,
    },
    url: `https://kaizenext.ai/insights/${slug}`,
  };
}

export function generateCaseStudySchema(
  title: string,
  client: string,
  outcome: string,
  imageUrl: string,
  slug: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description: outcome,
    image: imageUrl,
    author: {
      "@type": "Organization",
      name: "Kaizenext",
    },
    url: `https://kaizenext.ai/work/${slug}`,
    about: {
      "@type": "Organization",
      name: client,
    },
  };
}

export function generateSolutionPageSchema(
  title: string,
  description: string,
  features: string[],
  imageUrl: string,
  slug: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: description,
    image: imageUrl,
    provider: {
      "@type": "Organization",
      name: "Kaizenext",
      url: "https://kaizenext.ai",
    },
    url: `https://kaizenext.ai/solutions/${slug}`,
    areaServed: "Worldwide",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `https://kaizenext.ai/solutions/${slug}`,
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
