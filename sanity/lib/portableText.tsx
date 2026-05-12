import React from "react";
import Image from "next/image";
import { urlFor } from "./image";

interface PortableTextBlock {
  _type: string;
  _key?: string;
  style?: string;
  children?: Array<{ _type: string; _key: string; text: string; marks?: string[] }>;
  markDefs?: Array<{ _type: string; _key: string; href?: string }>;
}

interface PortableTextImage {
  _type: "image";
  _key: string;
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
}

type PortableTextContent = PortableTextBlock | PortableTextImage;

export function PortableText({ content }: { content: PortableTextContent[] }) {
  return (
    <div className="prose prose-invert max-w-none space-y-4 text-kx-dark-muted">
      {content?.map((block) => {
        if (block._type === "image") {
          const imageBlock = block as PortableTextImage;
          return (
            <div key={imageBlock._key} className="my-8 rounded-lg overflow-hidden">
              <Image
                src={urlFor(imageBlock).url()}
                alt={imageBlock.alt || "Blog image"}
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>
          );
        }

        if (block._type === "block") {
          const textBlock = block as PortableTextBlock;
          const style = textBlock.style || "normal";

          if (style === "h2") {
            return (
              <h2 key={textBlock._key} className="text-2xl font-bold text-kx-white mt-8 mb-4">
                {renderInline(textBlock.children || [])}
              </h2>
            );
          }

          if (style === "h3") {
            return (
              <h3 key={textBlock._key} className="text-xl font-bold text-kx-white mt-6 mb-3">
                {renderInline(textBlock.children || [])}
              </h3>
            );
          }

          if (style === "blockquote") {
            return (
              <blockquote
                key={textBlock._key}
                className="border-l-4 border-kx-orange pl-4 italic my-4"
              >
                {renderInline(textBlock.children || [])}
              </blockquote>
            );
          }

          return (
            <p key={textBlock._key} className="leading-relaxed">
              {renderInline(textBlock.children || [])}
            </p>
          );
        }

        return null;
      })}
    </div>
  );
}

function renderInline(children: any[]) {
  return children?.map((child) => {
    if (child._type === "span") {
      let text = <>{child.text}</>;

      if (child.marks?.includes("strong")) {
        text = <strong className="font-bold">{text}</strong>;
      }
      if (child.marks?.includes("em")) {
        text = <em>{text}</em>;
      }
      if (child.marks?.includes("code")) {
        text = <code className="bg-kx-surface-950 px-2 py-1 rounded text-kx-orange">{text}</code>;
      }

      return text;
    }
    return null;
  });
}
