import { defineType, defineField } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Studies",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "client",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Workflow Automation", value: "Workflow Automation" },
          { title: "Voice AI", value: "Voice AI" },
          { title: "Computer Vision", value: "Computer Vision" },
          { title: "Custom AI", value: "Custom AI" },
          { title: "Ad Automation", value: "Ad Automation" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "outcome",
      title: "Key Outcome",
      type: "string",
      description: "One-line summary of the result",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "image",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Project Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "challenge",
      title: "Challenge Section",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      description: "Problem statement and requirements",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "solution",
      title: "Solution Section",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      description: "How we solved it",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "results",
      title: "Results Section",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      description: "Metrics and impact",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "timeline",
      title: "Timeline",
      type: "string",
      description: "e.g., '12 weeks from discovery to deployment'",
    }),
    defineField({
      name: "nextSteps",
      title: "Next Steps",
      type: "string",
      description: "What's coming next for this project",
    }),
    defineField({
      name: "relatedProjects",
      title: "Related Projects",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "slug",
              title: "Project Slug",
              type: "string",
            },
            {
              name: "title",
              title: "Project Title",
              type: "string",
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      client: "client",
      category: "category",
      media: "image",
    },
    prepare(selection) {
      const { title, client, category, media } = selection;
      return {
        title,
        subtitle: `${client} — ${category}`,
        media,
      };
    },
  },
});
